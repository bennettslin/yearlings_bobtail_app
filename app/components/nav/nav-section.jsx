import React from 'react'
import NavRow from './nav-row'
import ProgressFooter from '../progress/progress-footer'
import ProgressHelper from 'helpers/progress-helper'
import { PLAYER } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const NavSection = ({

    songs,
    allTasks,
    accessedOn,
    accessedSectionKey,

...other }) => {

    const maxTotalNeededHours = ProgressHelper.getMaxTotalNeededHoursFromSongs(songs),
        sumAllTasks = ProgressHelper.calculateSumAllTasks(allTasks),

        accessHighlighted = accessedOn && accessedSectionKey === PLAYER

    return (
        <NavSectionView {...other}
            songs={songs}
            maxTotalNeededHours={maxTotalNeededHours}
            sumAllTasks={sumAllTasks}
            accessHighlighted={accessHighlighted}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const NavSectionView = ({

    // From props.
    songs,
    selectedSongIndex,
    onSongClick,

    // From controller.
    maxTotalNeededHours,
    sumAllTasks,
    accessHighlighted

}) => (
    <div className={`section songs-section${accessHighlighted ? ' access-highlighted' : ''}`}>
        <div className="row">
            <div className="text-cell-wrapper">
                <h3 className="text-cell text">song</h3>
                <h3 className="text-cell figure">progress</h3>
            </div>
        </div>
        {songs.map((song, index) => {
            const isSelected = selectedSongIndex - 1 === index
            return (
                <NavRow
                    key={index}
                    song={song}
                    songIndex={index + 1}
                    maxTotalNeededHours={maxTotalNeededHours}
                    isSelected={isSelected}
                    onSongClick={onSongClick}
                />
            )
        })}
        <div className="row">
            <ProgressFooter
                sumTask={sumAllTasks}
            />
        </div>
    </div>
)

export default NavSection
