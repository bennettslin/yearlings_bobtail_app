import React from 'react'
import { connect } from 'react-redux'
import Drawing from './Drawing/drawing'
import NotesSection from './notes/notes-section'
import StatsSection from './stats/stats-section'
import TasksSection from './tasks/tasks-section'
import { getSongObject, getSongTasks } from 'helpers/dataHelper'

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
            adminDotStanzasCount={selectedSong.adminDotStanzasCount}
            lyricUnits={selectedSong.lyricUnits}
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
    adminDotStanzasCount,
    lyricUnits,
    annotations,
    adminPluralCardsCount,

    ...other }) => (
    <div className="Admin__column">
        <div className="Admin__field shared">
            <StatsSection
                adminDotStanzasCount={adminDotStanzasCount}
                lyricUnits={lyricUnits}
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
    songStore: { selectedSongIndex }
}) => ({
    selectedSongIndex
}))(Shared)
