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

const Shared = (props) => {

    const { songs,
            activeSongIndex,
            activeOverviewIndex,
            albumOverviews,
            albumTasks } = props,

        activeSong = AlbumHelper.getSong(activeSongIndex, songs),
        overviewText = AlbumHelper.getOverviewText(activeOverviewIndex, activeSong, albumOverviews),
        tasks = AlbumHelper.getTasks(activeSong, albumTasks)

    return (
        <SharedView {...props}
            activeSong={activeSong}
            overviewText={overviewText}
            tasks={tasks}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const SharedView = (props) => {

    const {
        // From props.
        activeSongIndex,
        activeOverviewIndex,
        onOverviewClick,

        // From controller.
        activeSong,
        overviewText,
        tasks

    } = props

    return (
        <div className="column shared-column">
            <div className="field shared-field">
                <OverviewsSection
                    overviewText={overviewText}
                    activeOverviewIndex={activeOverviewIndex}
                    onOverviewClick={onOverviewClick}
                />
                {/* Technically, stats only knows active song data so it really
                  * belongs in song column. But we're putting it here because
                  * it keeps the layout balanced, and it's just a dev tool. */}
                <StatsSection
                    lyrics={activeSong.lyrics}
                    annotations={activeSong.annotations}
                />
                <TasksSection
                    tasks={tasks}
                />
                <NotesSection />
            </div>
            {activeSongIndex ?
                <Song {...props} /> : null
            }
        </div>
    )
}

export default Shared
