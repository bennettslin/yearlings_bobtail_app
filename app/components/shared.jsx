import React from 'react'
import Song from './song'
import NotesSection from './notes/notes-section'
import OverviewsSection from './overviews/overviews-section'
import StatsSection from './stats/stats-section'
import TasksSection from './tasks/tasks-section'
import AlbumHelper from 'helpers/album-view-helper'

/*************
 * CONTAINER *
 *************/

const Shared = ({

    songs,
    selectedSongIndex,
    selectedOverviewIndex,
    albumOverviews,
    albumTasks,
    ...other }) => {

    const selectedSong = AlbumHelper.getSong(selectedSongIndex, songs),
        overviewText = AlbumHelper.getOverviewText(selectedOverviewIndex, selectedSong, albumOverviews),
        tasks = AlbumHelper.getTasks(selectedSong, albumTasks)

    return (
        <SharedView {...other}
            songs={songs}
            selectedSongIndex={selectedSongIndex}
            selectedOverviewIndex={selectedOverviewIndex}
            selectedSong={selectedSong}
            overviewText={overviewText}
            tasks={tasks}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const SharedView = ({
    // From props.
    selectedSongIndex,
    selectedOverviewIndex,
    onOverviewClick,

    // From controller.
    selectedSong,
    overviewText,
    tasks,
    ...other }) => (
    <div className="column shared-column">
        <div className="field shared-field">
            <OverviewsSection
                overviewText={overviewText}
                selectedOverviewIndex={selectedOverviewIndex}
                onOverviewClick={onOverviewClick}
            />
            {/* Technically, stats only knows selected song data so it really
              * belongs in song column. But we're putting it here because
              * it keeps the layout balanced, and it's just a dev tool. */}
            <StatsSection
                lyrics={selectedSong.lyrics}
                annotations={selectedSong.annotations}
            />
            <TasksSection
                tasks={tasks}
            />
            <NotesSection />
        </div>
        {selectedSongIndex ?
            <Song {...other}
                selectedSong={selectedSong}
            /> : null
        }
    </div>
)

export default Shared
