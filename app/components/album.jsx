import React from 'react'
import Shared from './shared'
import TitleSection from './title/title-section'
import DevSection from './dev/dev-section'
import NavSection from './nav/nav-section'
import ProgressHelper from 'helpers/progress-helper'

/*************
 * CONTAINER *
 *************/

const Album = (props) => {

    const { songs,
            albumTasks } = props,

        allTasks = ProgressHelper.getAllTaskObjects(albumTasks, songs)

    return (
        <AlbumView {...props}
            allTasks={allTasks}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const AlbumView = (props) => {

    const {
        // From props.
        songs,
        albumTitle,
        selectedSongIndex,
        selectedTime,
        onSongClick,

        // From controller.
        allTasks

    } = props

    return (
        <div className="column album-column">
            <div className="field album-field">
                <TitleSection
                    title={albumTitle}
                    onTitleClick={onSongClick}
                />
                <DevSection
                    selectedTime={selectedTime}
                />
                <NavSection
                    songs={songs}
                    allTasks={allTasks}
                    selectedSongIndex={selectedSongIndex}
                    onSongClick={onSongClick}
                />
            </div>
            <Shared {...props} />
        </div>
    )
}

export default Album
