import React from 'react'
import Shared from './shared'
import TitleSection from './title/title-section'
import PlayerSection from './player/player-section'
import DevSection from './dev/dev-section'
import NavSection from './nav/nav-section'
import ProgressHelper from 'helpers/progress-helper'

/*************
 * CONTAINER *
 *************/

const Album = ({

    songs,
    albumTasks,

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
    albumTitle,
    isPlaying,
    selectedSongIndex,
    selectedVerseIndex,
    selectedPlayerOptionIndex,
    selectedTime,
    isNarrowScreen,
    onSongClick,
    onPlayButtonClick,
    onPlayerOptionClick,
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
                title={albumTitle}
                accessedOn={accessedOn}
                accessedSectionKey={accessedSectionKey}
                accessedSongIndex={accessedSongIndex}
                onTitleClick={onSongClick}
            />
            <PlayerSection
                isPlaying={isPlaying}
                selectedPlayerOptionIndex={selectedPlayerOptionIndex}
                accessedOn={accessedOn}
                accessedSectionKey={accessedSectionKey}
                onPlayButtonClick={onPlayButtonClick}
                onPlayerOptionClick={onPlayerOptionClick}
            />
            <DevSection
                selectedTime={selectedTime}
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
            selectedTime={selectedTime}
            selectedVerseIndex={selectedVerseIndex}
            accessedOn={accessedOn}
            accessedSectionKey={accessedSectionKey}
            isNarrowScreen={isNarrowScreen}
        />
    </div>
)

export default Album
