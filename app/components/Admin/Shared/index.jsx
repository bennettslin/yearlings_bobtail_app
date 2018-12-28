import React from 'react'
import { connect } from 'react-redux'
import Drawing from '../Drawing'
import NotesSection from './notes/notes-section'
import StatsSection from './stats/stats-section'
import TasksSection from './tasks/tasks-section'
import { getSong } from 'album/api/songs'
import { getSongTasks } from '../helper'

/*************
 * CONTAINER *
 *************/

const Shared = ({

    selectedSongIndex,

    ...other
}) => {

    const selectedSong = getSong(selectedSongIndex),
        tasks = getSongTasks(selectedSongIndex),
        adminPluralCardsCount = selectedSong.adminPluralCardsCount

    return (
        <SharedView {...other}
            tasks={tasks}
            adminDotUnitsCount={selectedSong.adminDotUnitsCount}
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
    // From controller.
    tasks,
    adminDotUnitsCount,
    lyricUnits,
    annotations,
    adminPluralCardsCount,

    ...other
}) => (
    <div className="Admin__column">
        <div className="Admin__field shared">
            <StatsSection
                adminDotUnitsCount={adminDotUnitsCount}
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
