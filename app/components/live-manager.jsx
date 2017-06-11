// Component that shows all user-facing UI.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import MainColumn from './main/main-column'
import LyricColumn from './lyric/lyric-column'
import AudioBanner from './audio/audio-banner'
import AudioSection from './audio/audio-section'
import CarouselSection from './carousel/carousel-section'
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
import { getIsLogue } from '../helpers/data-helper'
import { getHiddenLyricColumnKey } from '../helpers/logic-helper'
import { getIsOverlayingAnnotation } from '../helpers/responsive-helper'

const Live = ({

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
    selectedSongIndex,
    interactivatedVerseIndex,

    isSliderMoving,
    showOneOfTwoLyricColumns,
    isLyricExpanded,
    isHeightlessLyricColumn,
    showShrunkNavIcon,
    isScoresTipsInMain,
    isTitleInAudio,
    isVerseBarAbove,
    isVerseBarBelow,

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
    handleAudioSliderTouchBegin,
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

    const isLogue = getIsLogue(selectedSongIndex),

        hiddenLyricColumnKey = getHiddenLyricColumnKey({
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
                handleAudioSliderTouchBegin={handleAudioSliderTouchBegin}
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

        carouselSectionProps = {
            handleLyricAnnotationSelect,
            handleAnnotationPrevious,
            handleAnnotationNext,
            handleAnnotationWikiSelect,
            handleAnnotationPortalSelect,
            handlePopupContainerClick
        },
        carouselChild = (
            <CarouselSection {...carouselSectionProps} />
        ),

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
            handleNavExpand,
            handleNavSongSelect,
            handleNavBookSelect,
            handleOverviewToggle,
            handleTipsToggle,

            audioBannerChild,
            audioSectionMenuChild,
            titleToggleChild
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
            'live-app',
            isLogue ? 'is-logue' : 'is-song',
            isLyricExpanded ? 'lyric-expanded' : 'lyric-collapsed',
            isOverlayingAnnotation ? 'overlaid-annotation' : 'side-annotation',
            isSliderMoving ? 'slider-moving' : 'slider-not-moving',
            interactivatedVerseIndex < 0 ? 'is-not-verse-interactivated' : 'is-verse-interactivated',

            hiddenLyricColumnKey && `hidden-lyric-${hiddenLyricColumnKey}`,
            selectedAnnotationIndex ? 'annotation-shown' : 'annotation-hidden',
            selectedCarouselIndex ? 'carousel-expanded' : 'carousel-collapsed',
            selectedDotsIndex ? 'dots-section-shown' : 'dots-section-hidden',
            selectedNavIndex ? 'nav-expanded' : 'nav-collapsed',
            showShrunkNavIcon ? 'shrink-nav-icon' : 'static-nav-icon',
            { 'show-only-left': showOneOfTwoLyricColumns && selectedLyricColumnIndex === 0,
              'show-only-right': showOneOfTwoLyricColumns && selectedLyricColumnIndex === 1,
              'title-in-audio': isTitleInAudio,
              'heightless-lyric': isHeightlessLyricColumn,
              'overview-shown': OVERVIEW_OPTIONS[selectedOverviewIndex] === SHOWN,
              'verse-above': isVerseBarAbove,
              'verse-below': isVerseBarBelow,
              'verse-bar-hidden': !isVerseBarAbove && !isVerseBarBelow,
              'scores-tips-in-main': isScoresTipsInMain },
            selectedDotKeys
        )}>
            {/* Ideal for song and logue to not be in separate overview subfields. */}
            <div className="column overview-logue-column">
                <OverviewPopup {...overviewPopupProps}
                    inOverviewSubfield={false}
                    overviewIndex={overviewLogueIndex}
                />
            </div>
            <MainColumn {...mainColumnProps}
                annotationPopupChild={ <AnnotationPopup {...annotationPopupProps} /> }
                carouselChild={carouselChild}
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

Live.propTypes = {
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
    selectedSongIndex: PropTypes.number.isRequired,
    interactivatedVerseIndex: PropTypes.number.isRequired,

    isSliderMoving: PropTypes.bool.isRequired,
    showOneOfTwoLyricColumns: PropTypes.bool.isRequired,
    isLyricExpanded: PropTypes.bool.isRequired,
    isHeightlessLyricColumn: PropTypes.bool.isRequired,
    showShrunkNavIcon: PropTypes.bool.isRequired,
    isScoresTipsInMain: PropTypes.bool.isRequired,
    isTitleInAudio: PropTypes.bool.isRequired,
    isVerseBarAbove: PropTypes.bool.isRequired,
    isVerseBarBelow: PropTypes.bool.isRequired,

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
    handleAudioSliderTouchBegin: PropTypes.func.isRequired,
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
    selectedAnnotationIndex, selectedCarouselIndex, selectedDotKeys, selectedDotsIndex, selectedLyricColumnIndex, selectedNavIndex, selectedOverviewIndex, selectedSongIndex, isHeightlessLyricColumn, isScoresTipsInMain, isTitleInAudio, showOneOfTwoLyricColumns, showShrunkNavIcon, interactivatedVerseIndex, annotationObject, deviceIndex, isLyricExpanded, isVerseBarAbove, isVerseBarBelow, overviewLogueIndex, overviewSongIndex, isSliderMoving
}) => ({
    selectedAnnotationIndex, selectedCarouselIndex, selectedDotKeys, selectedDotsIndex, selectedLyricColumnIndex, selectedNavIndex, selectedOverviewIndex, selectedSongIndex, isHeightlessLyricColumn, isScoresTipsInMain, isTitleInAudio, showOneOfTwoLyricColumns, showShrunkNavIcon, interactivatedVerseIndex, annotationObject, deviceIndex, isLyricExpanded, isVerseBarAbove, isVerseBarBelow, overviewLogueIndex, overviewSongIndex, isSliderMoving
}))(Live)
