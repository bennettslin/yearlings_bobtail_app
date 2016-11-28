import React from 'react'
import NavRow from './nav-row'
import ProgressFooter from '../admin/progress/progress-footer'
import ProgressHelper from 'helpers/progress-helper'
import { NAV_SECTION } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const NavSection = ({

    songs = [],
    allTasks,
    accessedOn,
    accessedSectionKey,
    nextSectionKey,

...other }) => {

    const maxTotalNeededHours = ProgressHelper.getMaxTotalNeededHoursFromSongs(songs),
        sumAllTasks = allTasks ? ProgressHelper.calculateSumAllTasks(allTasks) : null,

        sectionAccessHighlighted = accessedOn && accessedSectionKey === NAV_SECTION,
        sectionNextHighlighted = accessedOn && nextSectionKey === NAV_SECTION

    return (
        <NavSectionView {...other}
            songs={songs}
            maxTotalNeededHours={maxTotalNeededHours}
            sumAllTasks={sumAllTasks}
            sectionAccessHighlighted={sectionAccessHighlighted}
            sectionNextHighlighted={sectionNextHighlighted}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const NavSectionView = ({

    // From props.
    isAdmin,
    songs,
    selectedSongIndex,
    accessedSongIndex,
    onSongClick,

    // From controller.
    maxTotalNeededHours,
    sectionAccessHighlighted,
    sectionNextHighlighted,
    sumAllTasks

}) => (
    <div
        className={`section nav-section${sectionAccessHighlighted ? ' access-highlighted' : ''}${sectionNextHighlighted ? ' next-highlighted' : ''}`}
    >
        {isAdmin ?
            <div className="row">
                <div className="text-cell-wrapper">
                    <h3 className="text-cell text">song</h3>
                    <h3 className="text-cell figure">progress</h3>
                </div>
            </div> : null
        }
        {songs.map((song, index) => {
            const isSelected = selectedSongIndex === index,
                accessHighlighted = sectionAccessHighlighted && accessedSongIndex === index

            return (
                <NavRow
                    key={index}
                    song={song}
                    songIndex={index}
                    maxTotalNeededHours={maxTotalNeededHours}
                    isSelected={isSelected}
                    accessHighlighted={accessHighlighted}
                    onSongClick={onSongClick}
                />
            )
        })}
        {isAdmin ?
            <div className="row">
                <ProgressFooter
                    sumTask={sumAllTasks}
                />
            </div> : null
        }
    </div>
)

export default NavSection
