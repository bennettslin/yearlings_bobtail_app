import React from 'react'
import classnames from 'classnames'
import Button from './button/button'
import MainColumn from './main-column'
import LyricColumn from './lyric/lyric-column'
import AudioBanner from './audio/audio-banner'
import AudioTimer from './audio/audio-timer'
// import AudioPopup from './audio/audio-popup'
import AudioTransitionPopup from './audio/audio-transition-popup'
import AudioSection from './audio/audio-section'
import ScoresTipsSection from './scores-tips-section'
import OverviewButton from './overview/overview-toggle'
import OverviewTransitionPopup from './overview/overview-transition-popup'
import AnnotationTransitionPopup from './annotation/annotation-transition-popup'
import DotsSection from './dots/dots-section'
import ScoreTransitionPopup from './score/score-transition-popup'
import WikiTransitionPopup from './wiki/wiki-transition-popup'
import { getSong, getWikiUrl } from '../helpers/album-view-helper'
import { getShowSingleBookColumn, getShrinkNavIcon, getIsHeightlessLyricColumn, getIsHiddenNav, getScoresTipsOutsideMenu, getTitleInAudio } from '../helpers/responsive-helper'

/*************
 * CONTAINER *
 *************/

const Live = (props) => {

    const selectedSong = getSong(props),
        selectedWikiUrl = getWikiUrl(props),
        titleInAudio = getTitleInAudio(props),
        isHiddenNav = getIsHiddenNav(props),
        isHeightlessLyricColumn = getIsHeightlessLyricColumn(props),
        scoresTipsOutsideMenu = getScoresTipsOutsideMenu(props),
        showSingleBookColumn = getShowSingleBookColumn(props),
        shrinkNavIcon = getShrinkNavIcon(props)

    return (
        <LiveView {...props}
            lyrics={selectedSong.lyrics}
            totalTime={selectedSong.totalTime}
            stanzaTimes={selectedSong.stanzaTimes}
            times={selectedSong.times}
            overviewText={selectedSong.overview}
            selectedWikiUrl={selectedWikiUrl}
            selectedSongLyrics={selectedSong.lyrics}
            hasDoubleColumns={selectedSong.doubleColumns}
            titleInAudio={titleInAudio}
            isHiddenNav={isHiddenNav}
            isHeightlessLyricColumn={isHeightlessLyricColumn}
            scoresTipsOutsideMenu={scoresTipsOutsideMenu}
            showSingleBookColumn={showSingleBookColumn}
            shrinkNavIcon={shrinkNavIcon}
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
    popupAnnotation,
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
    handleTitleSelect,
    handleVerseBarSelect,
    handleVerseBarWheel,
    handleVerseElementSelect,
    handleVerseElementSlide,
    handleVerseInteractivate,
    handleWikiToggle,

    // From controller.
    overviewText,
    totalTime,
    stanzaTimes,
    times,
    selectedSongLyrics,
    hasDoubleColumns,
    titleInAudio,
    isHiddenNav,
    isHeightlessLyricColumn,
    scoresTipsOutsideMenu,
    showSingleBookColumn,
    shrinkNavIcon

}) => {

    const overviewPopupProps = {
            isPhone,
            isLogue,
            selectedOverviewIndex,
            overviewText,
            handlePopupContainerClick,

            // For toggle in popup in phone.
            handleOverviewToggle
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
            handleTitleSelect,
            handlePopupContainerClick,

            audioTimerChild,
            audioBannerChild
        },
        audioSectionChild = (
            <AudioSection {...audioSectionProps}
                titleInAudio={titleInAudio}
            />
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
            overviewText,
            bookStartingIndices,
            showSingleBookColumn,
            shrinkNavIcon,

            selectedNavIndex,
            selectedBookColumnIndex,
            selectedDotsIndex,
            selectedWikiUrl,
            selectedSongIndex,
            selectedTipsIndex,

            accessedOn,
            accessedSongIndex,

            handleAnnotationPortalSelect,
            handleDotsSectionToggle,
            handleNavExpand,
            handleNavSongSelect,
            handleNavBookSelect,
            handleTipsToggle,
            handleTitleSelect,

            audioBannerChild,
            audioSectionChild
        },
        verseBarHidden = !isSelectedVerseAbove && !isSelectedVerseBelow,
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
            selectedDotKeys,
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
        scoresTipsSectionProps = {
            isPhone,
            selectedScoreIndex,
            selectedTipsIndex,

            handleScoreToggle,
            handleTipsToggle
        },
        annotationPopupProps = {
            songs,
            popupAnnotation,
            selectedAnnotationIndex,
            selectedScoreIndex,
            selectedWikiIndex,
            accessedPopupAnchorIndex,
            selectedDotKeys,
            handleAnnotationPrevious,
            handleAnnotationNext,
            handlePopupContainerClick,

            handleAnnotationPortalSelect,
            handleAnnotationWikiSelect
        },
        dotsSectionProps = {
            selectedDotKeys,
            selectedDotsIndex,
            accessedOn,
            accessedDotIndex,
            handlePopupContainerClick,
            handleDotToggle
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
        wikiPopupProps = {
            selectedWikiIndex,
            selectedWikiUrl,
            wikiSectionRef,
            handleWikiToggle,
            handlePopupFocus
        },
        overviewButtonProps = {
            selectedOverviewIndex,
            handleOverviewToggle
        },

        lyricExpandButtonChild = isLyricExpandable && (
            <div className="lyric-button-block expand-button-block">
                <Button
                    iconText={isLyricExpanded ? '-' : '+'}
                    isLarge={true}
                    handleClick={handleLyricSectionExpand}
                />
            </div>
        ),

        timerInAudio = showOverlay && isPhone

    return (
        <div className={classnames(
            'live-app',
            isLogue ? 'is-logue' : 'is-song',
            isLyricExpanded ? 'lyric-expanded' : 'lyric-collapsed',
            isOverlaidAnnotation ? 'overlaid-annotation' : 'side-annotation',
            sliderMoving ? 'slider-moving' : 'slider-not-moving',
            interactivatedVerseIndex < 0 ? 'is-not-verse-interactivated' : 'is-verse-interactivated',
            selectedAnnotationIndex ? 'annotation-shown' : 'annotation-hidden',
            selectedDotsIndex ? 'dots-shown' : 'dots-hidden',
            selectedNavIndex ? 'nav-expanded' : 'nav-collapsed',
            showOverlay ? 'overlay-shown' : 'overlay-hidden',
            { 'timer-in-audio': timerInAudio,
              'title-in-audio': titleInAudio,
              'heightless-lyric': isHeightlessLyricColumn,
              'overview-shown': isOverviewShown,
              'verse-above': isSelectedVerseAbove,
              'verse-below': isSelectedVerseBelow,
              'verse-bar-hidden': verseBarHidden }
        )}>
            {/* Ideal for song and logue to not be in separate overview subfields. */}
            <div className="column overview-logue-column">
                    <OverviewTransitionPopup {...overviewPopupProps}
                        inOverviewSubfield={false}
                    />
            </div>
            <MainColumn {...mainColumnProps}
                annotationPopupChild={ <AnnotationTransitionPopup {...annotationPopupProps} /> }
                dotsSectionChild={ <DotsSection {...dotsSectionProps} /> }
                overviewPopupChild={
                    <OverviewTransitionPopup {...overviewPopupProps}
                        inOverviewSubfield={true}
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

            <div className="overlay-popup-subfield">
                <div className="overlay-popup-block audio-popup-block audio-subfield">
                    {/* <div className="audio-subfield"> */}
                        <AudioTransitionPopup {...audioSectionProps}
                            timerInAudio={timerInAudio}
                            titleInAudio={false}
                            showOverlay={showOverlay}
                        />
                    {/* </div> */}
                </div>
                <div className="overlay-popup-block main-popup-block">
                    <ScoreTransitionPopup {...scorePopupProps} />
                    <WikiTransitionPopup {...wikiPopupProps} />
                    {isOverlaidAnnotation &&
                        <AnnotationTransitionPopup {...annotationPopupProps} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Live
