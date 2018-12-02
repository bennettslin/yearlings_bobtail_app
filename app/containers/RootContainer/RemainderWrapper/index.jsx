// Temporary wrapper for remaining class names. Slowly separate them out.

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { SHOWN } from 'constants/options'
import { PARENT_ACCESS_PREFIX } from 'constants/prefixes'

import { getSingleShownEarColumnKey } from '../helper'

class RemainderWrapper extends PureComponent {

    static propTypes = {
        // Through Redux.
        canCarouselRender: PropTypes.bool.isRequired,

        accessedKey: PropTypes.string.isRequired,
        isAccessOn: PropTypes.bool.isRequired,
        isAutoScroll: PropTypes.bool.isRequired,
        isDotsSlideShown: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        isOverlayShown: PropTypes.bool.isRequired,
        isCarouselNavShowable: PropTypes.bool.isRequired,

        isPlaying: PropTypes.bool.isRequired,
        isSliderMoving: PropTypes.bool.isRequired,
        isSliderTouched: PropTypes.bool.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,
        renderedAnnotationIndex: PropTypes.number.isRequired,
        isRenderedLogue: PropTypes.bool.isRequired,
        isCarouselShown: PropTypes.bool.isRequired,
        dotsBitNumber: PropTypes.number.isRequired,
        earColumnIndex: PropTypes.number.isRequired,
        selectedOverviewOption: PropTypes.string.isRequired,
        selectedTipsOption: PropTypes.string.isRequired,

        isEarShown: PropTypes.bool.isRequired,
        isHiddenLyric: PropTypes.bool.isRequired,
        showShrunkNavIcon: PropTypes.bool.isRequired,
        isScoresTipsInMain: PropTypes.bool.isRequired,
        isTwoRowMenu: PropTypes.bool.isRequired,

        // From parent.
        children: PropTypes.any.isRequired
    }

    render() {
        const {
                accessedKey,
                canCarouselRender,
                isAccessOn,
                renderedAnnotationIndex,
                isRenderedLogue,
                isCarouselShown,
                dotsBitNumber,
                isDotsSlideShown,
                earColumnIndex,
                selectedOverviewOption,
                selectedTipsOption,
                isPlaying,
                isSliderTouched,
                isSliderMoving,
                isLyricExpanded,
                isOverlayShown,
                isCarouselNavShowable,
                interactivatedVerseIndex,
                isEarShown,
                isHiddenLyric,
                showShrunkNavIcon,
                isScoresTipsInMain,
                isTwoRowMenu,
                isAutoScroll,
                children
            } = this.props,

            singleShownEarColumnKey = getSingleShownEarColumnKey({
                isEarShown,
                earColumnIndex
            }),

            overviewShown = selectedOverviewOption === SHOWN,
            tipsShown = selectedTipsOption === SHOWN

        return (
            <div
                {...{
                    className: cx(
                        'RemainderWrapper',
                        accessedKey && `${PARENT_ACCESS_PREFIX}${accessedKey}`,

                        /**
                         * When transitioning between songs, explicitly reset all
                         * verse trackers. This current approach is brittle, since
                         * it depends on checking that the carousel can render,
                         * which is after when the slider and lyric can render,
                         * which is where the verse trackers are.
                         */
                        canCarouselRender ?
                            'RM__canTrackVerse' : 'RM__cannotTrackVerse',

                        isAccessOn ? 'RM__accessOn' : 'RM__accessOff',
                        isOverlayShown ? 'RM__overlayShown' : 'RM__overlayHidden',

                        isRenderedLogue ? 'RM__logue' : 'RM__song',
                        isPlaying ? 'RM__isPlaying' : 'RM__isPaused',

                        renderedAnnotationIndex ?
                            'RM__annotationShown' : 'RM__annotationHidden',
                        { 'RM__carouselExpanded': isCarouselShown },
                        isDotsSlideShown ? 'RM__dotsShown' : 'RM__dotsHidden',
                        isLyricExpanded ?
                            'RM__lyricExpanded' : 'RM__lyricCollapsed',
                        { 'RM__navExpanded': !isCarouselShown },

                        overviewShown && 'RM__overviewShown',
                        tipsShown && 'RM__tipsShown',

                        showShrunkNavIcon ?
                            'RM__navIconShrunk' : 'RM__navIconStatic',

                        isCarouselNavShowable ?
                            'RM__carouselNavShowable' : 'RM__carouselNavUnshowable',
                        isScoresTipsInMain ?
                            'RM__scoresTipsMain' : 'RM__scoresTipsMenu',
                        isTwoRowMenu ?
                            'RM__twoRowMenu' : 'RM__oneRowMenu',

                        singleShownEarColumnKey &&
                            `RM__${singleShownEarColumnKey}EarColumnOnly`,
                        isHiddenLyric ?
                            'RM__lyricHeightless' : 'RM__lyricHeighted',

                        {
                            'RM__manualScroll': !isAutoScroll,
                            'RM__bothEarColumnsShown': !singleShownEarColumnKey,
                            'RM__sliderTouched': isSliderTouched
                        },

                        !dotsBitNumber && 'RM__noSelectedDots',

                        // Relevant to verse index classes.
                        isSliderMoving ? 'RM__sliderMoving' : 'RM__sliderNotMoving',

                        interactivatedVerseIndex < 0 ?
                            'RM__verseInactive' : 'RM__verseActive',

                        // Make it easier to override this selector.
                        !isSliderMoving && interactivatedVerseIndex < 0 &&
                            'RM__verseCanHover'
                    )
                }}
            >
                {children}
            </div>
        )
    }
}

const mapStateToProps = ({
    accessStore: { accessedKey },
    sessionStore: { interactivatedVerseIndex },
    songStore: { earColumnIndex },
    playerStore: { isPlaying },
    dotsStore: { dotsBitNumber },
    toggleStore: {
        isAccessOn,
        isAutoScroll,
        isCarouselShown,
        isDotsSlideShown,
        isLyricExpanded
    },
    transientStore: {
        isOverlayShown,
        isCarouselNavShowable,
        isEarShown
    },
    renderStore: { canCarouselRender },
    renderedStore: {
        renderedAnnotationIndex,
        isRenderedLogue
    },
    sliderStore: {
        isSliderTouched,
        isSliderMoving
    },
    responsiveStore: {
        isHiddenLyric,
        isScoresTipsInMain,
        isTwoRowMenu,
        showShrunkNavIcon
    },
    optionStore: {
        selectedOverviewOption,
        selectedTipsOption
    }
}) => ({
    accessedKey,
    isAutoScroll,
    isCarouselShown,
    isLyricExpanded,
    isOverlayShown,
    isCarouselNavShowable,
    interactivatedVerseIndex,
    isAccessOn,
    dotsBitNumber,
    isDotsSlideShown,
    earColumnIndex,
    selectedOverviewOption,
    selectedTipsOption,
    isEarShown,
    isPlaying,
    canCarouselRender,
    renderedAnnotationIndex,
    isRenderedLogue,
    isSliderTouched,
    isSliderMoving,
    isHiddenLyric,
    showShrunkNavIcon,
    isScoresTipsInMain,
    isTwoRowMenu
})

export default connect(mapStateToProps)(RemainderWrapper)
