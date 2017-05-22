import React from 'react'
import Drawing from './Drawing'
import NotesSection from './notes/notes-section'
import StatsSection from './stats/stats-section'
import TasksSection from './tasks/tasks-section'
import { getSongObject } from '../../helpers/data-helper'
import { getTasks } from '../../helpers/logic-helper'

/*************
 * CONTAINER *
 *************/

const Shared = (props) => {

    const selectedSong = getSongObject(props),
        tasks = getTasks(selectedSong, props.albumTasks),
        multipleCardAnnotationsCount = selectedSong.multipleCardAnnotationsCount

    return (
        <SharedView {...props}
            tasks={tasks}
            dotStanzas={selectedSong.dotStanzas}
            lyrics={selectedSong.lyrics}
            annotations={selectedSong.annotations}
            multipleCardAnnotationsCount={multipleCardAnnotationsCount}
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
    dotStanzas,
    lyrics,
    annotations,
    multipleCardAnnotationsCount,

...other }) => (
    <div className="admin-column">
        <div className="admin-field shared-admin-field">
            <StatsSection
                dotStanzas={dotStanzas}
                lyrics={lyrics}
                annotations={annotations}
                multipleCardAnnotationsCount={multipleCardAnnotationsCount}
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
