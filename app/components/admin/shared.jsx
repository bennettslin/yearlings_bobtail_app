import React from 'react'
import { connect } from 'react-redux'
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

    const selectedSong = getSongObject(props.selectedSongIndex),
        tasks = getTasks(selectedSong, props.albumTasks),
        adminPluralCardsCount = selectedSong.adminPluralCardsCount

    return (
        <SharedView {...props}
            tasks={tasks}
            adminDotStanzas={selectedSong.adminDotStanzas}
            lyrics={selectedSong.lyrics}
            annotations={selectedSong.annotations}
            adminPluralCardsCount={adminPluralCardsCount}
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
    adminDotStanzas,
    lyrics,
    annotations,
    adminPluralCardsCount,

...other }) => (
    <div className="admin-column">
        <div className="admin-field shared-admin-field">
            <StatsSection
                adminDotStanzas={adminDotStanzas}
                lyrics={lyrics}
                annotations={annotations}
                adminPluralCardsCount={adminPluralCardsCount}
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

export default connect(({
    selectedSongIndex
}) => ({
    selectedSongIndex
}))(Shared)
