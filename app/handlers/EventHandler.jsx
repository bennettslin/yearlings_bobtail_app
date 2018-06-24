// Component that handles all user events.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Root from '../components/Root'

import { getSongIsLogue, getAnnotationObject } from '../helpers/dataHelper'
import { intersects } from '../helpers/dotHelper'
import { getClientX } from '../helpers/domHelper'

import { REFERENCE } from '../constants/dots'
import { DISABLED,
         OVERVIEW_OPTIONS } from '../constants/options'

import {
    CAROUSEL_SCROLL,
    LYRIC_ANNOTATION_SCROLL,
    VERSE_SCROLL
} from '../constants/dom'

class EventHandler extends Component {

    static propTypes = {
        scrollElementIntoView: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.focusElementForAccess = this.focusElementForAccess.bind(this)

        this.handleAnnotationAccess = this.handleAnnotationAccess.bind(this)
        this.handleDotAccess = this.handleDotAccess.bind(this)
        this.handleAnnotationAnchorAccess = this.handleAnnotationAnchorAccess.bind(this)
        this.handleSongAccess = this.handleSongAccess.bind(this)
        this.handleVerseDirectionAccess = this.handleVerseDirectionAccess.bind(this)

        this.handleBodyClick = this.handleBodyClick.bind(this)
        this.handleBodyTouchMove = this.handleBodyTouchMove.bind(this)
        this.handleBodyTouchEnd = this.handleBodyTouchEnd.bind(this)
        this.handlePopupContainerClick = this.handlePopupContainerClick.bind(this)
        this.handleSetVerseElement = this.handleSetVerseElement.bind(this)
        this.handleAccessToggle = this.handleAccessToggle.bind(this)
        this.handleAdminToggle = this.handleAdminToggle.bind(this)
        this.handleAnnotationPrevious = this.handleAnnotationPrevious.bind(this)
        this.handleAnnotationNext = this.handleAnnotationNext.bind(this)
        this.handleAnnotationWikiSelect = this.handleAnnotationWikiSelect.bind(this)
        this.handleAnnotationPortalSelect = this.handleAnnotationPortalSelect.bind(this)
        this.handleAudioPlay = this.handleAudioPlay.bind(this)
        this.handleAudioPreviousSong = this.handleAudioPreviousSong.bind(this)
        this.handleAudioNextSong = this.handleAudioNextSong.bind(this)
        this.handleAudioOptionsToggle = this.handleAudioOptionsToggle.bind(this)
        this.handleSliderTouchBegin = this.handleSliderTouchBegin.bind(this)

        this.handlePlayerTimeChange = this.handlePlayerTimeChange.bind(this)
        this.handlePlayerNextSong = this.handlePlayerNextSong.bind(this)
        this.handlePlayerTimeReset = this.handlePlayerTimeReset.bind(this)

        this.handleDotSelect = this.handleDotSelect.bind(this)
        this.handleDotsSectionToggle = this.handleDotsSectionToggle.bind(this)
        this.handleLyricSectionExpand = this.handleLyricSectionExpand.bind(this)
        this.handleLyricAutoScroll = this.handleLyricAutoScroll.bind(this)
        this.handleLyricColumnSelect = this.handleLyricColumnSelect.bind(this)
        this.handleLyricAnnotationSelect = this.handleLyricAnnotationSelect.bind(this)
        this.handleLyricPlay = this.handleLyricPlay.bind(this)
        this.handleLyricVerseSelect = this.handleLyricVerseSelect.bind(this)
        this.handleLyricWheel = this.handleLyricWheel.bind(this)
        this._determineVerseBarsCallback = this._determineVerseBarsCallback.bind(this)
        this.handleNavSongSelect = this.handleNavSongSelect.bind(this)
        this.handleNavBookSelect = this.handleNavBookSelect.bind(this)
        this.handleOverviewToggle = this.handleOverviewToggle.bind(this)
        this.handlePopupFocus = this.handlePopupFocus.bind(this)
        this.handleCarouselNavToggle = this.handleCarouselNavToggle.bind(this)
        this.handleSceneDirection = this.handleSceneDirection.bind(this)
        this.handleScoreToggle = this.handleScoreToggle.bind(this)
        this.handleTipsToggle = this.handleTipsToggle.bind(this)
        this.handleTitleToggle = this.handleTitleToggle.bind(this)
        this.handleVerseBarSelect = this.handleVerseBarSelect.bind(this)
        this.handleVerseBarWheel = this.handleVerseBarWheel.bind(this)
        this.handleVerseInteractivate = this.handleVerseInteractivate.bind(this)
        this.handleWikiToggle = this.handleWikiToggle.bind(this)
        this.handleScrollAfterLyricRerender = this.handleScrollAfterLyricRerender.bind(this)
        this.stopPropagation = this.stopPropagation.bind(this)
    }

    componentDidMount() {
        // Focus lyric section when app is mounted.
        this.focusElementForAccess()
    }

    componentDidUpdate(prevProps) {

        // If annotation is selected or accessed in carousel, scroll to it.
        if (this.props.appMounted && !prevProps.appMounted) {
            const { selectedCarouselNavIndex,
                    selectedAnnotationIndex,
                    accessedAnnotationIndex } = this.props,

                scrollToAnnotationIndex =
                    selectedAnnotationIndex || accessedAnnotationIndex

            if (selectedCarouselNavIndex && scrollToAnnotationIndex) {
                // Animation is slightly less janky with setTimeout.
                setTimeout(() => {
                    this.props.scrollElementIntoView({
                        scrollClass: CAROUSEL_SCROLL,
                        index: scrollToAnnotationIndex
                    })
                }, 0)
            }
        }
    }

    /**********
     * ACCESS *
     **********/

    handleAccessToggle(selectedAccessIndex) {
        this.props.toggleAccess(selectedAccessIndex)
    }

    handleAnnotationAccess({
        accessedAnnotationIndex,
        doScroll
    }) {
        const annotationAccessed = this.props.accessAnnotation(accessedAnnotationIndex)
        if (annotationAccessed && doScroll) {
            this.props.scrollElementIntoView({
                scrollClass: LYRIC_ANNOTATION_SCROLL,
                index: accessedAnnotationIndex
            })

            if (this.props.selectedCarouselNavIndex) {
                this.props.scrollElementIntoView({
                    scrollClass: CAROUSEL_SCROLL,
                    index: accessedAnnotationIndex
                })
            }
        }
    }

    handleDotAccess(accessedDotIndex) {
        if (getSongIsLogue(this.props.selectedSongIndex)) {
            return false
        }

        this.props.accessDot(accessedDotIndex)
        return true
    }

    handleAnnotationAnchorAccess(accessedAnnotationAnchorIndex) {
        this.props.accessAnnotationAnchor(accessedAnnotationAnchorIndex)
    }

    handleSongAccess(accessedNavSongIndex) {
        this.props.accessNavSong(accessedNavSongIndex)
    }

    handleVerseDirectionAccess(direction) {
        if (getSongIsLogue(this.props.selectedSongIndex)) {
            return false
        }

        const interactivatedVerseIndex =
            this.props.interactivateVerseDirection(direction)

        this._closeSections({
            /**
             * Once verse has been interactivated through access, close nav and
             * force carousel so that access navigation keys do not conflict.
             */
            forceCarousel: true,

            exemptDots: true,
            exemptOverview: true,
            exemptTips: true,
            exemptInteractivatedVerse: true,
            exemptLyric: true,
            leaveOpenPopups: true
        })
        this.props.scrollElementIntoView({
            scrollClass: VERSE_SCROLL,
            index: interactivatedVerseIndex
        })
        return true
    }

    /*********
     * ADMIN *
     *********/

    handleAdminToggle(e) {
        this.stopPropagation(e)
        this.props.toggleAdmin()
        return true
    }

    /**************
     * ANNOTATION *
     **************/

    handleAnnotationWikiSelect(e, selectedWikiIndex, carouselAnnotationIndex) {
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

    handleAnnotationPortalSelect(e, selectedSongIndex, selectedAnnotationIndex, selectedVerseIndex, selectedLyricColumnIndex, destinationPortalIndex) {

        const songSelected = this.props.selectSong({
            selectedSongIndex,
            selectedAnnotationIndex,
            selectedVerseIndex,
            destinationPortalIndex
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

    handleAnnotationPrevious(e) {
        this._handleAccessedAnnotationSelect(e, -1)
    }

    handleAnnotationNext(e) {
        this._handleAccessedAnnotationSelect(e, 1)
    }

    _handleAccessedAnnotationSelect(e, direction) {
        this.stopPropagation(e)
        const selectedAnnotationIndex = this.props.selectAnnotation({
            direction
        })
        this.props.scrollElementIntoView({
            scrollClass: LYRIC_ANNOTATION_SCROLL,
            index: selectedAnnotationIndex
        })
        if (this.props.selectedCarouselNavIndex) {
            this.props.scrollElementIntoView({
                scrollClass: CAROUSEL_SCROLL,
                index: selectedAnnotationIndex
            })
        }
    }

    /*********
     * AUDIO *
     *********/

    handleAudioPlay(e) {
        const playToggled = this.props.togglePlay()
        if (playToggled) {
            this.stopPropagation(e)
        }
        return playToggled
    }

    handleAudioPreviousSong(e) {
        const songSelected = this.props.selectSong({
            direction: -1
        })
        this._closeDotsIfOverviewWillShow()
        if (songSelected) {
            this.stopPropagation(e)
        }
        return songSelected
    }

    handleAudioNextSong(e) {
        const songSelected = this.props.selectSong({
            direction: 1
        })
        this._closeDotsIfOverviewWillShow()
        if (songSelected) {
            this.stopPropagation(e)
        }
        return songSelected
    }

    handleAudioOptionsToggle(e) {
        const optionSelected = this.props.selectAudioOption()
        if (optionSelected) {
            this.stopPropagation(e)
        }
        return optionSelected
    }

    /****************
     * AUDIO PLAYER *
     ****************/

    handlePlayerTimeChange(time) {
        this.props.selectTime({
            selectedTimePlayed: time,
            isPlayerAdvancing: true
        })
    }

    handlePlayerNextSong(e) {
        this.props.advanceToNextSong(e)
    }

    handlePlayerTimeReset(e) {
        this.props.resetUpdatedTimePlayed(e)
    }

    /************
     * CAROUSEL *
     ************/

    handleCarouselNavToggle(e, selectedCarouselNavIndex) {
        this.stopPropagation(e)

        const presentCarouselIndex = this.props.selectedCarouselNavIndex,
            carouselSelected = this.props.selectCarouselNav(selectedCarouselNavIndex)

        // Scroll only when expanding carousel.
        if (carouselSelected && !presentCarouselIndex) {
            const { selectedAnnotationIndex } = this.props,
                annotationIndex = selectedAnnotationIndex ? selectedAnnotationIndex : this.props.accessedAnnotationIndex
            this.props.scrollElementIntoView({
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

    handleDotSelect(e, dotIndex) {
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

    handleDotsSectionToggle(e) {
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

    handleLyricSectionExpand(e) {
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

    handleLyricWheel(e) {
        let hasRoomToScroll = false

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
            this.props.determineVerseBars()
        }
    }

    handleLyricAutoScroll() {

        // Change back to autoScroll.
        this.props.selectManualScroll(false)

        // Scroll lyric as if verse bar was selected.
        this.handleVerseBarSelect()
    }

    handleLyricColumnSelect(e) {
        const columnSelected = this.props.selectLyricColumn({})
        if (columnSelected) {
            this.stopPropagation(e)
        }
        return columnSelected
    }

    /**********
     * LYRICS *
     **********/

    handleLyricPlay() {
        if (getSongIsLogue(this.props.selectedSongIndex)) {
            return false
        }

        this.props.togglePlay()
        return true
    }

    handleLyricVerseSelect(e, selectedVerseIndex) {
        if (getSongIsLogue(this.props.selectedSongIndex)) {
            return false
        }

        this.stopPropagation(e)
        this.props.selectVerse({
            selectedVerseIndex
        })

        // Deinteractivate after selecting.
        this.props.interactivateVerse()

        return true
    }

    handleLyricAnnotationSelect(e, selectedAnnotationIndex, fromCarousel) {
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

        // Scroll lyric column only if selecting from carousel.
        if (fromCarousel) {
            this.props.scrollElementIntoView({
                scrollClass: LYRIC_ANNOTATION_SCROLL,
                index: selectedAnnotationIndex
            })

        // Scroll carousel only if not selecting from carousel.
        } else {
            if (this.props.selectedCarouselNavIndex) {
                this.props.scrollElementIntoView({
                    scrollClass: CAROUSEL_SCROLL,
                    index: selectedAnnotationIndex
                })
            }
        }

        return true
    }

    /*******
     * NAV *
     *******/

    handleNavSongSelect(e, selectedSongIndex) {
        this.stopPropagation(e)
        return this.props.selectSong({
            selectedSongIndex
        })
    }

    handleNavBookSelect(e) {
        this.stopPropagation(e)
        this.props.selectBookColumn()
    }

    /************
     * OVERVIEW *
     ************/

    handleOverviewToggle(e, justHideIfShown) {
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

    handlePopupContainerClick(e, closeLeftShelf) {
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

    // NOTE: This is now no longer used anywhere.
    handlePopupFocus() {
        const { selectedScoreIndex,
                selectedWikiIndex } = this.props

        if (selectedScoreIndex) {
            this.myScoreElement && this.myScoreElement.focus()

        } else if (selectedWikiIndex) {
            this.myWikiElement && this.myWikiElement.focus()
        }
    }

    /*********
     * SCENE *
     *********/

    handleSceneDirection(e, direction) {
        this.stopPropagation(e)
        this.props.selectScene(direction)
        return true
    }

    /*********
     * SCORE *
     *********/

    handleScoreToggle(e) {
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

    handleTipsToggle(e, justHideIfShown) {
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

    handleTitleToggle(e) {
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

    handleSliderTouchBegin(e, sliderElement) {

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

    handleBodyTouchMove(e) {
        const clientX = getClientX(e)

        if (!isNaN(clientX)) {
            this.stopPropagation(e)
            this.props.touchBodyMove(clientX)
        }
    }

    handleBodyTouchEnd(e) {
        e.preventDefault()
        this.stopPropagation(e)
        this.props.touchBodyEnd()
    }

    handleBodyClick(e) {
        this.stopPropagation(e)

        // If overview is open when tips is open, leave overview open.
        const exemptOverview = !this.props.selectedTipsIndex;

        this._closeSections({
            exemptLyric: true,
            exemptOverview
        })

        // Return focus to lyric section so it can have scroll access.
        // FIXME: Blind users will use tab to change focus. Will they find this annoying?
        this.focusElementForAccess()
    }


    focusElementForAccess() {

        const { isHeightlessLyricColumn,
                isLyricExpanded } = this.props,

            focusLyricSectionFirst =
                !isHeightlessLyricColumn || isLyricExpanded

        let focusElement

        // In live view.
        if (focusLyricSectionFirst) {
            /**
             * Not sure why the refs sometimes don't work, but if that's the
             * case, we'll find the elements through the document.
             */
            focusElement = this.myLyricElement ||
                document.getElementsByClassName('Lyric')[0]

        // In admin view.
        } else {
            focusElement = this.myRootElement ||
                document.getElementsByClassName('Root')[0]
        }

        if (focusElement) {
            focusElement.focus()
        }
    }

    /*********
     * VERSE *
     *********/

    handleVerseBarSelect() {
        // No need to know event, since we are just scrolling.
        const { selectedVerseIndex } = this.props
        this.props.scrollElementIntoView({
            scrollClass: VERSE_SCROLL,
            index: selectedVerseIndex
        })

        this.props.resetVerseBars()
    }

    handleVerseBarWheel(e) {
        const { deltaY } = e.nativeEvent
        this.myLyricElement.scrollTop += deltaY
    }

    handleVerseInteractivate(e, verseIndex) {
        const { selectedVerseIndex,
                isVerseBarAbove,
                isVerseBarBelow } = this.props

        // If verse bar is shown, do not allow click on selected verse.
        if (!(isVerseBarAbove || isVerseBarBelow) || verseIndex !== selectedVerseIndex) {

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

    handleSetVerseElement(verseElement) {
        this.props.setVerseElement({
            verseElement
        })
    }

    /********
     * WIKI *
     ********/

    handleWikiToggle(e, selectedWikiIndex) {
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

    _closeSections({

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
                this.props.selectWiki({})
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
            this.props.selectAnnotation({})
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

    stopPropagation(e) {
        if (e && e.stopPropagation) {
            e.stopPropagation()

            const { type } = e

            // Turn access off if not from a keyboard event.
            if (type === 'click' || type === 'mousedown') {
                this.props.toggleAccess(false)
            }
        }
    }

    handleScrollAfterLyricRerender() {

        if (getSongIsLogue(this.props.selectedSongIndex)) {
            return
        }

        const { selectedAnnotationIndex } = this.props

        // If a portal was selected, there will be an annotation index.
        if (selectedAnnotationIndex) {
            this.props.scrollElementIntoView({
                scrollClass: LYRIC_ANNOTATION_SCROLL,
                index: selectedAnnotationIndex,
                time: 0,
                callback: this._determineVerseBarsCallback
            })

            if (this.props.selectedCarouselNavIndex) {
                this.props.scrollElementIntoView({
                    scrollClass: CAROUSEL_SCROLL,
                    time: 0,
                    index: selectedAnnotationIndex
                })
            }

            // Otherwise, scroll to given verse index.
        } else {
            const { selectedVerseIndex } = this.props

            this.props.scrollElementIntoView({
                scrollClass: VERSE_SCROLL,
                index: selectedVerseIndex,
                time: 0,
                callback: this._determineVerseBarsCallback
            })

            if (this.props.selectedCarouselNavIndex) {
                this.props.scrollElementIntoView({
                    scrollClass: CAROUSEL_SCROLL,
                    index: 1,
                    time: 0
                })
            }
        }
    }

    _determineVerseBarsCallback() {
        // Allow this to be called without event as the argument.
        this.props.determineVerseBars()
    }

    _closeDotsIfOverviewWillShow() {
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

    render() {

        const
            getRootRef = node => this.myRootElement = node,
            getLyricRef = node => this.myLyricElement = node,
            getScoreRef = node => this.myScoreElement = node,
            getWikiRef = node => this.myWikiElement = node,

            {
                getCarouselAnnotationRef,
                getLyricAnnotationRef,
                getVerseRef
            } = this.props,

            eventHandlers = {

                getRootRef,
                getLyricRef,
                getScoreRef,
                getWikiRef,

                focusElementForAccess: this.focusElementForAccess,
                handleAnnotationAccess: this.handleAnnotationAccess,
                handleDotAccess: this.handleDotAccess,
                handleAnnotationAnchorAccess: this.handleAnnotationAnchorAccess,
                handleSongAccess: this.handleSongAccess,
                handleVerseDirectionAccess: this.handleVerseDirectionAccess,
                handlePopupFocus: this.handlePopupFocus,
                handleBodyClick: this.handleBodyClick,
                handleBodyTouchMove: this.handleBodyTouchMove,
                handleBodyTouchEnd: this.handleBodyTouchEnd,
                handlePopupContainerClick: this.handlePopupContainerClick,
                handleSetVerseElement: this.handleSetVerseElement,
                handleAccessToggle: this.handleAccessToggle,
                handleAdminToggle: this.handleAdminToggle,
                handleAnnotationWikiSelect: this.handleAnnotationWikiSelect,
                handleAnnotationPortalSelect: this.handleAnnotationPortalSelect,
                handleAnnotationPrevious: this.handleAnnotationPrevious,
                handleAnnotationNext: this.handleAnnotationNext,
                handleAudioPlay: this.handleAudioPlay,
                handleAudioPreviousSong: this.handleAudioPreviousSong,
                handleAudioNextSong: this.handleAudioNextSong,
                handleAudioOptionsToggle: this.handleAudioOptionsToggle,
                handleSliderTouchBegin: this.handleSliderTouchBegin,
                handlePlayerTimeChange: this.handlePlayerTimeChange,
                handlePlayerNextSong: this.handlePlayerNextSong,
                handlePlayerTimeReset: this.handlePlayerTimeReset,
                handleDotSelect: this.handleDotSelect,
                handleDotsSectionToggle: this.handleDotsSectionToggle,
                handleLyricSectionExpand: this.handleLyricSectionExpand,
                handleLyricColumnSelect: this.handleLyricColumnSelect,
                handleLyricPlay: this.handleLyricPlay,
                handleLyricVerseSelect: this.handleLyricVerseSelect,
                handleLyricAnnotationSelect: this.handleLyricAnnotationSelect,
                handleLyricWheel: this.handleLyricWheel,
                handleLyricAutoScroll: this.handleLyricAutoScroll,
                handleNavSongSelect: this.handleNavSongSelect,
                handleNavBookSelect: this.handleNavBookSelect,
                handleOverviewToggle: this.handleOverviewToggle,
                handleCarouselNavToggle: this.handleCarouselNavToggle,
                handleSceneDirection: this.handleSceneDirection,
                handleScoreToggle: this.handleScoreToggle,
                handleTipsToggle: this.handleTipsToggle,
                handleTitleToggle: this.handleTitleToggle,
                handleVerseBarSelect: this.handleVerseBarSelect,
                handleVerseBarWheel: this.handleVerseBarWheel,
                handleVerseInteractivate: this.handleVerseInteractivate,
                handleWikiToggle: this.handleWikiToggle,
                handleScrollAfterLyricRerender: this.handleScrollAfterLyricRerender,
                stopPropagation: this.stopPropagation,

                getCarouselAnnotationRef: getCarouselAnnotationRef,
                getLyricAnnotationRef: getLyricAnnotationRef,
                getVerseRef: getVerseRef
            }

        return (
            <Root
                eventHandlers={eventHandlers}
            />
        )
    }
}

const mapStateToProps = ({
    appMounted, selectedAdminIndex, selectedAnnotationIndex, selectedCarouselNavIndex, selectedDotKeys, selectedScoreIndex, selectedSongIndex, selectedTipsIndex, selectedTitleIndex, selectedVerseIndex, selectedWikiIndex, accessedAnnotationIndex, isHeightlessLyricColumn, isLyricExpanded, isVerseBarAbove, isSliderMoving, isSliderTouched, isVerseBarBelow
}) => ({
    appMounted, selectedAdminIndex, selectedAnnotationIndex, selectedCarouselNavIndex, selectedDotKeys, selectedScoreIndex, selectedSongIndex, selectedTipsIndex, selectedTitleIndex, selectedVerseIndex, selectedWikiIndex, accessedAnnotationIndex, isHeightlessLyricColumn, isLyricExpanded, isVerseBarAbove, isSliderMoving, isSliderTouched, isVerseBarBelow
})

export default connect(mapStateToProps)(EventHandler)
