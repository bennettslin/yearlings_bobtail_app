import React from 'react'
import Shared from './shared'
import DevSection from './dev/dev-section'
import AdminNavSection from './admin-nav/admin-nav-section'
import ProgressHelper from '../../helpers/progress-helper'
import AlbumData from '../../album-data'
const { songs } = AlbumData

/*************
 * CONTAINER *
 *************/

const Overall = ({

    tasks: albumTasks,

...other }) => {
    const allTasks = ProgressHelper.getAllTaskObjects(albumTasks, songs)

    return (
        <OverallView {...other}
            albumTasks={albumTasks}
            allTasks={allTasks}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const OverallView = ({

    // From props.
    deviceIndex,
    windowWidth,
    windowHeight,
    selectedScoreIndex,
    selectedSongIndex,
    selectedVerseIndex,
    selectedNavIndex,
    selectedDotsIndex,
    showSingleLyricColumn,

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
                <AdminNavSection
                    allTasks={allTasks}
                    selectedSongIndex={selectedSongIndex}
                    handleNavSongSelect={handleNavSongSelect}
                />
            </div>
            <Shared {...other}
                selectedSongIndex={selectedSongIndex}
                selectedVerseIndex={selectedVerseIndex}
                showSingleLyricColumn={showSingleLyricColumn}
            />
        </div>
    )
}

export default Overall
