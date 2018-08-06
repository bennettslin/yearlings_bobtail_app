import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import AdminNavItem from './AdminNavItem'
import ProgressFooter from '../progress/ProgressFooter'
import ProgressHelper from 'helpers/progressHelper'
import album from '../../../server/album'
const { songs } = album

/*************
 * CONTAINER *
 *************/

const AdminNavSection = ({

    allTasks,

...other }) => {

    const maxTotalNeededHours = ProgressHelper.getMaxTotalNeededHoursFromSongs(songs),
        sumAllTasks = allTasks ? ProgressHelper.calculateSumAllTasks(allTasks) : null

    return (
        <AdminNavSectionView {...other}
            sumAllTasks={sumAllTasks}
            maxTotalNeededHours={maxTotalNeededHours}
        />
    )
}

AdminNavSection.propTypes = {
    allTasks: PropTypes.array
}

/****************
 * PRESENTATION *
 ****************/

const AdminNavSectionView = ({

    // From props.
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
            className={cx(
                'AdminNav',
                'Admin__column'
            )}
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
    // Through Redux.
    selectedSongIndex: PropTypes.number.isRequired,

    // From parent.
    handleNavSongSelect: PropTypes.func.isRequired,
    sumAllTasks: PropTypes.object.isRequired,
    maxTotalNeededHours: PropTypes.number.isRequired
}

export default connect(({
    selectedSongIndex
}) => ({
    selectedSongIndex
}))(AdminNavSection)
