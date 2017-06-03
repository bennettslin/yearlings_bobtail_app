// Component that shows all user-facing UI.

import React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import Button from './button/button'
import MainColumn from './main/main-column'
import LyricColumn from './lyric/lyric-column'
import AudioBanner from './audio/audio-banner'
import AudioTimer from './audio/audio-timer'
import AudioSection from './audio/audio-section'
import CarouselSection from './carousel/carousel-section'
import DotsSection from './dots/dots-section'
import ScoresTipsSection from './main/scores-tips-section'
import OverviewToggle from './overview/overview-toggle'
import TitleToggle from './title/title-toggle'
import AudioPopup from './audio/audio-popup'
import OverviewPopup from './overview/overview-popup'
import AnnotationPopup from './annotation/annotation-popup'
import ScorePopup from './score/score-popup'
import TitlePopup from './title/title-popup'
import WikiPopup from './wiki/wiki-popup'
import { LYRIC_SECTION_EXPAND_KEY } from '../constants/access'
import { SHOWN,
         OVERVIEW_OPTIONS } from '../constants/options'
import { getIsDesktop, getIsPhone, getIsLyricExpandable } from '../helpers/responsive-helper'

const Live = ({

    // From props.
    deviceIndex,
    // windowHeight,
    // windowWidth,

    // annotationObject,
    overviewLogueIndex,
    overviewSongIndex,
    isPlaying,
    isLogue,
    selectedAnnotationIndex,
    selectedCarouselIndex,
    selectedDotKeys,
    selectedDotsIndex,
    selectedLyricColumnIndex,
    selectedNavIndex,
    selectedOverviewIndex,

    interactivatedVerseIndex,

    isSliderMoving,
    isSliderTouched,
    sliderVerseIndex,
    showOneOfTwoLyricColumns,
    isLyricExpanded,
    isHeightlessLyricColumn,
    isHiddenNav,
    showShrunkNavIcon,
    isScoresTipsInMain,
    isTitleInAudio,
    isOverlayingAnnotation,
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

    // FIXME: Get this somewhere else!
    const isPhone = getIsPhone(deviceIndex),
        isDesktop = getIsDesktop(deviceIndex),

        titleToggleProps = {
            handleTitleToggle
        },
        titleToggleChild = (
            <TitleToggle {...titleToggleProps} />
        ),

        annotationPopupProps = {
            // annotationObject,

            handleAnnotationPrevious,
            handleAnnotationNext,
            handlePopupContainerClick,

            handleAnnotationPortalSelect,
            handleAnnotationWikiSelect
        },

        audioTimerChild = (
            <AudioTimer />
        ),
        audioSliderProps = {
            handleAudioSliderTouchBegin,
            audioTimerChild
        },
        audioBannerChild = (
            <AudioBanner {...audioSliderProps} />
        ),
        audioSectionProps = {
            handleAudioPlay,
            handleAudioPreviousSong,
            handleAudioNextSong,
            handleAudioOptionsToggle,
            handlePopupContainerClick,

            audioTimerChild,
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
            handleAnnotationPortalSelect
        },
        carouselChild = !isHiddenNav && (
            <CarouselSection {...carouselSectionProps} />
        ),

        dotsSectionProps = {
            handlePopupContainerClick,
            handleDotToggle,
            stopPropagation
        },

        lyricColumnProps = {
            deviceIndex,

            // TODO: Commenting out for now. If it's still important, pass it through Redux.
            // For lyrics line width reset.
            // isPortrait: windowHeight > windowWidth,

            isSliderTouched,
            sliderVerseIndex,
            isLogue,
            isPlaying,

            lyricSectionRef,

            handleLyricAnnotationSelect,
            handleLyricColumnSelect,
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

        lyricExpandButtonChild = getIsLyricExpandable(deviceIndex) ? (
                <div className="lyric-button-block expand-button-block">
                    <Button
                        accessKey={LYRIC_SECTION_EXPAND_KEY}
                        iconText={isLyricExpanded ? '-' : '+'}
                        isLarge={true}
                        handleClick={handleLyricSectionExpand}
                    />
                </div>
            ) : null,

        mainColumnProps = {
            isOverlayingAnnotation,

            isPhone,
            isDesktop,

            handleCarouselToggle,
            handleDotsSectionToggle,
            handleNavExpand,
            handleNavSongSelect,
            handleNavBookSelect,
            handleTipsToggle,

            audioBannerChild,
            audioSectionMenuChild,
            titleToggleChild
        },

        overviewButtonChild = (
            <OverviewToggle
                handleOverviewToggle={handleOverviewToggle}
            />
        ),
        overviewPopupProps = {
            handlePopupContainerClick,
            overviewButtonChild
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
                overviewButtonChild={overviewButtonChild}
                lyricExpandButtonChild={lyricExpandButtonChild}
                scoresTipsSectionChild={ <ScoresTipsSection {...scoresTipsSectionProps} /> }
            />

            <LyricColumn {...lyricColumnProps}
                lyricExpandButtonChild={lyricExpandButtonChild}
            />

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

export default connect(({
    selectedAnnotationIndex, selectedCarouselIndex, selectedDotKeys, selectedDotsIndex, selectedLyricColumnIndex, selectedNavIndex, selectedOverviewIndex, isHeightlessLyricColumn, isHiddenNav, isScoresTipsInMain, isTitleInAudio, showOneOfTwoLyricColumns, showShrunkNavIcon, carouselAnnotationIndex, interactivatedVerseIndex, annotationObject, deviceIndex, isLyricExpanded, isVerseBarAbove, isVerseBarBelow, overviewLogueIndex, overviewSongIndex, isSliderMoving, isSliderTouched
}) => ({
    selectedAnnotationIndex, selectedCarouselIndex, selectedDotKeys, selectedDotsIndex, selectedLyricColumnIndex, selectedNavIndex, selectedOverviewIndex, isHeightlessLyricColumn, isHiddenNav, isScoresTipsInMain, isTitleInAudio, showOneOfTwoLyricColumns, showShrunkNavIcon, carouselAnnotationIndex, interactivatedVerseIndex, annotationObject, deviceIndex, isLyricExpanded, isVerseBarAbove, isVerseBarBelow, overviewLogueIndex, overviewSongIndex, isSliderMoving, isSliderTouched
}))(Live)
