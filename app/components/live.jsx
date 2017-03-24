import React from 'react'
import classnames from 'classnames'
import MainColumn from './main-column'
import LyricColumn from './lyric/lyric-column'
import AudioBanner from './audio/audio-banner'
import AudioTimer from './audio/audio-timer'
import AudioPopup from './audio/audio-popup'
import AudioSection from './audio/audio-section'
import ScoresTipsSection from './scores-tips-section'
import OverviewButton from './overview/overview-toggle'
import OverviewPopup from './overview/overview-popup'
import AnnotationPopup from './annotation/annotation-popup'
import DotsSection from './dots/dots-section'
import ScoreTransitionPopup from './score/score-transition-popup'
import WikiPopup from './wiki/wiki-popup'
import { getSong, getAnnotation, getWikiUrl } from 'helpers/album-view-helper'
import { getShowSingleBookColumn, getShrinkNavIcon, getIsHeightlessLyricColumn, getIsHiddenNav, getScoresTipsOutsideMenu, getTitleInAudio } from 'helpers/responsive-helper'

/*************
 * CONTAINER *
 *************/

const Live = (props) => {

    const selectedSong = getSong(props),
        annotation = getAnnotation(props),
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
            annotation={annotation}
            selectedWikiUrl={selectedWikiUrl}
            presentDotKeys={selectedSong.dotKeys}
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
    accessedVerseIndex,
    accessedPopupAnchorIndex,
    accessedDotIndex,

    hiddenLyricColumnKey,
    interactivatedVerseIndex,

    sliderMoving,
    sliderMousedOrTouched,
    sliderRatio,
    sliderVerseIndex,
    showLyricButtons,
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

    selectedSongTitle,
    handlePlayerTimeChange,

    handlePopupContainerClick,
    handleVerseElementSelect,
    handleVerseElementSlide,
    handleLyricSectionScroll,
    handleLyricPlay,
    handleLyricVerseSelect,
    handleVerseInteractivate,

    handleAnnotationPrevious,
    handleAnnotationNext,
    handleAnnotationWikiSelect,
    handleAnnotationPortalSelect,
    handleAudioPlay,
    handleAudioPreviousSong,
    handleAudioNextSong,
    handleAudioOptionsToggle,
    handleAudioSliderTouchBegin,
    handleDotKeyToggle,
    handleDotsSectionToggle,
    handleNavExpand,
    handleNavSongSelect,
    handleNavBookSelect,
    handleLyricColumnSelect,
    handleLyricSectionExpand,
    handleVerseBarSelect,
    handleLyricAnnotationSelect,
    handleOverviewToggle,
    handlePopupFocus,
    handleScoreFocus,
    handleScoreToggle,
    handleTipsToggle,
    handleTitleSelect,
    handleWikiToggle,

    // From controller.
    overviewText,
    annotation,
    totalTime,
    stanzaTimes,
    times,
    presentDotKeys,
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
            accessedOn,

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
            accessedVerseIndex,
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
            handleVerseBarSelect,
            handleLyricPlay,
            handleLyricVerseSelect,
            handleVerseInteractivate,
            handleVerseElementSelect,
            handleVerseElementSlide
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
            annotation,
            accessedPopupAnchorIndex,
            selectedDotKeys,
            selectedScoreIndex,
            selectedWikiIndex,
            accessedOn,
            showArrows: true,
            onPopupButtonPreviousClick: handleAnnotationPrevious,
            onPopupButtonNextClick: handleAnnotationNext,
            handlePopupContainerClick,

            handleAnnotationPortalSelect,
            handleAnnotationWikiSelect
        },
        dotsSectionProps = {
            selectedDotKeys,
            selectedDotsIndex,
            presentDotKeys,
            accessedOn,
            accessedDotIndex,
            handlePopupContainerClick,

            handleDotKeyToggle
        },
        scorePopupProps = {
            isPhone,
            scores,
            selectedScoreIndex,
            selectedSongIndex,
            showClose: true,
            scoreSectionRef,
            handleScoreFocus,
            handleScoreToggle,
            handlePopupFocus,
            handlePopupContainerClick
        },
        wikiPopupProps = {
            selectedWikiUrl,
            accessedOn,
            showClose: true,
            onPopupButtonCloseClick: handleWikiToggle,
            handlePopupContainerClick
        },
        overviewButtonProps = {
            selectedOverviewIndex,
            handleOverviewToggle
        },

        lyricExpandButtonChild = isLyricExpandable && (
            <div className="lyric-button-block expand-button-block">
                <a
                    className="lyric-button enabled"
                    onClick={handleLyricSectionExpand}
                >
                    <div className="large button-icon lyric-icon">
                        {isLyricExpanded ? '-' : '+'}
                    </div>
                </a>
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
            { 'hide-lyric-buttons': !showLyricButtons,
              'timer-in-audio': timerInAudio,
              'title-in-audio': titleInAudio,
              'heightless-lyric': isHeightlessLyricColumn,
              'overview-shown': isOverviewShown,
              'overlay-shown': showOverlay,
              'verse-above': isSelectedVerseAbove,
              'verse-below': isSelectedVerseBelow,
              'verse-bar-hidden': verseBarHidden }
        )}>
            {/* Ideal for song and logue to not be in separate overview subfields. */}
            <div className="column overview-logue-column">
                    <OverviewPopup {...overviewPopupProps}
                        inOverviewSubfield={false}
                    />
            </div>
            <MainColumn {...mainColumnProps}
                annotationPopupChild={ <AnnotationPopup {...annotationPopupProps} /> }
                dotsSectionChild={ <DotsSection {...dotsSectionProps} /> }
                overviewPopupChild={
                    <OverviewPopup {...overviewPopupProps}
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
                <div className="audio-subfield">
                    <AudioPopup {...audioSectionProps}
                        timerInAudio={timerInAudio}
                        titleInAudio={false}
                        showOverlay={showOverlay}
                    />
                </div>
                <div className="overlay-popup-block">
                    <ScoreTransitionPopup {...scorePopupProps} />
                    <WikiPopup {...wikiPopupProps} />
                    {isOverlaidAnnotation &&
                        <AnnotationPopup {...annotationPopupProps} />
                    }
                </div>
            </div>


        </div>
    )
}

export default Live
