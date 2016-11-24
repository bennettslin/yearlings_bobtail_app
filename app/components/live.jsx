import React from 'react'
import TitleSection from './title/title-section'
import AudioSection from './audio/audio-section'
import NavSection from './nav/nav-section'
import TipsSection from './tips/tips-section'
import OverviewsSection from './overviews/overviews-section'
import StageSection from './stage/stage-section'
import AnnotationPopup from './annotation/annotation-popup'
import WikiPopup from './wiki/wiki-popup'
import DotsSection from './dots/dots-section'
import LyricsSection from './lyrics/lyrics-section'
import { getSong, getAnnotation, getOverviewText, getWikiUrl } from 'helpers/album-view-helper'

/*************
 * CONTAINER *
 *************/

const Live = (props) => {

    const selectedSong = getSong(props),
        overviewText = getOverviewText(props),
        annotation = getAnnotation(props),
        selectedWikiUrl = getWikiUrl(props)

    return (
        <LiveView {...props}
            overviewText={overviewText}
            lyrics={selectedSong.lyrics}
            annotations={selectedSong.annotations}
            annotation={annotation}
            selectedWikiUrl={selectedWikiUrl}
            presentDotKeys={selectedSong.dotKeys}
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
    deviceWidth,
    windowWidth,
    windowHeight,
    songs,
    title,
    isPlaying,
    selectedSongIndex,
    selectedAnnotationIndex,
    selectedDotKeys,
    selectedWikiIndex,
    selectedWikiUrl,
    selectedVerseIndex,
    selectedAudioOptionIndex,
    selectedTipsIndex,
    selectedTimePlayed,
    selectedLyricColumnIndex,
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

    showSingleLyricColumn,
    isHome,
    isFirstSong,
    isLastSong,
    isFirstVerse,
    isLastVerse,
    audioSongTitle,
    onSongClick,
    onVerseClick,
    onPlayClick,
    onAudioOptionClick,
    onTipsClick,
    onOverviewClick,
    onDotClick,
    onPortalClick,
    onWikiUrlClick,
    onAnnotationClick,
    onLyricColumnClick,
    onAnnotationSectionClick,

    // From controller.
    overviewText,
    tasks,
    lyrics,
    annotations,
    annotation,
    presentDotKeys,
    selectedSongLyrics,
    hasDoubleColumns,

...other }) => (
    <div className="live">
        <TitleSection
            title={title}
            accessedOn={accessedOn}
            accessedSectionKey={accessedSectionKey}
            nextSectionKey={nextSectionKey}
            accessedSongIndex={accessedSongIndex}
            onTitleClick={onSongClick}
        />
        <AudioSection
            isHome={isHome}
            isFirstSong={isFirstSong}
            isLastSong={isLastSong}
            isFirstVerse={isFirstVerse}
            isLastVerse={isLastVerse}
            audioSongTitle={audioSongTitle}
            selectedSongIndex={selectedSongIndex}
            isPlaying={isPlaying}
            selectedTimePlayed={selectedTimePlayed}
            selectedAudioOptionIndex={selectedAudioOptionIndex}
            accessedOn={accessedOn}
            accessedSectionKey={accessedSectionKey}
            nextSectionKey={nextSectionKey}
            onPlayClick={onPlayClick}
            onAudioSongClick={onSongClick}
            onAudioTimeClick={onVerseClick}
            onAudioOptionClick={onAudioOptionClick}
        />
        <TipsSection
            selectedTipsIndex={selectedTipsIndex}
            onTipsClick={onTipsClick}
        />
        <NavSection
            songs={songs}
            selectedSongIndex={selectedSongIndex}
            accessedOn={accessedOn}
            accessedSectionKey={accessedSectionKey}
            nextSectionKey={nextSectionKey}
            accessedSongIndex={accessedSongIndex}
            onSongClick={onSongClick}
        />
        <OverviewsSection {...other}
            overviewText={overviewText}
            accessedOn={accessedOn}
            accessedSectionKey={accessedSectionKey}
            nextSectionKey={nextSectionKey}
            onOverviewClick={onOverviewClick}
        />
        <StageSection
        />
        <AnnotationPopup
            songs={songs}
            annotation={annotation}
            accessedPopupAnchorIndex={accessedPopupAnchorIndex}
            selectedDotKeys={selectedDotKeys}
            selectedWikiIndex={selectedWikiIndex}
            accessedOn={accessedOn}
            accessedSectionKey={accessedSectionKey}
            nextSectionKey={nextSectionKey}
            showArrows={true}
            onPortalClick={onPortalClick}
            onWikiUrlClick={onWikiUrlClick}
            onPopupButtonClick={onAnnotationClick}
            onSectionClick={onAnnotationSectionClick}
        />
        <WikiPopup
            selectedWikiUrl={selectedWikiUrl}
            accessedOn={accessedOn}
            accessedSectionKey={accessedSectionKey}
            nextSectionKey={nextSectionKey}
            onPopupButtonClick={onWikiUrlClick}
        />
        <DotsSection
            selectedDotKeys={selectedDotKeys}
            presentDotKeys={presentDotKeys}
            accessedOn={accessedOn}
            accessedSectionKey={accessedSectionKey}
            nextSectionKey={nextSectionKey}
            accessedDotIndex={accessedDotIndex}
            onDotClick={onDotClick}
        />
        {selectedSongIndex ?
            <LyricsSection
                showSingleLyricColumn={showSingleLyricColumn}
                lyricsStartAtZero={lyricsStartAtZero}
                accessedOn={accessedOn}
                accessedSectionKey={accessedSectionKey}
                nextSectionKey={nextSectionKey}
                accessedLyricElement={accessedLyricElement}
                accessedAnnotationIndex={accessedAnnotationIndex}
                accessedVerseIndex={accessedVerseIndex}
                selectedSongIndex={selectedSongIndex}
                selectedAnnotationIndex={selectedAnnotationIndex}
                selectedLyricColumnIndex={selectedLyricColumnIndex}
                hasDoubleColumns={hasDoubleColumns}
                songLyrics={selectedSongLyrics}
                selectedDotKeys={selectedDotKeys}
                selectedVerseIndex={selectedVerseIndex}
                onVerseClick={onVerseClick}
                onAnnotationClick={onAnnotationClick}
                onLyricColumnClick={onLyricColumnClick}
            /> : null
        }
    </div>
)

export default Live
