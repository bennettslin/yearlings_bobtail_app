import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Drawing from '../Drawing'
import NotesSection from './notes/notes-section'
import StatsSection from './stats/stats-section'
import TaskSection from './tasks/TaskSection'
import { getSong } from 'album/api/songs'
import { getSongTasks } from '../AdminNav/helper'

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

Shared.propTypes = {
    selectedSongIndex: PropTypes.number.isRequired
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
            <TaskSection
                tasks={tasks}
            />
            <NotesSection />
        </div>
        <Drawing {...other}
        />
    </div>
)

SharedView.propTypes = {
    tasks: PropTypes.array.isRequired,
    adminDotUnitsCount: PropTypes.number.isRequired,
    lyricUnits: PropTypes.array.isRequired,
    annotations: PropTypes.array.isRequired,
    adminPluralCardsCount: PropTypes.number.isRequired
}

export default connect(({
    selectedStore: { selectedSongIndex }
}) => ({
    selectedSongIndex
}))(Shared)
