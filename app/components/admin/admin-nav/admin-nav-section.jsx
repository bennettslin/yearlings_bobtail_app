import React from 'react'
import PropTypes from 'prop-types'
import AdminNavItem from './admin-nav-item'
import ProgressFooter from '../progress/progress-footer'
import ProgressHelper from '../../../helpers/progress-helper'

/*************
 * CONTAINER *
 *************/

const AdminNavSection = ({

    songs = [],
    allTasks,

...other }) => {

    const maxTotalNeededHours = ProgressHelper.getMaxTotalNeededHoursFromSongs(songs),
        sumAllTasks = allTasks ? ProgressHelper.calculateSumAllTasks(allTasks) : null

    return (
        <AdminNavSectionView {...other}
            songs={songs}
            sumAllTasks={sumAllTasks}
            maxTotalNeededHours={maxTotalNeededHours}
        />
    )
}

AdminNavSection.propTypes = {
    songs: PropTypes.array.isRequired,
    allTasks: PropTypes.array
}

/****************
 * PRESENTATION *
 ****************/

const AdminNavSectionView = ({

    // From props.
    songs,
    selectedSongIndex,
    handleNavSongSelect,

    // From controller.
    sumAllTasks,
    maxTotalNeededHours

}) => {
    const navItemProps = {
        selectedSongIndex,
        maxTotalNeededHours,
        handleNavSongSelect
    }

    return (
        <div
            className="section nav-section"
        >
            <div className="row">
                <div className="text-cell-wrapper">
                    <h3 className="text-cell text">song</h3>
                    <h3 className="text-cell figure">progress</h3>
                </div>
            </div>
            <div className="admin-block">
                {songs.map((song, index) => {
                    return (
                        <AdminNavItem {...navItemProps}
                            key={index}
                            song={song}
                            index={index}
                        />
                    )
                })}
            </div>
            <div className="row">
                <ProgressFooter
                    sumTask={sumAllTasks}
                />
            </div>
        </div>
    )
}

AdminNavSectionView.propTypes = {
    songs: PropTypes.array.isRequired,
    selectedSongIndex: PropTypes.number.isRequired,
    handleNavSongSelect: PropTypes.func.isRequired,
    sumAllTasks: PropTypes.object.isRequired,
    maxTotalNeededHours: PropTypes.number.isRequired
}

export default AdminNavSection
