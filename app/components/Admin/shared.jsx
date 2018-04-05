import React from 'react'
import { connect } from 'react-redux'
import Drawing from './Drawing'
import NotesSection from './notes/notes-section'
import StatsSection from './stats/stats-section'
import TasksSection from './tasks/tasks-section'
import { getSongObject, getSongTasks } from '../../helpers/dataHelper'

/*************
 * CONTAINER *
 *************/

const Shared = ({

    selectedSongIndex,

...other }) => {

    const selectedSong = getSongObject(selectedSongIndex),
        tasks = getSongTasks(selectedSongIndex),
        adminPluralCardsCount = selectedSong.adminPluralCardsCount

    return (
        <SharedView {...other}
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
