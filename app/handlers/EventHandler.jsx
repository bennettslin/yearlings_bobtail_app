// Component that handles all user events.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Root from '../components/Root'

import { getSongIsLogue, getAnnotationObject } from 'helpers/dataHelper'
import { intersects } from 'helpers/dotHelper'
import { getClientX } from 'helpers/domHelper'
import { getPropsAreShallowEqual } from 'helpers/generalHelper'

import {
    getHandlers
} from './eventHelper'

import { REFERENCE } from 'constants/dots'
import { DESTINATION_WORMHOLE_INDEX } from 'constants/lyrics'

import { DISABLED,
    OVERVIEW_OPTIONS } from 'constants/options'

import {
    CAROUSEL_SCROLL,
    LYRIC_ANNOTATION_SCROLL,
    VERSE_SCROLL
} from 'constants/dom'

class EventHandler extends Component {

    static propTypes = {
        // Through Redux.
        selectedAdminIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        selectedCarouselNavIndex: PropTypes.number.isRequired,
        selectedDotKeys: PropTypes.object.isRequired,
        selectedScoreIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedTipsIndex: PropTypes.number.isRequired,
        selectedTitleIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        selectedWikiIndex: PropTypes.number.isRequired,
        accessedAnnotationIndex: PropTypes.number.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,
        isHeightlessLyricColumn: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        isSliderMoving: PropTypes.bool.isRequired,
        isSliderTouched: PropTypes.bool.isRequired,

        // From parent.
        scrollElementIntoView: PropTypes.func.isRequired
    }

    componentDidMount() {
        // Focus lyric section when app is mounted.
        this.focusElementForAccess()
    }

    shouldComponentUpdate(nextProps) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        }) || !getPropsAreShallowEqual({
            props: this.props.selectedDotKeys,
            nextProps: nextProps.selectedDotKeys
        })
    }

    componentDidUpdate(prevProps) {

        if (
            this.props.isHeightlessLyricColumn !==
                prevProps.isHeightlessLyricColumn ||
            this.props.isLyricExpanded !==
                prevProps.isLyricExpanded
        ) {
            // Determine whether to add or remove focus from lyric element.
            this.focusElementForAccess()
        }
    }

    /**********
     * ACCESS *
     **********/

    handleAccessToggle = (selectedAccessIndex) => {
        this.props.toggleAccess(selectedAccessIndex)
    }

    handleAnnotationAccess = ({
        doScroll,
        ...other
    }) => {
        const accessedAnnotationIndex = this.props.accessAnnotation(
            other
        )

        if (accessedAnnotationIndex && doScroll) {
            this.props.scrollElementIntoView({
                log: 'Access lyric annotation.',
                scrollClass: LYRIC_ANNOTATION_SCROLL,
                index: accessedAnnotationIndex
            })

            if (this.props.selectedCarouselNavIndex) {
                this.props.scrollElementIntoView({
                    log: 'Access carousel annotation.',
                    scrollClass: CAROUSEL_SCROLL,
                    index: accessedAnnotationIndex
                })
            }
        }
    }

    handleAnnotationAnchorAccess = (payload) => {
        this.props.accessAnnotationAnchor(payload)
    }

    handleDotAccess = (accessedDotIndex) => {
        if (getSongIsLogue(this.props.selectedSongIndex)) {
            return false
        }

        this.props.accessDot(accessedDotIndex)
        return true
    }

    handleSongAccess = (accessedNavSongIndex) => {
        this.props.accessNavSong(accessedNavSongIndex)
    }

    handleVerseDirectionAccess = (direction) => {
        if (getSongIsLogue(this.props.selectedSongIndex)) {
            return false
        }

        const {
                selectedVerseIndex
            } = this.props,
            interactivatedVerseIndex =
            this.props.interactivateVerseDirection(direction)

        if (interactivatedVerseIndex > 0) {
            this._closeSections({
                /**
                 * Once verse has been interactivated through access, close nav
                 * and force carousel so that access navigation keys do not
                 * conflict.
                 */
                forceCarousel: true,
                exemptDots: true,
                exemptOverview: true,
                exemptTips: true,
                exemptInteractivatedVerse: true,
                exemptLyric: true,
                leaveOpenPopups: true
            })
        }

        this.props.scrollElementIntoView({
            log: 'Access verse direction.',
            scrollClass: VERSE_SCROLL,

            /**
             * If interactivation remains on, scroll to interactivated verse.
             * Otherwise, scroll to selected verse.
             */
            index:
                interactivatedVerseIndex > 0 ?
                    interactivatedVerseIndex :
                    selectedVerseIndex,

            callback: this.props.determineVerseBars
        })

        return true
    }

    /*********
     * ADMIN *
     *********/

    handleAdminToggle = (e) => {
        this.stopPropagation(e)
        this.props.toggleAdmin()
        return true
    }

    /**************
     * ANNOTATION *
     **************/

    handleAnnotationWikiSelect = (
        e,
        selectedWikiIndex,
        carouselAnnotationIndex
    ) => {
        const isWikiEnabled = this.props.selectedDotKeys[REFERENCE]

        // Don't register click if reference dot is deselected.
        if (!isWikiEnabled) {
            return false
        }

        this.stopPropagation(e)
        this.props.selectWiki({
            selectedWikiIndex,
            carouselAnnotationIndex
        })
        return true
    }

    handleAnnotationWormholeSelect = (e, wormholeObject) => {

        const {
            songIndex: selectedSongIndex,
            annotationIndex: selectedAnnotationIndex,
            verseIndex: selectedVerseIndex,
            columnIndex: selectedLyricColumnIndex,
            [DESTINATION_WORMHOLE_INDEX]: destinationWormholeIndex
        } = wormholeObject

        const songSelected = this.props.selectSong({
            selectedSongIndex,
            selectedAnnotationIndex,
            selectedVerseIndex,
            destinationWormholeIndex
        })

        if (songSelected) {
            this.stopPropagation(e)

            if (!isNaN(selectedLyricColumnIndex)) {
                this.props.selectLyricColumn({
                    selectedLyricColumnIndex,
                    selectedSongIndex,
                    annotationIndex: selectedAnnotationIndex
                })
            }
        }

        return songSelected
    }

    handleAnnotationPrevious = (e) => {
        this._handleAccessedAnnotationSelect(e, -1)
    }

    handleAnnotationNext = (e) => {
        this._handleAccessedAnnotationSelect(e, 1)
    }

    _handleAccessedAnnotationSelect(e, direction) {
        this.stopPropagation(e)
        const selectedAnnotationIndex = this.props.selectAnnotation({
            direction
        })
        this.props.scrollElementIntoView({
            log: 'Select accessed lyric annotation.',
            scrollClass: LYRIC_ANNOTATION_SCROLL,
            index: selectedAnnotationIndex
        })
        if (this.props.selectedCarouselNavIndex) {
            this.props.scrollElementIntoView({
                log: 'Select accessed carousel annotation.',
                scrollClass: CAROUSEL_SCROLL,
                index: selectedAnnotationIndex
            })
        }
    }

    /*********
     * AUDIO *
     *********/

    handleAudioPlay = (e) => {
        const playToggled = this.props.togglePlay()
        if (playToggled) {
            this.stopPropagation(e)
        }
        return playToggled
    }

    handleAudioPreviousSong = (e) => {
        const songSelected = this.props.selectSong({
            direction: -1
        })
        this._closeDotsIfOverviewWillShow()
        if (songSelected) {
            this.stopPropagation(e)
        }
        return songSelected
    }

    handleAudioNextSong = (e) => {
        const songSelected = this.props.selectSong({
            direction: 1
        })
        this._closeDotsIfOverviewWillShow()
        if (songSelected) {
            this.stopPropagation(e)
        }
        return songSelected
    }

    handleAudioOptionsToggle = (e) => {
        const optionSelected = this.props.selectAudioOption()
        if (optionSelected) {
            this.stopPropagation(e)
        }
        return optionSelected
    }

    /************
     * CAROUSEL *
     ************/

    handleCarouselNavToggle = (e, selectedCarouselNavIndex) => {
        this.stopPropagation(e)

        const presentCarouselIndex = this.props.selectedCarouselNavIndex,
            carouselSelected = this.props.selectCarouselNav(selectedCarouselNavIndex)

        // Scroll only when expanding carousel.
        if (carouselSelected && !presentCarouselIndex) {
            const { selectedAnnotationIndex } = this.props,
                annotationIndex = selectedAnnotationIndex ? selectedAnnotationIndex : this.props.accessedAnnotationIndex
            this.props.scrollElementIntoView({
                log: 'Nav toggled carousel annotation.',
                scrollClass: CAROUSEL_SCROLL,
                index: annotationIndex
            })
        }

        this._closeSections({
            exemptAnnotation: true,
            exemptDots: true,
            exemptInteractivatedVerse: true,
            exemptOverview: true,
            exemptTips: true,
            continuePastClosingPopups: true
        })

        return carouselSelected
    }

    /*******
     * DOT *
     *******/

    handleDotSelect = (e, dotIndex) => {
        if (getSongIsLogue(this.props.selectedSongIndex)) {
            return false
        }

        this.stopPropagation(e)
        this.props.toggleDot(dotIndex)
        return true
    }

    /********
     * DOTS *
     ********/

    handleDotsSectionToggle = (e) => {
        const dotsToggled = this.props.selectDotsExpand()
        if (dotsToggled) {
            this.stopPropagation(e)
            this._closeSections({
                exemptDots: true,
                continuePastClosingPopups: true
            })
        }
        return dotsToggled
    }

    /*********
     * LYRIC *
     *********/

    handleLyricSectionExpand = (e) => {
        const lyricsToggled = this.props.selectLyricExpand()
        if (lyricsToggled) {
            this.stopPropagation(e)
            this._closeSections({
                exemptAnnotation: true,
                exemptLyric: true,
                continuePastClosingPopups: true
            })
        }
        return lyricsToggled
    }

    handleLyricWheel = (
        e,
        {
            timeoutDuration,
            setToManualScroll = false
        } = {}
    ) => {
        let hasRoomToScroll = false

        if (setToManualScroll) {
            // If triggered manually by keyboard, set to true.
            this.props.selectManualScroll(true)
        }

        // Determine whether there is room to scroll.
        if (e) {
            const { deltaY = 0 } = e,
                { scrollTop } = this.myLyricElement

            if (deltaY > 0) {
                const { scrollHeight, clientHeight } = this.myLyricElement

                if (scrollTop < scrollHeight - clientHeight) {
                    hasRoomToScroll = true
                }

            } else if (deltaY < 0) {
                if (scrollTop) {
                    hasRoomToScroll = true
                }
            }

            if (hasRoomToScroll) {

                // Select manual scroll only if wheel moved far enough.
                if (deltaY > 1 || deltaY < -1) {
                    this.props.selectManualScroll(true)
                }

            } else {

                // If no room to scroll, don't bother to send event.
                e.preventDefault()
            }
        }

        // Determine verse bars if scrolled, or if triggered manually.
        if (hasRoomToScroll || !e) {
            this.props.determineVerseBars(timeoutDuration)
        }
    }

    handleLyricAutoScroll = () => {

        // Change back to autoScroll.
        this.props.selectManualScroll(false)

        // Scroll lyric as if verse bar was selected.
        this.handleVerseBarSelect()
    }

    handleLyricColumnSelect = (e) => {
        const columnSelected = this.props.selectLyricColumn()
        if (columnSelected) {
            this.stopPropagation(e)
        }
        return columnSelected
    }

    /**********
     * LYRICS *
     **********/

    handleLyricVerseSelect = (
        e,
        selectedVerseIndex,
        fromStanzaTab
    ) => {
        if (getSongIsLogue(this.props.selectedSongIndex)) {
            return false
        }

        if (
            !fromStanzaTab &&

            // The UI should prevent this, but just in case.
            selectedVerseIndex !== this.props.interactivatedVerseIndex
        ) {
            return false
        }

        this.stopPropagation(e)
        this.props.selectVerse({
            selectedVerseIndex,
            scrollLog: 'Select interactivated verse.'
        })

        // Verse bars always get reset.
        this.props.resetVerseBars()

        // Deinteractivate after selecting.
        this.props.interactivateVerse()

        return true
    }

    handleLyricAnnotationSelect = (
        e,
        selectedAnnotationIndex,
        fromCarousel
    ) => {
        /**
         * FIXME: This check is only necessary when clicking an annotation, to
         * ensure that it is not shown as text. Maybe bypass if done through
         * access?
         */
        // Do nothing if no dots are selected, as no annotation can be selected.
        if (selectedAnnotationIndex < 0) {
            return false
        }

        // If selecting an annotation, make sure that its dots intersect.
        if (selectedAnnotationIndex) {
            const annotation = getAnnotationObject(this.props.selectedSongIndex, selectedAnnotationIndex)

            if (!intersects(annotation.dotKeys, this.props.selectedDotKeys)) {
                return false
            }
        }

        this.stopPropagation(e)
        this._closeSections({
            exemptAnnotation: true,
            exemptLyric: true
        })
        this.props.selectAnnotation({
            selectedAnnotationIndex
        })

        if (selectedAnnotationIndex) {

            // Scroll lyric column only if selecting from carousel.
            if (fromCarousel) {
                this.props.scrollElementIntoView({
                    log: 'Carousel selected lyric annotation.',
                    scrollClass: LYRIC_ANNOTATION_SCROLL,
                    index: selectedAnnotationIndex
                })

            // Scroll carousel only if not selecting from carousel.
            } else {
                if (this.props.selectedCarouselNavIndex) {
                    this.props.scrollElementIntoView({
                        log: 'Lyric selected carousel annotation.',
                        scrollClass: CAROUSEL_SCROLL,
                        index: selectedAnnotationIndex
                    })
                }
            }
        }

        return true
    }

    /*******
     * NAV *
     *******/

    handleNavSongSelect = (e, selectedSongIndex) => {
        this.stopPropagation(e)
        return this.props.selectSong({
            selectedSongIndex
        })
    }

    handleNavBookSelect = (e) => {
        this.stopPropagation(e)
        this.props.selectBookColumn()
    }

    /************
     * OVERVIEW *
     ************/

    handleOverviewToggle = (e, justHideIfShown) => {
        /**
         * If from click, alternate between shown and disabled. If from keydown,
         * cycle through all three options.
         */
        const clickToggle = e.type === 'click',
            overviewToggled = this.props.selectOverview({
                clickToggle,
                justHideIfShown
            })

        if (overviewToggled) {
            this.stopPropagation(e)
            this._closeSections({
                exemptOverview: true,
                continuePastClosingPopups: true
            })
        }
        return overviewToggled
    }

    /*********
     * POPUP *
     *********/

    handlePopupContainerClick = (e, closeLeftShelf) => {
        this.stopPropagation(e)

        // Carousel annotation was clicked.
        if (closeLeftShelf) {
            this.props.selectDotsExpand(false)
            this.props.selectOverview({
                justHideIfShown: true
            })
            this.props.selectTips({
                justHideIfShown: true
            })
        }
    }

    /*********
     * SCENE *
     *********/

    handleSceneDirection = (e, direction) => {
        this.stopPropagation(e)
        this.props.selectScene(direction)
        return true
    }

    /*********
     * SCORE *
     *********/

    handleScoreToggle = (e) => {
        const scoreToggled = this.props.selectScore()
        if (scoreToggled) {
            this.stopPropagation(e)

            // If score is off and we're toggling it on, then close other popups.
            if (!this.props.selectedScoreIndex) {
                this._closeSections({
                    justClosePopups: true
                })
            }
        }
        return scoreToggled
    }

    /********
     * TIPS *
     ********/

    handleTipsToggle = (e, justHideIfShown) => {
        // Duplicated from handleOverviewToggle.

        /**
         * If from click, alternate between shown and disabled. If from keydown,
         * cycle through all three options.
         */
        const clickToggle = e.type === 'click',
            tipsToggled = this.props.selectTips({
                clickToggle,
                justHideIfShown
            })

        if (tipsToggled) {
            this.stopPropagation(e)
            this._closeSections({
                exemptOverview: true,
                exemptTips: true,
                continuePastClosingPopups: true
            })
        }
        return tipsToggled
    }

    /*********
     * TITLE *
     *********/

    handleTitleToggle = (e) => {
        const titleToggled = this.props.selectTitle()
        if (titleToggled) {
            this.stopPropagation(e)

            // If title is off and we're toggling it on, then close other popups.
            if (!this.props.selectedTitleIndex) {
                this._closeSections({
                    justClosePopups: true
                })
            }
        }
        return titleToggled
    }

    /*********
     * TOUCH *
     *********/

    handleSliderTouchBegin = (e, sliderElement) => {

        // Can't be handled in logue.
        if (getSongIsLogue(this.props.selectedSongIndex)) {
            return
        }

        const clientX = getClientX(e),
            clientRect = sliderElement.getBoundingClientRect()

        if (!isNaN(clientX)) {
            this.stopPropagation(e)
            this.props.touchSliderBegin({ clientRect, clientX })
        }

        this.props.interactivateVerse()
    }

    handleBodyTouchMove = (e) => {
        const clientX = getClientX(e)

        if (!isNaN(clientX)) {
            this.stopPropagation(e)
            this.props.touchBodyMove(clientX)
        }
    }

    handleBodyTouchEnd = (e) => {
        e.preventDefault()
        this.stopPropagation(e)
        this.props.touchBodyEnd()

        /**
         * Prevent slider from locking up and not registering a touch move. Not
         * sure just yet if this really does the trick.
         */
        this.focusElementForAccess()
    }

    handleBodyClick = (e) => {
        this.stopPropagation(e)

        // If overview is open when tips is open, leave overview open.
        const exemptOverview = !this.props.selectedTipsIndex

        this._closeSections({
            exemptLyric: true,
            exemptOverview
        })

        // Return focus to lyric section so it can have scroll access.
        // FIXME: Blind users will use tab to change focus. Will they find this annoying?
        this.focusElementForAccess()
    }

    /*********
     * VERSE *
     *********/

    // This is also triggered by toggling on auto scroll.
    handleVerseBarSelect = () => {
        // No need to know event, since we are just scrolling.
        const { selectedVerseIndex } = this.props
        this.props.scrollElementIntoView({
            log: 'Verse bar selected verse.',
            scrollClass: VERSE_SCROLL,
            index: selectedVerseIndex
        })

        this.props.resetVerseBars()
    }

    handleVerseBarWheel = (e) => {
        const { deltaY } = e.nativeEvent
        this.myLyricElement.scrollTop += deltaY

        this.props.determineVerseBars()
    }

    handleVerseInteractivate = (e, verseIndex) => {
        const {
            selectedVerseIndex
        } = this.props

        // Do not allow click on selected verse.
        if (
            verseIndex !== selectedVerseIndex
        ) {

            this.stopPropagation(e)
            this._closeSections({
                exemptDots: true,
                exemptInteractivatedVerse: true,
                exemptLyric: true,
                exemptOverview: true,
                exemptTips: true
            })
            this.props.interactivateVerse(verseIndex)
        }
    }

    /********
     * WIKI *
     ********/

    handleWikiToggle = (e, selectedWikiIndex) => {
        this.stopPropagation(e)
        // If wiki is off and we're toggling it on, then close other popups.
        if (!this.props.selectedWikiIndex) {
            this._closeSections({
                justClosePopups: true
            })
        }
        this.props.selectWiki({ selectedWikiIndex })
    }

    /***********
     * HELPERS *
     ***********/

    _closeSections ({

        exemptAnnotation,
        forceCarousel,
        exemptDots,
        exemptLyric,
        exemptOverview,
        exemptTips,
        exemptInteractivatedVerse,

        continuePastClosingPopups,
        justClosePopups,
        leaveOpenPopups

    }) {

        const { selectedScoreIndex,
            selectedTitleIndex,
            selectedWikiIndex } = this.props

        if (!leaveOpenPopups) {

            // If popup is open, close it and do nothing else.
            if (selectedWikiIndex) {
                this.props.selectWiki()
                if (!continuePastClosingPopups) {
                    return
                }

            } else if (selectedScoreIndex) {
                this.props.selectScore(false)
                if (!continuePastClosingPopups) {
                    return
                }

            } else if (selectedTitleIndex) {
                this.props.selectTitle(false)
                if (!continuePastClosingPopups) {
                    return
                }
            }
        }

        if (justClosePopups) {
            return
        }

        if (!exemptAnnotation) {
            this.props.selectAnnotation()
        }

        if (forceCarousel) {
            this.props.selectCarouselNav(true)
        }

        if (!exemptDots) {
            this.props.selectDotsExpand(false)
        }

        if (!exemptLyric) {
            this.props.selectLyricExpand(false)
        }

        if (!exemptOverview) {
            this.props.selectOverview({
                justHideIfShown: true
            })
        }

        if (!exemptTips) {
            this.props.selectTips({
                justHideIfShown: true
            })
        }

        if (!exemptInteractivatedVerse) {
            this.props.interactivateVerse()
        }
    }

    stopPropagation = (e) => {
        if (e && e.stopPropagation) {
            e.stopPropagation()

            const { type } = e

            // Turn access off if not from a keyboard event.
            if (type === 'click' || type === 'mousedown') {
                this.props.toggleAccess(false)
            }
        }
    }

    handleScrollUponCarouselRender = () => {

        if (getSongIsLogue(this.props.selectedSongIndex)) {
            return
        }

        const { selectedAnnotationIndex } = this.props

        // Scroll to carousel annotation if toggled on.
        if (this.props.selectedCarouselNavIndex) {

            this.props.scrollElementIntoView({
                log: 'Rerender selected carousel annotation.',
                scrollClass: CAROUSEL_SCROLL,
                index: selectedAnnotationIndex || 1,
                time: 0
            })
        }
    }

    handleScrollUponLyricRender = () => {

        if (getSongIsLogue(this.props.selectedSongIndex)) {
            return
        }

        const { selectedAnnotationIndex } = this.props

        // If a wormhole was selected, there will be an annotation index.
        if (selectedAnnotationIndex) {

            this.props.scrollElementIntoView({
                log: 'Rerender selected lyric annotation.',
                scrollClass: LYRIC_ANNOTATION_SCROLL,
                index: selectedAnnotationIndex,
                time: 0,
                callback: this.props.determineVerseBars
            })

        // Otherwise, scroll to given verse index.
        } else {
            const { selectedVerseIndex } = this.props

            this.props.scrollElementIntoView({
                log: 'Rerender selected verse.',
                scrollClass: VERSE_SCROLL,
                index: selectedVerseIndex,
                time: 0,
                callback: this.props.determineVerseBars
            })
        }
    }

    _closeDotsIfOverviewWillShow () {
        /**
         * Helper method to close the dots section when selecting new song and
         * overview is not disabled.
         */
        const { selectedDotsIndex } = this.props

        if (selectedDotsIndex) {
            const selectedOverviewOption = OVERVIEW_OPTIONS[this.props.selectedOverviewIndex]

            if (selectedOverviewOption !== DISABLED) {
                this.props.selectDotsExpand()
            }
        }
    }

    focusElementForAccess = () => {

        const {
                isHeightlessLyricColumn,
                isLyricExpanded
            } = this.props,

            doFocusLyricElement =
                this.myLyricElement &&
                    (
                        !isHeightlessLyricColumn ||
                        isLyricExpanded
                    )

        let focusedElement = doFocusLyricElement ?
            this.myLyricElement :
            this.myRootElement

        if (focusedElement) {
            logger.warn(`Focus: ${doFocusLyricElement ? 'Lyric' : 'Root'}`)
            focusedElement.focus()
        }
    }

    setLyricRef = (node) => {
        this.myLyricElement = node

        // Add or remove focus.
        this.focusElementForAccess()
    }

    setRootRef = (node) => {
        this.myRootElement = node
    }

    setScoreRef = (node) => {
        this.myScoreElement = node
    }

    setWikiRef = (node) => {
        this.myWikiElement = node
    }

    render() {
        return (
            <Root eventHandlers={getHandlers(this)} />
        )
    }
}

const mapStateToProps = ({
    responsiveStore: { isHeightlessLyricColumn },
    songStore: {
        selectedSongIndex,
        selectedVerseIndex,
        selectedAnnotationIndex
    },
    selectedAdminIndex,
    selectedCarouselNavIndex,
    selectedDotKeys,
    selectedScoreIndex,
    selectedTipsIndex,
    selectedTitleIndex,
    selectedWikiIndex,
    interactivatedVerseIndex,
    accessedAnnotationIndex,
    isLyricExpanded,
    sliderStore: {
        isSliderMoving,
        isSliderTouched
    }
}) => ({
    isHeightlessLyricColumn,
    selectedAdminIndex,
    selectedAnnotationIndex,
    selectedCarouselNavIndex,
    selectedDotKeys,
    selectedScoreIndex,
    selectedSongIndex,
    selectedTipsIndex,
    selectedTitleIndex,
    selectedVerseIndex,
    selectedWikiIndex,
    interactivatedVerseIndex,
    accessedAnnotationIndex,
    isLyricExpanded,
    isSliderMoving,
    isSliderTouched
})

export default connect(mapStateToProps)(EventHandler)
