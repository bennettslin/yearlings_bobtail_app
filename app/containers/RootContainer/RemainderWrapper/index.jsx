// Temporary wrapper for remaining class names. Slowly separate them out.

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { SHOWN } from 'constants/options'

import { PARENT_ACCESS_PREFIX } from 'constants/prefixes'
import { getPrefixedDotLetterClassNames } from 'helpers/dotHelper'

import {
    getSingleShownEarColumnKey,
    getStanzaIndexForVerseIndex
} from '../helper'

class RemainderWrapper extends PureComponent {

    static propTypes = {
        // Through Redux.
        canCarouselRender: PropTypes.bool.isRequired,

        isAccessOn: PropTypes.bool.isRequired,
        isAutoScroll: PropTypes.bool.isRequired,
        isDotsSlideShown: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        isOverlayShown: PropTypes.bool.isRequired,
        isVerseBarAbove: PropTypes.bool.isRequired,
        isVerseBarBelow: PropTypes.bool.isRequired,
        isCarouselNavShowable: PropTypes.bool.isRequired,

        isPlaying: PropTypes.bool.isRequired,
        isSliderMoving: PropTypes.bool.isRequired,
        isSliderTouched: PropTypes.bool.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,
        renderedSongIndex: PropTypes.number.isRequired,
        renderedVerseIndex: PropTypes.number.isRequired,
        renderedAnnotationIndex: PropTypes.number.isRequired,
        isRenderedLogue: PropTypes.bool.isRequired,
        sliderVerseIndex: PropTypes.number.isRequired,
        isCarouselShown: PropTypes.bool.isRequired,
        dotsBitNumber: PropTypes.number.isRequired,
        selectedDotKeys: PropTypes.object.isRequired,
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
                selectedDotKeys,
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
                renderedSongIndex,
                renderedVerseIndex,
                sliderVerseIndex,
                interactivatedVerseIndex,
                isEarShown,
                isHiddenLyric,
                showShrunkNavIcon,
                isScoresTipsInMain,
                isTwoRowMenu,
                isVerseBarAbove,
                isVerseBarBelow,
                isAutoScroll,
                children
            } = this.props,

            singleShownEarColumnKey = getSingleShownEarColumnKey({
                isEarShown,
                earColumnIndex
            }),

            overviewShown = selectedOverviewOption === SHOWN,
            tipsShown = selectedTipsOption === SHOWN,

            areVerseBarsHidden = !isVerseBarAbove && !isVerseBarBelow,

            /**
             * If slider touched, compare stanza to slider verse. Otherwise,
             * compare it to selected verse.
             */
            cursorVerseIndex = sliderVerseIndex > -1 ?
                sliderVerseIndex :
                renderedVerseIndex,

            cursorStanzaIndex = getStanzaIndexForVerseIndex(
                renderedSongIndex, cursorVerseIndex
            )

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

                        areVerseBarsHidden ?
                            'RM__verseBarHidden' : 'RM__verseBarShown',

                        {
                            'RM__verseBarAbove': isVerseBarAbove,
                            'RM__verseBarBelow': isVerseBarBelow,
                            'RM__manualScroll': !isAutoScroll,
                            'RM__bothEarColumnsShown': !singleShownEarColumnKey,
                            'RM__sliderTouched': isSliderTouched
                        },

                        getPrefixedDotLetterClassNames(
                            selectedDotKeys,
                            // "Root selected dot letter."
                            'RsD'
                        ),

                        // Relevant to verse index classes.
                        isSliderMoving ? 'RM__sliderMoving' : 'RM__sliderNotMoving',

                        interactivatedVerseIndex < 0 ?
                            'RM__verseInactive' : 'RM__verseActive',

                        // Make it easier to override this selector.
                        !isSliderMoving && interactivatedVerseIndex < 0 &&
                            'RM__verseCanHover',

                        // "Root cursored stanza index."
                        `RcS${cursorStanzaIndex}`,

                        isSliderMoving ?
                            // "Root slider stanza index."
                            `RsS${cursorStanzaIndex}` :
                            // "Root default stanza index."
                            `RdS${cursorStanzaIndex}`,

                        isSliderMoving ?
                            // "Root slider verse index."
                            `RsV${sliderVerseIndex}` :
                            // "Root default verse index."
                            `RdV${renderedVerseIndex}`,

                        isPlaying &&
                            // "Root playing verse index."
                            `RpV${renderedVerseIndex}`,

                        interactivatedVerseIndex < 0 &&
                            // "Root non-interactivated verse index."
                            `RnV${cursorVerseIndex}`,

                        areVerseBarsHidden && interactivatedVerseIndex < 0 &&
                            // "Root cursored lyric verse."
                            `RlV${cursorVerseIndex}`
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
    audioStore: { isPlaying },
    dotsStore: {
        dotsBitNumber,
        ...selectedDotKeys
    },
    toggleStore: {
        isAccessOn,
        isAutoScroll,
        isCarouselShown,
        isDotsSlideShown,
        isLyricExpanded,
        isVerseBarAbove,
        isVerseBarBelow
    },
    transientStore: {
        isOverlayShown,
        isCarouselNavShowable,
        isEarShown
    },
    renderStore: { canCarouselRender },
    renderedStore: {
        renderedSongIndex,
        renderedVerseIndex,
        renderedAnnotationIndex,
        isRenderedLogue
    },
    sliderStore: {
        isSliderTouched,
        isSliderMoving,
        sliderVerseIndex
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
    selectedDotKeys,
    isDotsSlideShown,
    earColumnIndex,
    selectedOverviewOption,
    selectedTipsOption,
    isEarShown,
    isPlaying,
    canCarouselRender,
    renderedSongIndex,
    renderedVerseIndex,
    renderedAnnotationIndex,
    isRenderedLogue,
    isSliderTouched,
    isSliderMoving,
    sliderVerseIndex,
    isHiddenLyric,
    showShrunkNavIcon,
    isScoresTipsInMain,
    isTwoRowMenu,
    isVerseBarAbove,
    isVerseBarBelow
})

export default connect(mapStateToProps)(RemainderWrapper)
