
// TODO: Eventually turn this file into just a scroll listener.
// Component that handles all user events.

import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateScrollCarouselStore } from 'flux/scrollCarousel/action'
import { updateScrollLyricStore } from 'flux/scrollLyric/action'
import { updateSessionStore } from 'flux/session/action'
import { updateToggleStore } from 'flux/toggle/action'

import InteractiveContainer from '../../containers/InteractiveContainer'
import AnnotationDispatcher from '../../handlers/AnnotationHandler/Dispatcher'
import AnnotationAccessDispatcher from '../../handlers/AnnotationAccessHandler/Dispatcher'
import InteractivatedVerseDispatcher from '../../dispatchers/InteractivatedVerseDispatcher'
import StopPropagationDispatcher from '../../dispatchers/StopPropagationDispatcher'

import { getAnnotationObject } from '../../helpers/dataHelper'
import { intersects } from 'helpers/dotHelper'
import { getHandlers } from './helper'

class EventContainer extends PureComponent {

    static propTypes = {
        // Through Redux.
        didCarouselRender: PropTypes.bool.isRequired,
        didLyricRender: PropTypes.bool.isRequired,
        isCarouselShown: PropTypes.bool.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        dotsBitNumber: PropTypes.number.isRequired,
        selectedDotKeys: PropTypes.object.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        accessedAnnotationIndex: PropTypes.number.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,
        updateScrollCarouselStore: PropTypes.func.isRequired,
        updateScrollLyricStore: PropTypes.func.isRequired,
        updateSessionStore: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._handleScrollUponCarouselRender(prevProps)
        this._handleScrollUponLyricRender(prevProps)
    }

    _handleScrollUponCarouselRender = (prevProps) => {
        const
            {
                isSelectedLogue,
                didCarouselRender
            } = this.props,
            { didCarouselRender: couldCarouselRender } = prevProps

        // TODO: This now scrolls, but maybe do with no animation.
        if (!isSelectedLogue && didCarouselRender && !couldCarouselRender) {
            const { selectedAnnotationIndex } = this.props

            // Scroll to carousel annotation if toggled on.
            if (this.props.isCarouselShown) {
                this.props.updateScrollCarouselStore({
                    scrollCarouselLog: 'Rerender selected carousel annotation.',
                    scrollCarouselIndex: selectedAnnotationIndex || 1,
                    doScrollCarouselImmediately: true
                })
            }
        }
    }

    _handleScrollUponLyricRender = (prevProps) => {
        const
            {
                isSelectedLogue,
                didLyricRender
            } = this.props,
            { didLyricRender: couldRender } = prevProps

        // TODO: This now scrolls, but maybe do with no animation.
        if (!isSelectedLogue && didLyricRender && !couldRender) {
            const { selectedVerseIndex } = this.props

            this.props.updateScrollLyricStore({
                scrollLyricLog: 'Rerender selected verse.',
                doScrollLyricByVerse: true,
                scrollLyricIndex: selectedVerseIndex,
                doScrollLyricImmediately: true,
                doDetermineVerseBars: true
            })
        }
    }

    selectSong = (wormholeObject) => {
        return this.props.selectSong(wormholeObject)
    }

    /**************
     * ANNOTATION *
     **************/

    handleAnnotationSelect = (e, direction) => {
        const selectedAnnotationIndex = this.dispatchAnnotation({ direction })

        this.props.updateScrollLyricStore({
            scrollLyricLog: 'Select accessed lyric annotation.',
            scrollLyricIndex: selectedAnnotationIndex
        })
        if (this.props.isCarouselShown) {
            this.props.updateScrollCarouselStore({
                scrollCarouselLog: 'Select accessed carousel annotation.',
                scrollCarouselIndex: selectedAnnotationIndex
            })
        }
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

        this.dispatchAnnotation({ selectedAnnotationIndex })

        if (selectedAnnotationIndex) {

            // Scroll lyric column only if selecting from carousel.
            if (fromCarousel) {
                this.props.updateScrollLyricStore({
                    scrollLyricLog: 'Carousel selected lyric annotation.',
                    scrollLyricIndex: selectedAnnotationIndex
                })

            // Scroll carousel only if not selecting from carousel.
            } else {
                if (this.props.isCarouselShown) {
                    this.props.updateScrollCarouselStore({
                        scrollCarouselLog: 'Lyric selected carousel annotation.',
                        scrollCarouselIndex: selectedAnnotationIndex
                    })
                }
            }
        }

        return true
    }

    /*********
     * VERSE *
     *********/

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

    // This is also triggered by toggling on auto scroll.
    handleScrollToSelectedVerse = (isAutoScroll) => {

        const { selectedVerseIndex } = this.props
        this.props.updateScrollLyricStore({
            scrollLyricLog: 'Scroll back to selected verse.',
            doScrollLyricByVerse: true,
            scrollLyricIndex: selectedVerseIndex
        })

        this.props.updateToggleStore({
            isVerseBarAbove: false,
            isVerseBarBelow: false,
            ...isAutoScroll && { isAutoScroll }
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

        this.props.updateScrollLyricStore({
            scrollLyricLog: 'Access verse direction.',
            doScrollLyricByVerse: true,

            /**
             * If interactivation remains on, scroll to interactivated verse.
             * Otherwise, scroll to selected verse.
             */
            scrollLyricIndex:
                interactivatedVerseIndex > -1 ?
                    interactivatedVerseIndex :
                    selectedVerseIndex,

            doDetermineVerseBars: true
        })

        return true
    }

    render() {
        const {
            determineVerseBars,
            selectVerse
        } = this.props

        return (
            <___>
                <InteractiveContainer
                    {...{
                        eventHandlers: getHandlers(this),
                        determineVerseBars,
                        selectVerse
                    }}
                />
                <AnnotationDispatcher {...{ getDispatch: this }} />
                <AnnotationAccessDispatcher {...{ getDispatch: this }} />
                <InteractivatedVerseDispatcher {...{ getDispatch: this }} />
                <StopPropagationDispatcher {...{ getDispatch: this }} />
            </___>
        )
    }
}

const mapStateToProps = ({
    renderStore: {
        didCarouselRender,
        didLyricRender
    },
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
    sessionStore: { interactivatedVerseIndex },
    accessStore: { accessedAnnotationIndex }
}) => ({
    didCarouselRender,
    didLyricRender,
    isCarouselShown,
    selectedAnnotationIndex,
    isSelectedLogue,
    dotsBitNumber,
    selectedDotKeys,
    selectedSongIndex,
    selectedVerseIndex,
    interactivatedVerseIndex,
    accessedAnnotationIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateScrollCarouselStore,
        updateScrollLyricStore,
        updateSessionStore,
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(EventContainer)
