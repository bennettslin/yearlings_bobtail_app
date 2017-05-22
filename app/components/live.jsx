import React from 'react'
import classnames from 'classnames'
import Button from './button/button'
import Carousel from './carousel/carousel'
import MainColumn from './main-column'
import LyricColumn from './lyric/lyric-column'
import AudioBanner from './audio/audio-banner'
import AudioTimer from './audio/audio-timer'
import AudioTransitionPopup from './audio/audio-transition-popup'
import AudioSection from './audio/audio-section'
import ScoresTipsSection from './scores-tips-section'
import OverviewButton from './overview/overview-toggle'
import OverviewTransitionPopup from './overview/overview-transition-popup'
import AnnotationTransitionPopup from './annotation/annotation-transition-popup'
import DotsSection from './dots/dots-section'
import ScoreTransitionPopup from './score/score-transition-popup'
import TitleTransitionPopup from './title/title-transition-popup'
import WikiTransitionPopup from './wiki/wiki-transition-popup'
import { getSong } from '../helpers/data-helper'
import { getWikiUrl } from '../helpers/logic-helper'
import { LYRIC_SECTION_EXPAND_KEY } from '../helpers/constants'

/*************
 * CONTAINER *
 *************/

const Live = (props) => {

    const selectedSong = getSong(props),
        selectedWikiUrl = getWikiUrl(props)

    return (
        <LiveView {...props}
            lyrics={selectedSong.lyrics}
            totalTime={selectedSong.totalTime}
            stanzaTimes={selectedSong.stanzaTimes}
            annotations={selectedSong.annotations}
            times={selectedSong.times}
            selectedWikiUrl={selectedWikiUrl}
            selectedSongLyrics={selectedSong.lyrics}
            hasDoubleColumns={selectedSong.doubleColumns}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const LiveView = ({

    // From props.
    deviceIndex,
    windowHeight,
    windowWidth,
    appMounted,

    isPhone,
    isDesktop,
    bookStartingIndices,
    scores,
    songs,
    annotations,
    popupAnnotation,
    popupLogueOverview,
    popupSongOverview,
    title,
    isPlaying,
    isLogue,
    selectedSongIndex,
    selectedAnnotationIndex,
    selectedDotKeys,
    selectedWikiIndex,
    selectedWikiUrl,
    selectedScoreIndex,
    selectedVerseIndex,
    selectedAudioOptionIndex,
    selectedTipsIndex,
    selectedTimePlayed,
    selectedLyricColumnIndex,
    selectedOverviewIndex,
    selectedDotsIndex,
    selectedNavIndex,
    selectedBookColumnIndex,
    selectedCarouselIndex,
    selectedTitleIndex,
    accessedOn,
    accessedSongIndex,
    accessedAnnotationIndex,
    accessedPopupAnchorIndex,
    accessedDotIndex,

    hiddenLyricColumnKey,
    interactivatedVerseIndex,

    sliderMoving,
    sliderMousedOrTouched,
    sliderRatio,
    sliderVerseIndex,
    showSingleLyricColumn,
    isLyricExpanded,
    isLyricExpandable,
    isHeightlessLyricColumn,
    isHiddenNav,
    showSingleBookColumn,
    shrinkNavIcon,
    scoresTipsOutsideMenu,
    titleInAudio,
    showOverlay,
    isOverviewShown,
    isOverlaidAnnotation,
    isSelectedVerseAbove,
    isSelectedVerseBelow,
    selectedVerse,

    lyricSectionRef,
    scoreSectionRef,
    wikiSectionRef,

    selectedSongTitle,
    handlePlayerTimeChange,

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
    stopPropagation,

    // From controller.
    totalTime,
    stanzaTimes,
    times,
    selectedSongLyrics,
    hasDoubleColumns

}) => {

    const hideLyricColumn = showSingleLyricColumn && hasDoubleColumns,
        timerInAudio = showOverlay && isPhone,
        verseBarHidden = !isSelectedVerseAbove && !isSelectedVerseBelow,

        annotationPopupProps = {
            songs,
            popupAnnotation,
            selectedAnnotationIndex,
            selectedCarouselIndex,
            selectedScoreIndex,
            selectedWikiIndex,
            accessedPopupAnchorIndex,
            handleAnnotationPrevious,
            handleAnnotationNext,
            handlePopupContainerClick,

            handleAnnotationPortalSelect,
            handleAnnotationWikiSelect
        },

        audioTimerProps = {
            isLogue,
            selectedTimePlayed
        },
        audioTimerChild = (
            <AudioTimer {...audioTimerProps} />
        ),
        audioBannerProps = {
            isLogue,
            songs,
            selectedVerseIndex,
            interactivatedVerseIndex,
            selectedSongIndex,
            sliderVerseIndex,
            sliderRatio,
            sliderMousedOrTouched,
            selectedSongTitle,
            selectedTimePlayed,
            totalTime,
            stanzaTimes,
            verseTimes: times,
            handlePlayerTimeChange,

            handleAudioSliderTouchBegin,

            audioTimerChild
        },
        audioBannerChild = (
            <AudioBanner {...audioBannerProps} />
        ),
        audioSectionProps = {
            isPhone,
            selectedSongIndex,
            isPlaying,
            title,
            selectedAudioOptionIndex,

            handleAudioPlay,
            handleAudioPreviousSong,
            handleAudioNextSong,
            handleAudioOptionsToggle,
            handleTitleToggle,
            handlePopupContainerClick,

            audioTimerChild,
            audioBannerChild
        },
        audioSectionChild = (
            <AudioSection {...audioSectionProps}
                titleInAudio={titleInAudio}
            />
        ),

        carouselProps = {
            songs,
            annotations,
            accessedAnnotationIndex,
            selectedAnnotationIndex,
            accessedPopupAnchorIndex,

            handleLyricAnnotationSelect,
            handleAnnotationPrevious,
            handleAnnotationNext,
            handleAnnotationWikiSelect,
            handleAnnotationPortalSelect
        },
        carouselChild = !isHiddenNav && (
            <Carousel {...carouselProps} />
        ),

        dotsSectionProps = {
            selectedDotKeys,
            selectedDotsIndex,
            accessedOn,
            accessedDotIndex,
            handlePopupContainerClick,
            handleDotToggle,
            stopPropagation
        },

        lyricColumnProps = {
            deviceIndex,
            appMounted,

            // For lyrics line width reset.
            isPortrait: windowHeight > windowWidth,

            verseBarHidden,
            sliderMousedOrTouched,
            sliderVerseIndex,
            isLogue,
            showSingleLyricColumn,
            hiddenLyricColumnKey,
            hasDoubleColumns,
            isPlaying,
            selectedVerse,
            accessedOn,
            accessedAnnotationIndex,
            selectedSongIndex,
            selectedAnnotationIndex,
            selectedLyricColumnIndex,
            interactivatedVerseIndex,
            songLyrics: selectedSongLyrics,
            selectedVerseIndex,

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

        lyricExpandButtonChild = isLyricExpandable && (
            <div className="lyric-button-block expand-button-block">
                <Button
                    accessKey={LYRIC_SECTION_EXPAND_KEY}
                    iconText={isLyricExpanded ? '-' : '+'}
                    isLarge={true}
                    handleClick={handleLyricSectionExpand}
                />
            </div>
        ),

        mainColumnProps = {
            isOverlaidAnnotation,

            isPhone,
            isDesktop,
            titleInAudio,
            isHiddenNav,
            scoresTipsOutsideMenu,

            scores,
            songs,
            title,
            bookStartingIndices,
            showSingleBookColumn,
            shrinkNavIcon,

            selectedNavIndex,
            selectedBookColumnIndex,
            selectedDotsIndex,
            selectedWikiUrl,
            selectedSongIndex,
            selectedTipsIndex,
            selectedCarouselIndex,
            selectedTitleIndex,

            accessedOn,
            accessedSongIndex,

            handleCarouselToggle,
            handleDotsSectionToggle,
            handleNavExpand,
            handleNavSongSelect,
            handleNavBookSelect,
            handleTipsToggle,
            handleTitleToggle,

            audioBannerChild,
            audioSectionChild
        },

        overviewButtonProps = {
            selectedOverviewIndex,
            handleOverviewToggle
        },

        overviewPopupProps = {
            isPhone,
            isLogue,
            selectedOverviewIndex,
            handlePopupContainerClick,

            // For toggle in popup in phone.
            handleOverviewToggle
        },

        scoresTipsSectionProps = {
            isPhone,
            selectedScoreIndex,
            selectedTipsIndex,

            handleScoreToggle,
            handleTipsToggle
        },

        scorePopupProps = {
            isPhone,
            scores,
            selectedScoreIndex,
            selectedSongIndex,
            scoreSectionRef,
            handleScoreToggle,
            handlePopupFocus
        },

        titlePopupProps = {
            selectedTitleIndex,
            handleTitleToggle,
            handlePopupFocus
        },

        wikiPopupProps = {
            selectedWikiIndex,
            selectedWikiUrl,
            wikiSectionRef,
            handleWikiToggle,
            handlePopupFocus
        }

    return (
        <div className={classnames(
            'live-app',
            isLogue ? 'is-logue' : 'is-song',
            isLyricExpanded ? 'lyric-expanded' : 'lyric-collapsed',
            isOverlaidAnnotation ? 'overlaid-annotation' : 'side-annotation',
            sliderMoving ? 'slider-moving' : 'slider-not-moving',
            interactivatedVerseIndex < 0 ? 'is-not-verse-interactivated' : 'is-verse-interactivated',
            selectedAnnotationIndex ? 'annotation-shown' : 'annotation-hidden',
            selectedCarouselIndex ? 'carousel-expanded' : 'carousel-collapsed',
            selectedDotsIndex ? 'dots-section-shown' : 'dots-section-hidden',
            selectedNavIndex ? 'nav-expanded' : 'nav-collapsed',
            showOverlay ? 'overlay-shown' : 'overlay-hidden',
            { 'timer-in-audio': timerInAudio,
              'title-in-audio': titleInAudio,
              'heightless-lyric': isHeightlessLyricColumn,
              'just-show-left-lyric': hideLyricColumn && selectedLyricColumnIndex === 0,
              'just-show-right-lyric': hideLyricColumn && selectedLyricColumnIndex === 1,
              'overview-shown': isOverviewShown,
              'verse-above': isSelectedVerseAbove,
              'verse-below': isSelectedVerseBelow,
              'verse-bar-hidden': verseBarHidden,
              'scores-tips-outside-menu': scoresTipsOutsideMenu },
            selectedDotKeys
        )}>
            {/* Ideal for song and logue to not be in separate overview subfields. */}
            <div className="column overview-logue-column">
                <OverviewTransitionPopup {...overviewPopupProps}
                    inOverviewSubfield={false}
                    overviewText={popupLogueOverview}
                />
            </div>
            <MainColumn {...mainColumnProps}
                annotationPopupChild={ <AnnotationTransitionPopup {...annotationPopupProps} /> }
                carouselChild={carouselChild}
                dotsSectionChild={ <DotsSection {...dotsSectionProps} /> }
                overviewPopupChild={
                    <OverviewTransitionPopup {...overviewPopupProps}
                        inOverviewSubfield={true}
                        overviewText={popupSongOverview}
                        overviewButtonChild={ <OverviewButton {...overviewButtonProps} /> }
                    />
                }
                overviewButtonChild={ <OverviewButton {...overviewButtonProps} /> }
                lyricExpandButtonChild={lyricExpandButtonChild}
                scoresTipsSectionChild={ <ScoresTipsSection {...scoresTipsSectionProps} /> }
            />

            <LyricColumn {...lyricColumnProps}
                lyricExpandButtonChild={lyricExpandButtonChild}
            />

            {
                <div className="overlay-popup-subfield">
                    <div className="overlay-popup-block audio-popup-block">
                        <AudioTransitionPopup {...audioSectionProps}
                            timerInAudio={timerInAudio}
                            titleInAudio={false}
                            showOverlay={showOverlay}
                        />
                    </div>
                    <div className="overlay-popup-block main-popup-block">
                        <TitleTransitionPopup {...titlePopupProps} />
                        <ScoreTransitionPopup {...scorePopupProps} />
                        <WikiTransitionPopup {...wikiPopupProps} />
                        {isOverlaidAnnotation &&
                            <AnnotationTransitionPopup {...annotationPopupProps} />
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default Live
