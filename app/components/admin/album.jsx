import React from 'react'
import Shared from './shared'
import DevSection from './dev/dev-section'
import NavSection from '../nav/nav-section'
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
    songs,
    selectedScoreIndex,
    selectedSongIndex,
    selectedVerseIndex,
    selectedNavIndex,
    selectedDotsIndex,
    showSingleLyricColumn,
    accessedOn,
    accessedSongIndex,

    handleNavSongSelect,

    // From controller.
    allTasks,

...other }) => {

    return (
        <div className="admin-column">
            <div className="admin-field album-admin-field">
                <DevSection
                    deviceIndex={deviceIndex}
                    windowWidth={windowWidth}
                    windowHeight={windowHeight}
                    selectedScoreIndex={selectedScoreIndex}
                    selectedSongIndex={selectedSongIndex}
                    selectedVerseIndex={selectedVerseIndex}
                    selectedNavIndex={selectedNavIndex}
                    selectedDotsIndex={selectedDotsIndex}
                    showSingleLyricColumn={showSingleLyricColumn}
                />
                <NavSection
                    selectedAdminIndex={true}
                    songs={songs}
                    allTasks={allTasks}
                    selectedSongIndex={selectedSongIndex}
                    accessedOn={accessedOn}
                    accessedSongIndex={accessedSongIndex}
                    handleNavSongSelect={handleNavSongSelect}
                />
            </div>
            <Shared {...other}
                songs={songs}
                selectedSongIndex={selectedSongIndex}
                selectedVerseIndex={selectedVerseIndex}
                accessedOn={accessedOn}
                showSingleLyricColumn={showSingleLyricColumn}
            />
        </div>
    )
}

export default Album
