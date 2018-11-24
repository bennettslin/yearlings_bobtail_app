
// TODO: Eventually get rid of this file. Everything it handles should be in dispatchers or listeners.
// Component that handles all user events.

import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateSessionStore } from 'flux/session/action'
import { updateToggleStore } from 'flux/toggle/action'

import InteractiveContainer from '../../containers/InteractiveContainer'
import CarouselDispatcher from '../../dispatchers/CarouselDispatcher'
import EarColumnDispatcher from '../../dispatchers/EarColumnDispatcher'
import InteractivatedVerseDispatcher from '../../dispatchers/InteractivatedVerseDispatcher'
import StopPropagationDispatcher from '../../dispatchers/StopPropagationDispatcher'

import { getAnnotationObject } from '../../helpers/dataHelper'
import { intersects } from 'helpers/dotHelper'
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
        selectedAnnotationIndex: PropTypes.number.isRequired,
        dotsBitNumber: PropTypes.number.isRequired,
        selectedDotKeys: PropTypes.object.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedTipsIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        accessedAnnotationIndex: PropTypes.number.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,
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
            columnIndex: earColumnIndex,
            [DESTINATION_WORMHOLE_INDEX]: destinationWormholeIndex
        } = wormholeObject

        const songSelected = this.props.selectSong({
            selectedSongIndex,
            selectedAnnotationIndex,
            selectedVerseIndex,
            destinationWormholeIndex
        })

        if (songSelected) {
            // TODO: This can be set in a listener.
            if (!isNaN(earColumnIndex)) {
                this.dispatchEarColumn({ earColumnIndex })
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

    handleAudioPlay = () => {
        const playToggled = this.props.togglePlay()
        return playToggled
    }

    handleAudioPreviousSong = () => {
        const songSelected = this.props.selectSong({
            direction: -1
        })
        return songSelected
    }

    handleAudioNextSong = () => {
        const songSelected = this.props.selectSong({
            direction: 1
        })
        return songSelected
    }

    /************
     * CAROUSEL *
     ************/

    handleCarouselNavToggle = (e, isCarouselShown) => {
        const
            { isCarouselShown: presentIsCarouselShown } = this.props,
            carouselSelected = this.dispatchCarousel(isCarouselShown)

        // Scroll only when expanding carousel.
        if (carouselSelected && !presentIsCarouselShown) {
            const { selectedAnnotationIndex } = this.props,
                annotationIndex =
                    selectedAnnotationIndex ?
                        selectedAnnotationIndex :
                        this.props.accessedAnnotationIndex

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

        this.props.selectVerse({
            selectedVerseIndex,
            scrollLog: 'Select interactivated verse.'
        })

        // Verse bars always get reset.
        this.props.updateToggleStore({
            isVerseBarAbove: false,
            isVerseBarBelow: false
        })

        // Deinteractivate after selecting.
        this.props.updateSessionStore({ interactivatedVerseIndex: -1 })
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
        return this.props.selectSong({
            selectedSongIndex
        })
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

        return overviewToggled
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
        return tipsToggled
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

        this.props.updateToggleStore({
            isVerseBarAbove: false,
            isVerseBarBelow: false
        })
    }

    handleVerseDirectionAccess = (direction) => {
        if (this.props.isSelectedLogue) {
            return false
        }

        const {
                selectedVerseIndex
            } = this.props,
            interactivatedVerseIndex =
            this.dispatchInteractivatedVerseDirection(direction)

        this.props.scrollElementIntoView({
            log: 'Access verse direction.',
            scrollClass: VERSE_SCROLL,

            /**
             * If interactivation remains on, scroll to interactivated verse.
             * Otherwise, scroll to selected verse.
             */
            index:
                interactivatedVerseIndex > -1 ?
                    interactivatedVerseIndex :
                    selectedVerseIndex,

            callback: this.props.determineVerseBars
        })

        return true
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
            selectOverview,
            selectTips,
            determineVerseBars,
            selectVerse
        } = this.props

        return (
            <___>
                <InteractiveContainer
                    {...{
                        eventHandlers: getHandlers(this),
                        determineVerseBars,
                        selectAnnotation,
                        selectOverview,
                        selectTips,
                        selectVerse
                    }}
                />
                <CarouselDispatcher {...{ getDispatch: this }} />
                <EarColumnDispatcher {...{ getDispatch: this }} />
                <InteractivatedVerseDispatcher
                    {...{ getDirectionDispatch: this }}
                />
                <StopPropagationDispatcher {...{ getDispatch: this }} />
            </___>
        )
    }
}

const mapStateToProps = ({
    toggleStore: { isCarouselShown },
    songStore: {
        selectedSongIndex,
        selectedVerseIndex,
        selectedAnnotationIndex,
        isSelectedLogue
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
    isCarouselShown,
    selectedAnnotationIndex,
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
        updateSessionStore,
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(EventContainer)
