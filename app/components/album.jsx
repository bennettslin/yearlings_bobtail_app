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
    selectedLineIndex,
    selectedTime,
    isNarrowScreen,
    onSongClick,
    onScreenWidthClick,

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
                selectedLineIndex={selectedLineIndex}
                isNarrowScreen={isNarrowScreen}
                onScreenWidthClick={onScreenWidthClick}
            />
            <NavSection
                songs={songs}
                allTasks={allTasks}
                selectedSongIndex={selectedSongIndex}
                onSongClick={onSongClick}
            />
        </div>
        <Shared {...other}
            songs={songs}
            selectedSongIndex={selectedSongIndex}
            selectedTime={selectedTime}
            selectedLineIndex={selectedLineIndex}
            isNarrowScreen={isNarrowScreen}
        />
    </div>
)

export default Album
