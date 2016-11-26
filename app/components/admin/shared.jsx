import React from 'react'
import Song from './song'
import NotesSection from './notes/notes-section'
import OverviewsSection from '../overviews/overviews-section'
import StatsSection from './stats/stats-section'
import StageSection from '../stage/stage-section'
import TasksSection from './tasks/tasks-section'
import { getSong, getTasks, getOverviewText } from 'helpers/album-view-helper'

/*************
 * CONTAINER *
 *************/

const Shared = (props) => {

    const selectedSong = getSong(props),
        overviewText = getOverviewText(props),
        tasks = getTasks(selectedSong, props.albumTasks)

    return (
        <SharedView {...props}
            overviewText={overviewText}
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
    selectedSongIndex,
    accessedOn,
    accessedSectionKey,
    nextSectionKey,
    onOverviewClick,

    // From controller.
    overviewText,
    tasks,
    lyrics,
    annotations,

...other }) => (
    <div className="column shared-column">
        <div className="admin-field shared-admin-field">
            <OverviewsSection {...other}
                isAdmin={true}
                overviewText={overviewText}
                onOverviewClick={onOverviewClick}
            />
            <StatsSection
                lyrics={lyrics}
                annotations={annotations}
            />
            <TasksSection
                tasks={tasks}
            />
            <StageSection
                isAdmin={true}
            />
            <NotesSection />
        </div>
        <Song {...other}
            selectedSongIndex={selectedSongIndex}
            accessedOn={accessedOn}
            accessedSectionKey={accessedSectionKey}
            nextSectionKey={nextSectionKey}
        />
    </div>
)

export default Shared
