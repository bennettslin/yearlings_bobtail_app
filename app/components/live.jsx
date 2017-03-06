import React from 'react'
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
import ScorePopup from './score/score-popup'
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

    isPhone,
    isDesktop,
    manualWidth,
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
    interactivatedVerseIndex,
    accessedOn,
    accessedSectionKey,
    nextSectionKey,
    accessedSongIndex,
    accessedAnnotationIndex,
    accessedVerseIndex,
    accessedLyricElement,
    accessedPopupAnchorIndex,
    accessedDotIndex,

    lyricsStartAtZero,
    hiddenLyricColumnKey,
    hoveredVerseTimeBegin,
    hoveredVerseTimeEnd,

    sliderMousedOrTouched,
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

    isFirstVerse,
    isLastVerse,
    selectedSongTitle,
    onSongClick,
    onVerseClick,
    onPlayClick,
    onTimeChange,
    onAudioOptionClick,
    onTipsClick,
    onOverviewClick,
    onDotClick,
    onPortalClick,
    onSongFromPortalClick,
    onWikiUrlClick,
    onScoreClick,
    onAnnotationClick,
    onLyricColumnClick,
    onPopupContainerClick,
    onDotsExpandClick,
    onLyricExpandClick,
    onNavExpandClick,
    onBookColumnClick,
    onSelectVerseElement,
    onLyricSectionScroll,
    onVerseBarClick,
    onInteractivatedVerseClick,
    onVerseHover,
    onSliderMouseOrTouch,

    // From controller.
    overviewText,
    annotation,
    totalTime,
    stanzaTimes,
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
            onPopupButtonClick: onOverviewClick,
            onPopupContainerClick,

            // For toggle in popup in phone.
            onOverviewClick
        },
        audioTimerProps = {
            isLogue,
            selectedTimePlayed
        },
        audioTimerChild = (
            <AudioTimer {...audioTimerProps} />
        ),
        audioBannerProps = {
            hoveredVerseTimeBegin,
            hoveredVerseTimeEnd,
            sliderMousedOrTouched,
            selectedSongTitle,
            selectedTimePlayed,
            totalTime,
            stanzaTimes,
            onSliderMouseOrTouch,
            onTimeChange,

            audioTimerChild
        },
        audioBannerChild = (
            <AudioBanner {...audioBannerProps} />
        ),
        audioSectionProps = {
            isPhone,
            isFirstVerse,
            isLastVerse,
            selectedSongIndex,
            isPlaying,
            title,
            selectedAudioOptionIndex,
            accessedOn,
            accessedSectionKey,
            nextSectionKey,
            onPlayClick,
            onAudioSongClick: onSongClick,
            onTitleClick: onSongClick,
            onAudioOptionClick,

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
            accessedSectionKey,
            nextSectionKey,
            accessedSongIndex,

            onSongClick,
            onTipsClick,
            onPortalClick,
            onDotsExpandClick,
            onNavExpandClick,
            onBookColumnClick,

            audioBannerChild,
            audioSectionChild
        },
        lyricColumnProps = {
            deviceIndex,

            // For lyrics line width reset.
            isPortrait: windowHeight > windowWidth,

            isLogue,
            showSingleLyricColumn,
            hiddenLyricColumnKey,
            hasDoubleColumns,
            isPlaying,
            selectedVerse,
            lyricsStartAtZero,
            accessedOn,
            accessedSectionKey,
            nextSectionKey,
            accessedLyricElement,
            accessedAnnotationIndex,
            accessedVerseIndex,
            selectedSongIndex,
            selectedAnnotationIndex,
            selectedLyricColumnIndex,
            interactivatedVerseIndex,
            songLyrics: selectedSongLyrics,
            selectedDotKeys,
            selectedVerseIndex,
            onVerseClick,
            onAnnotationClick,
            onLyricColumnClick,
            onPlayClick,
            onSelectVerseElement,
            onLyricSectionScroll,
            onVerseBarClick,
            onInteractivatedVerseClick,
            onVerseHover
        },
        scoresTipsSectionProps = {
            isPhone,
            selectedScoreIndex,
            selectedTipsIndex,
            onScoreClick,
            onTipsClick
        },
        annotationPopupProps = {
            songs,
            annotation,
            accessedPopupAnchorIndex,
            selectedDotKeys,
            selectedScoreIndex,
            selectedWikiIndex,
            accessedOn,
            accessedSectionKey,
            nextSectionKey,
            showArrows: true,
            onPortalClick: onSongFromPortalClick,
            onWikiUrlClick,
            onPopupButtonClick: onAnnotationClick,
            onPopupContainerClick
        },
        dotsSectionProps = {
            selectedDotKeys,
            selectedDotsIndex,
            presentDotKeys,
            accessedOn,
            accessedSectionKey,
            nextSectionKey,
            accessedDotIndex,
            onDotClick,
            onPopupContainerClick
        },
        scorePopupProps = {
            justHide: true,
            isPhone,
            scores,
            selectedScoreIndex,
            showClose: true,
            onPopupButtonClick: onScoreClick,
            onPopupContainerClick
        },
        wikiPopupProps = {
            selectedWikiUrl,
            accessedOn,
            accessedSectionKey,
            nextSectionKey,
            showClose: true,
            onPopupButtonClick: onWikiUrlClick,
            onPopupContainerClick
        },
        overviewButtonProps = {
            selectedOverviewIndex,
            onOverviewClick
        },

        lyricExpandButtonChild = isLyricExpandable && (
            <div className="lyric-button-block expand-button-block">
                <a
                    className="lyric-button enabled"
                    onClick={e => onLyricExpandClick(e)}
                >
                    <div className="large button-icon lyric-icon">
                        {isLyricExpanded ? '-' : '+'}
                    </div>
                </a>
            </div>
        ),

        timerInAudio = showOverlay && isPhone

    return (
        <div className={
            `live-app
            ${selectedAnnotationIndex ? ' annotation-shown' : ''}
            ${isLogue ? ' is-logue' : ' is-song'}
            ${showLyricButtons ? '' : ' hide-lyric-buttons'}
            ${isLyricExpanded ? ' lyric-expanded' : ' lyric-collapsed'}
            ${timerInAudio ? ' timer-in-audio' : ''}
            ${titleInAudio ? ' title-in-audio' : ''}
            ${isHeightlessLyricColumn ? ' heightless-lyric' : ''}
            ${selectedNavIndex ? ' nav-expanded' : ''}
            ${selectedDotsIndex ? ' dots-shown' : ''}
            ${isOverviewShown ? ' overview-shown' : ''}
            ${showOverlay ? ' overlay-shown' : ''}
            ${isOverlaidAnnotation ? ' overlaid-annotation' : ' side-annotation'}
            ${sliderMousedOrTouched ? 'slider-moused-or-touched' : 'slider-not-moused-or-touched'}
            ${isSelectedVerseAbove ? 'verse-above' : ''}
            ${isSelectedVerseBelow ? 'verse-below' : ''}
            ${!isSelectedVerseAbove && !isSelectedVerseBelow ? 'verse-bar-hidden' : ''}
            ${interactivatedVerseIndex === -1 ? 'is-not-verse-interactivated' : 'is-verse-interactivated'}
            ${manualWidth ? ' manual-width' : ''}`
        }>
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
                    <ScorePopup {...scorePopupProps} />
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
