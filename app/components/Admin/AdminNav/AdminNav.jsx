import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import AdminNavItem from './AdminNavItem'
import ProgressFooter from '../progress/ProgressFooter'
import ProgressHelper from '../progressHelper'

import { getSongsArray } from './helper'

/*************
 * CONTAINER *
 *************/

const AdminNavSection = ({

    allTasks,

    ...other
}) => {

    const maxTotalNeededHours = ProgressHelper.getMaxTotalNeededHoursFromSongs(getSongsArray()),
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

    // From controller.
    sumAllTasks,
    maxTotalNeededHours

}) => {
    const navItemProps = {
        selectedSongIndex,
        maxTotalNeededHours
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
                {getSongsArray().map((song, index) => {
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
    sumAllTasks: PropTypes.object.isRequired,
    maxTotalNeededHours: PropTypes.number.isRequired
}

export default connect(({
    songStore: { selectedSongIndex }
}) => ({
    selectedSongIndex
}))(AdminNavSection)
