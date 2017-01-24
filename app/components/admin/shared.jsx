import React from 'react'
import Drawing from './Drawing'
import NotesSection from './notes/notes-section'
import StatsSection from './stats/stats-section'
import TasksSection from './tasks/tasks-section'
import { getSong, getTasks } from 'helpers/album-view-helper'

/*************
 * CONTAINER *
 *************/

const Shared = (props) => {

    const selectedSong = getSong(props),
        tasks = getTasks(selectedSong, props.albumTasks)

    return (
        <SharedView {...props}
            tasks={tasks}
            lyrics={selectedSong.lyrics}
            annotations={selectedSong.annotations}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const SharedView = ({

    // From props.

    // From controller.
    tasks,
    lyrics,
    annotations,

...other }) => (
    <div className="admin-column">
        <div className="admin-field shared-admin-field">
            <StatsSection
                lyrics={lyrics}
                annotations={annotations}
            />
            <TasksSection
                tasks={tasks}
            />
            <NotesSection />
        </div>
        <Drawing {...other}
        />
    </div>
)

export default Shared
