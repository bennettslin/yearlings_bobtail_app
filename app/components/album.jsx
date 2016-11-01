import React from 'react'
import Shared from './shared'
import TitleSection from './title/title-section'
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
    selectedSongIndex,
    selectedVerseIndex,
    selectedTime,
    isNarrowScreen,
    onSongClick,
    onScreenWidthClick,
    accessedOn,
    accessedSectionKey,

    // From controller.
    allTasks,

...other }) => (
    <div className="column album-column">
        <div className="field album-field">
            <TitleSection
                title={albumTitle}
                onTitleClick={onSongClick}
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
