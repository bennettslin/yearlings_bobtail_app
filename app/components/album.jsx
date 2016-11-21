import React from 'react'
import Shared from './shared'
import TitleSection from './title/title-section'
import AudioSection from './audio/audio-section'
import DevSection from './dev/dev-section'
import NavSection from './nav/nav-section'
import TipsSection from './tips/tips-section'
import ProgressHelper from 'helpers/progress-helper'

/*************
 * CONTAINER *
 *************/

const Album = ({

    songs,
    tasks: albumTasks,

...other }) => {
    const allTasks = ProgressHelper.getAllTaskObjects(albumTasks, songs)

    return (
        <AlbumView {...other}
            songs={songs}
            albumTasks={albumTasks}
            allTasks={allTasks}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const AlbumView = ({

    // From props.
    songs,
    title,
    isPlaying,
    selectedSongIndex,
    selectedVerseIndex,
    selectedAudioOptionIndex,
    selectedTipsIndex,
    selectedTimePlayed,
    isSingleLyricColumn,
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
    onScreenWidthClick,
    onTipsClick,
    accessedOn,
    accessedSectionKey,
    nextSectionKey,
    accessedSongIndex,
    windowWidth,
    windowHeight,

    // From controller.
    allTasks,

...other }) => (
    <div className="column album-column">
        <div className="field album-field">
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
            <DevSection
                windowWidth={windowWidth}
                windowHeight={windowHeight}
                selectedTimePlayed={selectedTimePlayed}
                selectedVerseIndex={selectedVerseIndex}
                isSingleLyricColumn={isSingleLyricColumn}
                onScreenWidthClick={onScreenWidthClick}
            />
            <NavSection
                songs={songs}
                allTasks={allTasks}
                selectedSongIndex={selectedSongIndex}
                accessedOn={accessedOn}
                accessedSectionKey={accessedSectionKey}
                nextSectionKey={nextSectionKey}
                accessedSongIndex={accessedSongIndex}
                onSongClick={onSongClick}
            />
        </div>
        <Shared {...other}
            songs={songs}
            selectedSongIndex={selectedSongIndex}
            selectedVerseIndex={selectedVerseIndex}
            accessedOn={accessedOn}
            accessedSectionKey={accessedSectionKey}
            nextSectionKey={nextSectionKey}
            isSingleLyricColumn={isSingleLyricColumn}
            onVerseClick={onVerseClick}
        />
    </div>
)

export default Album
