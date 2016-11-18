import React from 'react'
import Song from './song'
import NotesSection from './notes/notes-section'
import OverviewsSection from './overviews/overviews-section'
import StatsSection from './stats/stats-section'
import StageSection from './stage/stage-section'
import TasksSection from './tasks/tasks-section'
import { getSong, getTasks } from 'helpers/album-view-helper'

/*************
 * CONTAINER *
 *************/

const Shared = ({

    songs,
    overview: albumOverview,
    selectedSongIndex,
    albumTasks,

...other }) => {
    const selectedSong = getSong({ selectedSongIndex, songs }),
        { overview } = selectedSong,
        overviewText = overview ? overview : albumOverview,
        tasks = getTasks(selectedSong, albumTasks)

    return (
        <SharedView {...other}
            songs={songs}
            selectedSongIndex={selectedSongIndex}
            selectedSong={selectedSong}
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
    onOverviewClick,

    // From controller.
    overviewText,
    tasks,
    lyrics,
    annotations,

...other }) => (
    <div className="column shared-column">
        <div className="field shared-field">
            <OverviewsSection {...other}
                overviewText={overviewText}
                accessedOn={accessedOn}
                accessedSectionKey={accessedSectionKey}
                onOverviewClick={onOverviewClick}
            />
            {/* Technically, stats only knows selected song data so it really
              * belongs in song column. But we're putting it here because
              * it keeps the layout balanced, and it's just a dev tool. */}
            <StatsSection
                lyrics={lyrics}
                annotations={annotations}
            />
            <TasksSection
                tasks={tasks}
            />
            <StageSection />
            <NotesSection />
        </div>
        {selectedSongIndex ?
            <Song {...other}
                selectedSongIndex={selectedSongIndex}
                accessedOn={accessedOn}
                accessedSectionKey={accessedSectionKey}
            /> : null
        }
    </div>
)

export default Shared
