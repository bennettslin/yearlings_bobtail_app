import React from 'react'
import Shared from './shared'
import TitleSection from './title/title-section'
import AudioSection from './audio/audio-section'
import DevSection from './dev/dev-section'
import NavSection from './nav/nav-section'
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
    selectedTimePlayed,
    isNarrowScreen,
    onSongClick,
    onPlayClick,
    onAudioOptionClick,
    onScreenWidthClick,
    accessedOn,
    accessedSectionKey,
    accessedSongIndex,

    // From controller.
    allTasks,

...other }) => (
    <div className="column album-column">
        <div className="field album-field">
            <TitleSection
                title={title}
                accessedOn={accessedOn}
                accessedSectionKey={accessedSectionKey}
                accessedSongIndex={accessedSongIndex}
                onTitleClick={onSongClick}
            />
            <AudioSection
                isPlaying={isPlaying}
                selectedAudioOptionIndex={selectedAudioOptionIndex}
                accessedOn={accessedOn}
                accessedSectionKey={accessedSectionKey}
                onPlayClick={onPlayClick}
                onAudioOptionClick={onAudioOptionClick}
            />
            <DevSection
                selectedTimePlayed={selectedTimePlayed}
                selectedVerseIndex={selectedVerseIndex}
                isNarrowScreen={isNarrowScreen}
                onScreenWidthClick={onScreenWidthClick}
            />
            <NavSection
                songs={songs}
                allTasks={allTasks}
                selectedSongIndex={selectedSongIndex}
                accessedOn={accessedOn}
                accessedSectionKey={accessedSectionKey}
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
            isNarrowScreen={isNarrowScreen}
        />
    </div>
)

export default Album
