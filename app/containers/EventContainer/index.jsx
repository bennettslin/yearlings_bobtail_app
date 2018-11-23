/* eslint-disable no-unused-vars */

// Component that handles all user events.

import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateToggleStore } from 'flux/toggle/action'

import InteractiveContainer from '../../containers/InteractiveContainer'

import { getAnnotationObject } from '../../helpers/dataHelper'
import { intersects } from 'helpers/dotHelper'
import { getClientX } from 'helpers/domHelper'
import { getHandlers } from './helper'

import { DESTINATION_WORMHOLE_INDEX } from 'constants/lyrics'

import {
    CAROUSEL_SCROLL,
    LYRIC_ANNOTATION_SCROLL,
    VERSE_SCROLL
} from 'constants/dom'

class EventContainer extends PureComponent {

    static propTypes = {
        // Through Redux.
        isCarouselShown: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        dotsBitNumber: PropTypes.number.isRequired,
        selectedDotKeys: PropTypes.object.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedTipsIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        accessedAnnotationIndex: PropTypes.number.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,
        isHiddenLyric: PropTypes.bool.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        scrollElementIntoView: PropTypes.func.isRequired
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

            if (this.props.isCarouselShown) {
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

    /**************
     * ANNOTATION *
     **************/

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
            // this.stopPropagation(e)

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
        // this.stopPropagation(e)
        const selectedAnnotationIndex = this.props.selectAnnotation({
            direction
        })
        this.props.scrollElementIntoView({
            log: 'Select accessed lyric annotation.',
            scrollClass: LYRIC_ANNOTATION_SCROLL,
            index: selectedAnnotationIndex
        })
        if (this.props.isCarouselShown) {
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
            // this.stopPropagation(e)
        }
        return playToggled
    }

    handleAudioPreviousSong = (e) => {
        const songSelected = this.props.selectSong({
            direction: -1
        })
        if (songSelected) {
            // this.stopPropagation(e)
        }
        return songSelected
    }

    handleAudioNextSong = (e) => {
        const songSelected = this.props.selectSong({
            direction: 1
        })
        if (songSelected) {
            // this.stopPropagation(e)
        }
        return songSelected
    }

    /************
     * CAROUSEL *
     ************/

    handleCarouselNavToggle = (e, isCarouselShown) => {
        // this.stopPropagation(e)

        const presentCarouselIndex = this.props.isCarouselShown,
            carouselSelected = this.props.selectCarouselNav(isCarouselShown)

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

        return carouselSelected
    }

    handleLyricAutoScroll = () => {

        // Change back to autoScroll.
        this.props.updateToggleStore({ isAutoScroll: true })

        // Scroll lyric as if verse bar was selected.
        this.handleVerseBarSelect()
    }

    handleLyricColumnSelect = (e) => {
        const columnSelected = this.props.selectLyricColumn()
        if (columnSelected) {
            // this.stopPropagation(e)
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
        if (this.props.isSelectedLogue) {
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

        // this.stopPropagation(e)

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
                if (this.props.isCarouselShown) {
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
        // this.stopPropagation(e)
        return this.props.selectSong({
            selectedSongIndex
        })
    }

    handleNavBookSelect = (e) => {
        // this.stopPropagation(e)
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
            this.props.updateToggleStore({ isDotsSlideShown: false })
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
        // this.stopPropagation(e)
        this.props.selectScene(direction)
        return true
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
            // this.stopPropagation(e)
        }
        return tipsToggled
    }

    /*********
     * TOUCH *
     *********/

    handleSliderTouchBegin = (e, sliderElement) => {

        // Can't be handled in logue.
        if (this.props.isSelectedLogue) {
            return
        }

        const clientX = getClientX(e),
            clientRect = sliderElement.getBoundingClientRect()

        if (!isNaN(clientX)) {
            // this.stopPropagation(e)
            this.props.touchSliderBegin({
                clientRect, clientX
            })
        }

        this.props.interactivateVerse()
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

    handleVerseDirectionAccess = (direction) => {
        if (this.props.isSelectedLogue) {
            return false
        }

        const {
                selectedVerseIndex
            } = this.props,
            interactivatedVerseIndex =
            this.props.interactivateVerseDirection(direction)

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

    handleVerseInteractivate = (e, verseIndex) => {
        const {
            selectedVerseIndex
        } = this.props

        // Do not allow click on selected verse.
        if (
            verseIndex !== selectedVerseIndex
        ) {
            // this.stopPropagation(e)
            this.props.interactivateVerse(verseIndex)
        }
    }

    /***********
     * HELPERS *
     ***********/

    handleScrollUponCarouselRender = () => {
        if (this.props.isSelectedLogue) {
            return
        }

        const { selectedAnnotationIndex } = this.props

        // Scroll to carousel annotation if toggled on.
        if (this.props.isCarouselShown) {

            this.props.scrollElementIntoView({
                log: 'Rerender selected carousel annotation.',
                scrollClass: CAROUSEL_SCROLL,
                index: selectedAnnotationIndex || 1,
                time: 0
            })
        }
    }

    handleScrollUponLyricRender = () => {

        if (this.props.isSelectedLogue) {
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

    setScoreRef = (node) => {
        this.myScoreElement = node
    }

    setWikiRef = (node) => {
        this.myWikiElement = node
    }

    render() {
        const {
            selectAnnotation,
            selectCarouselNav,
            selectOverview,
            selectTips,
            interactivateVerse,
            determineVerseBars,
            touchBodyMove,
            touchBodyEnd
        } = this.props

        return (
            <___>
                <InteractiveContainer
                    {...{
                        eventHandlers: getHandlers(this),
                        determineVerseBars,
                        touchBodyMove,
                        touchBodyEnd,
                        selectAnnotation,
                        selectCarouselNav,
                        selectOverview,
                        selectTips,
                        interactivateVerse
                    }}
                />
            </___>
        )
    }
}

const mapStateToProps = ({
    responsiveStore: { isHiddenLyric },
    songStore: {
        selectedSongIndex,
        selectedVerseIndex,
        selectedAnnotationIndex,
        isSelectedLogue
    },
    toggleStore: {
        isCarouselShown,
        isLyricExpanded
    },
    dotsStore: {
        dotsBitNumber,
        ...selectedDotKeys
    },
    sessionStore: {
        selectedTipsIndex,
        interactivatedVerseIndex
    },
    accessStore: { accessedAnnotationIndex }
}) => ({
    isHiddenLyric,
    selectedAnnotationIndex,
    isCarouselShown,
    isLyricExpanded,
    isSelectedLogue,
    dotsBitNumber,
    selectedDotKeys,
    selectedSongIndex,
    selectedTipsIndex,
    selectedVerseIndex,
    interactivatedVerseIndex,
    accessedAnnotationIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(EventContainer)
