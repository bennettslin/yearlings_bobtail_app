import React from 'react'
import Shared from './shared'
import TitleSection from '../title/title-section'
import AudioSection from '../audio/audio-section'
import DevSection from './dev/dev-section'
import NavSection from '../nav/nav-section'
import TipsSection from '../tips/tips-section'
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
    deviceWidth,
    windowWidth,
    windowHeight,
    songs,
    title,
    isPlaying,
    selectedSongIndex,
    selectedVerseIndex,
    selectedAudioOptionIndex,
    selectedTipsIndex,
    selectedTimePlayed,
    showSingleLyricColumn,
    isHome,
    isFirstSong,
    isLastSong,
    isFin,
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

    // From controller.
    allTasks,

...other }) => (
    <div className="admin-column album-admin-column">
        <div className="admin-field album-admin-field">
            <TitleSection
                title={title}
                accessedOn={accessedOn}
                accessedSectionKey={accessedSectionKey}
                nextSectionKey={nextSectionKey}
                accessedSongIndex={accessedSongIndex}
                onTitleClick={onSongClick}
            />
            <AudioSection
                isAdmin={true}
                isHome={isHome}
                isFirstSong={isFirstSong}
                isLastSong={isLastSong}
                isFin={isFin}
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
                isAdmin={true}
                selectedTipsIndex={selectedTipsIndex}
                onTipsClick={onTipsClick}
            />
            <DevSection
                deviceWidth={deviceWidth}
                windowWidth={windowWidth}
                windowHeight={windowHeight}
                selectedVerseIndex={selectedVerseIndex}
                showSingleLyricColumn={showSingleLyricColumn}
                onScreenWidthClick={onScreenWidthClick}
            />
            <NavSection
                isAdmin={true}
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
            showSingleLyricColumn={showSingleLyricColumn}
            onVerseClick={onVerseClick}
        />
    </div>
)

export default Album
