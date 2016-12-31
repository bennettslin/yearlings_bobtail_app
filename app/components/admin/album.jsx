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
    deviceIndex,
    windowWidth,
    windowHeight,
    mp3s,
    songs,
    title,
    isPlaying,
    selectedSongIndex,
    selectedVerseIndex,
    selectedAudioOptionIndex,
    selectedTipsIndex,
    selectedTimePlayed,
    userSelectedTimePlayed,
    selectedNavIndex,
    selectedDotsIndex,
    showSingleLyricColumn,
    isFirstVerse,
    isLastVerse,
    selectedSongTitle,
    onSongClick,
    onVerseClick,
    onPlayClick,
    onAudioOptionClick,
    onScreenWidthClick,
    onTipsClick,
    onTimeChange,
    onTimeUpdated,
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
            <DevSection
                deviceIndex={deviceIndex}
                windowWidth={windowWidth}
                windowHeight={windowHeight}
                selectedSongIndex={selectedSongIndex}
                selectedVerseIndex={selectedVerseIndex}
                selectedNavIndex={selectedNavIndex}
                selectedDotsIndex={selectedDotsIndex}
                showSingleLyricColumn={showSingleLyricColumn}
                onScreenWidthClick={onScreenWidthClick}
            />
            <AudioSection
                isAdmin={true}
                mp3s={mp3s}
                isFirstVerse={isFirstVerse}
                isLastVerse={isLastVerse}
                selectedSongTitle={selectedSongTitle}
                selectedSongIndex={selectedSongIndex}
                isPlaying={isPlaying}
                selectedTimePlayed={selectedTimePlayed}
                userSelectedTimePlayed={userSelectedTimePlayed}
                selectedAudioOptionIndex={selectedAudioOptionIndex}
                accessedOn={accessedOn}
                accessedSectionKey={accessedSectionKey}
                nextSectionKey={nextSectionKey}
                onPlayClick={onPlayClick}
                onAudioSongClick={onSongClick}
                onAudioTimeClick={onVerseClick}
                onAudioOptionClick={onAudioOptionClick}
                onTimeChange={onTimeChange}
                onTimeUpdated={onTimeUpdated}
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
            <TipsSection
                isAdmin={true}
                selectedTipsIndex={selectedTipsIndex}
                onTipsClick={onTipsClick}
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
