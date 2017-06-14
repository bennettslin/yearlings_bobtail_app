// Component that shows all user-facing UI.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import MainColumn from './main/main-column'
import LyricColumn from './lyric/lyric-column'
import AudioBanner from './audio/audio-banner'
import AudioSection from './audio/audio-section'
import DotsSection from './dots/dots-section'
import ScoresTipsSection from './main/scores-tips-section'
import TitleToggle from './title/title-toggle'
import AudioPopup from './audio/audio-popup'
import OverviewPopup from './overview/overview-popup'
import AnnotationPopup from './annotation/annotation-popup'
import ScorePopup from './score/score-popup'
import TitlePopup from './title/title-popup'
import WikiPopup from './wiki/wiki-popup'
import { SHOWN,
         OVERVIEW_OPTIONS } from '../constants/options'
import { getSingleShownLyricColumnKey } from '../helpers/logic-helper'
import { getIsOverlayingAnnotation } from '../helpers/responsive-helper'

const LiveManager = ({

    deviceIndex,
    overviewLogueIndex,
    overviewSongIndex,
    selectedAnnotationIndex,
    selectedCarouselIndex,
    selectedDotKeys,
    selectedDotsIndex,
    selectedLyricColumnIndex,
    selectedNavIndex,
    selectedOverviewIndex,

    showOneOfTwoLyricColumns,
    isLyricExpanded,
    showShrunkNavIcon,
    isScoresTipsInMain,

    lyricSectionRef,
    scoreSectionRef,
    wikiSectionRef,

    handlePopupContainerClick,
    handleScrollAfterLyricRerender,

    handleAnnotationPrevious,
    handleAnnotationNext,
    handleAnnotationWikiSelect,
    handleAnnotationPortalSelect,
    handleAudioPlay,
    handleAudioPreviousSong,
    handleAudioNextSong,
    handleAudioOptionsToggle,
    handleSliderTouchBegin,
    handleDotToggle,
    handleDotsSectionToggle,
    handleNavExpand,
    handleNavSongSelect,
    handleNavBookSelect,
    handleLyricColumnSelect,
    handleLyricSectionExpand,
    handleLyricAnnotationSelect,
    handleLyricSectionScroll,
    handleLyricPlay,
    handleLyricVerseSelect,
    handleOverviewToggle,
    handlePopupFocus,
    handleScoreToggle,
    handleTipsToggle,
    handleTitleToggle,
    handleVerseBarSelect,
    handleVerseBarWheel,
    handleVerseElementSelect,
    handleVerseElementSlide,
    handleVerseInteractivate,
    handleWikiToggle,
    handleCarouselToggle,
    stopPropagation

}) => {

    const singleShownLyricColumnKey = getSingleShownLyricColumnKey({
            showOneOfTwoLyricColumns,
            selectedLyricColumnIndex
        }),

        isOverlayingAnnotation = getIsOverlayingAnnotation({
            deviceIndex,
            isLyricExpanded
        }),

        titleToggleChild = (
            <TitleToggle
                handleTitleToggle={handleTitleToggle}
            />
        ),

        annotationPopupProps = {
            handleAnnotationPrevious,
            handleAnnotationNext,
            handlePopupContainerClick,
            handleAnnotationPortalSelect,
            handleAnnotationWikiSelect
        },
        audioBannerChild = (
            <AudioBanner
                handleSliderTouchBegin={handleSliderTouchBegin}
            />
        ),
        audioSectionProps = {
            handleAudioPlay,
            handleAudioPreviousSong,
            handleAudioNextSong,
            handleAudioOptionsToggle,
            handlePopupContainerClick,
            audioBannerChild
        },
        audioSectionMenuChild = (
            <AudioSection {...audioSectionProps}
                titleToggleChild={titleToggleChild}
            />
        ),

        // TODO: Main can get this directly.
        dotsSectionProps = {
            handlePopupContainerClick,
            handleDotToggle,
            stopPropagation
        },

        lyricColumnProps = {
            lyricSectionRef,
            handleLyricAnnotationSelect,
            handleLyricColumnSelect,
            handleLyricSectionExpand,
            handleLyricSectionScroll,
            handleLyricPlay,
            handleLyricVerseSelect,
            handleVerseBarSelect,
            handleVerseBarWheel,
            handleVerseInteractivate,
            handleVerseElementSelect,
            handleVerseElementSlide,
            handleScrollAfterLyricRerender
        },

        mainColumnProps = {
            isOverlayingAnnotation,

            handleCarouselToggle,
            handleDotsSectionToggle,
            handleLyricSectionExpand,
            handleOverviewToggle,
            handleTipsToggle,

            audioBannerChild,
            audioSectionMenuChild,
            titleToggleChild,

            carouselSectionProps: {
                handleLyricAnnotationSelect,
                handleAnnotationPrevious,
                handleAnnotationNext,
                handleAnnotationWikiSelect,
                handleAnnotationPortalSelect,
                handlePopupContainerClick
            },

            navSectionProps: {
                handleNavExpand,
                handleNavSongSelect,
                handleNavBookSelect
            }
        },

        overviewPopupProps = {
            handleOverviewToggle,
            handlePopupContainerClick
        },

        scoresTipsSectionProps = {
            handleScoreToggle,
            handleTipsToggle
        },

        scorePopupProps = {
            scoreSectionRef,
            handleScoreToggle,
            handlePopupFocus
        },

        titlePopupProps = {
            handleTitleToggle,
            handlePopupFocus
        },

        wikiPopupProps = {
            wikiSectionRef,
            handleWikiToggle,
            handlePopupFocus
        }

    return (
        <div className={classnames(
            'live-manager',
            isOverlayingAnnotation ? 'overlaid-annotation' : 'side-annotation',
            singleShownLyricColumnKey && `show-only-${singleShownLyricColumnKey}`,
            selectedAnnotationIndex ? 'annotation-shown' : 'annotation-hidden',
            selectedCarouselIndex ? 'carousel-expanded' : 'carousel-collapsed',
            selectedDotsIndex ? 'dots-section-shown' : 'dots-section-hidden',
            selectedNavIndex ? 'nav-expanded' : 'nav-collapsed',
            showShrunkNavIcon ? 'shrink-nav-icon' : 'static-nav-icon',
            {
              'overview-shown': OVERVIEW_OPTIONS[selectedOverviewIndex] === SHOWN,
              'scores-tips-in-main': isScoresTipsInMain },
            selectedDotKeys
        )}>
            <div className="column overview-logue-column">
                <OverviewPopup {...overviewPopupProps}
                    inOverviewSubfield={false}
                    overviewIndex={overviewLogueIndex}
                />
            </div>
            <MainColumn {...mainColumnProps}
                annotationPopupChild={ <AnnotationPopup {...annotationPopupProps} /> }
                dotsSectionChild={ <DotsSection {...dotsSectionProps} /> }
                overviewPopupChild={
                    <OverviewPopup {...overviewPopupProps}
                        inOverviewSubfield={true}
                        overviewIndex={overviewSongIndex}
                    />
                }
                scoresTipsSectionChild={ <ScoresTipsSection {...scoresTipsSectionProps} /> }
            />

            <LyricColumn {...lyricColumnProps} />

            {
                <div className="overlay-popup-subfield">
                    <div className="overlay-popup-block audio-popup-block">
                        <AudioPopup {...audioSectionProps} />
                    </div>
                    <div className="overlay-popup-block main-popup-block">
                        {isOverlayingAnnotation &&
                            <AnnotationPopup {...annotationPopupProps} />
                        }
                        <TitlePopup {...titlePopupProps} />
                        <ScorePopup {...scorePopupProps} />
                        <WikiPopup {...wikiPopupProps} />
                    </div>
                </div>
            }
        </div>
    )
}

LiveManager.propTypes = {
    // Through Redux.
    deviceIndex: PropTypes.number.isRequired,
    overviewLogueIndex: PropTypes.number.isRequired,
    overviewSongIndex: PropTypes.number.isRequired,
    selectedAnnotationIndex: PropTypes.number.isRequired,
    selectedCarouselIndex: PropTypes.number.isRequired,
    selectedDotKeys: PropTypes.object.isRequired,
    selectedDotsIndex: PropTypes.number.isRequired,
    selectedLyricColumnIndex: PropTypes.number.isRequired,
    selectedNavIndex: PropTypes.number.isRequired,
    selectedOverviewIndex: PropTypes.number.isRequired,

    showOneOfTwoLyricColumns: PropTypes.bool.isRequired,
    isLyricExpanded: PropTypes.bool.isRequired,
    showShrunkNavIcon: PropTypes.bool.isRequired,
    isScoresTipsInMain: PropTypes.bool.isRequired,

    // From parent.
    lyricSectionRef: PropTypes.func.isRequired,
    scoreSectionRef: PropTypes.func.isRequired,
    wikiSectionRef: PropTypes.func.isRequired,

    handleAnnotationPrevious: PropTypes.func.isRequired,
    handleAnnotationNext: PropTypes.func.isRequired,
    handleAnnotationWikiSelect: PropTypes.func.isRequired,
    handleAnnotationPortalSelect: PropTypes.func.isRequired,
    handleAudioPlay: PropTypes.func.isRequired,
    handleAudioPreviousSong: PropTypes.func.isRequired,
    handleAudioNextSong: PropTypes.func.isRequired,
    handleAudioOptionsToggle: PropTypes.func.isRequired,
    handleSliderTouchBegin: PropTypes.func.isRequired,
    handleCarouselToggle: PropTypes.func.isRequired,
    handleDotToggle: PropTypes.func.isRequired,
    handleDotsSectionToggle: PropTypes.func.isRequired,
    handleNavExpand: PropTypes.func.isRequired,
    handleNavSongSelect: PropTypes.func.isRequired,
    handleNavBookSelect: PropTypes.func.isRequired,
    handleLyricColumnSelect: PropTypes.func.isRequired,
    handleLyricSectionExpand: PropTypes.func.isRequired,
    handleLyricAnnotationSelect: PropTypes.func.isRequired,
    handleLyricSectionScroll: PropTypes.func.isRequired,
    handleLyricPlay: PropTypes.func.isRequired,
    handleLyricVerseSelect: PropTypes.func.isRequired,
    handleOverviewToggle: PropTypes.func.isRequired,
    handlePopupContainerClick: PropTypes.func.isRequired,
    handlePopupFocus: PropTypes.func.isRequired,
    handleScoreToggle: PropTypes.func.isRequired,
    handleScrollAfterLyricRerender: PropTypes.func.isRequired,
    handleTipsToggle: PropTypes.func.isRequired,
    handleTitleToggle: PropTypes.func.isRequired,
    handleVerseBarSelect: PropTypes.func.isRequired,
    handleVerseBarWheel: PropTypes.func.isRequired,
    handleVerseElementSelect: PropTypes.func.isRequired,
    handleVerseElementSlide: PropTypes.func.isRequired,
    handleVerseInteractivate: PropTypes.func.isRequired,
    handleWikiToggle: PropTypes.func.isRequired,
    stopPropagation: PropTypes.func.isRequired
}

export default connect(({
    selectedAnnotationIndex, selectedCarouselIndex, selectedDotKeys, selectedDotsIndex, selectedLyricColumnIndex, selectedNavIndex, selectedOverviewIndex, isScoresTipsInMain, showOneOfTwoLyricColumns, showShrunkNavIcon, annotationObject, deviceIndex, isLyricExpanded, overviewLogueIndex, overviewSongIndex
}) => ({
    selectedAnnotationIndex, selectedCarouselIndex, selectedDotKeys, selectedDotsIndex, selectedLyricColumnIndex, selectedNavIndex, selectedOverviewIndex, isScoresTipsInMain, showOneOfTwoLyricColumns, showShrunkNavIcon, annotationObject, deviceIndex, isLyricExpanded, overviewLogueIndex, overviewSongIndex
}))(LiveManager)
