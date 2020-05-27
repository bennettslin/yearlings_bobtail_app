import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import AdminNavItem from './AdminNavItem'
import ProgressFooter from '../ProgressFooter'

import { getSongsAndLoguesCount } from '../../../../app/album/api/songs'
import { getArrayOfLength } from '../../../../app/helpers/general'

import {
    getSumOfTasks,
    getAllTasks,
    getAllTasksV2,
    getMaxTotalNeededHoursFromSongs
} from './helper'

const songIndicesArray = getArrayOfLength(getSongsAndLoguesCount())

const mapStateToProps = state => {
    const {
        selectedStore: { selectedSongIndex }
    } = state

    return {
        selectedSongIndex
    }
}

/*************
 * CONTAINER *
 *************/

const AdminNav = ({
    selectedSongIndex
}) => {

    const
        maxTotalNeededHours = getMaxTotalNeededHoursFromSongs(),

        navItemProps = {
            selectedSongIndex,
            maxTotalNeededHours
        },

        allTasks = getAllTasks(),
        allTasksV2 = getAllTasksV2(),
        sumAllTasks = allTasks ? getSumOfTasks(allTasks) : null,
        sumAllTasksV2 = allTasksV2 ? getSumOfTasks(allTasksV2) : null

    return (
        <div
            className={cx(
                'AdminNav',
                'Admin__column'
            )}
        >
            <h2>progress</h2>
            <div className="row">
                <ProgressFooter {...{ sumTask: sumAllTasks }} />
                <ProgressFooter
                    isV2
                    {...{ sumTask: sumAllTasksV2 }}
                />
            </div>
            {false && (
                <>
                    <div className="row">
                        <div className="text-cell-wrapper">
                            <h3 className="text-cell text">song</h3>
                            <h3 className="text-cell figure">progress</h3>
                        </div>
                    </div>
                    <div className="admin-block">
                        {songIndicesArray.map(songIndex => {
                            return (
                                <AdminNavItem {...navItemProps}
                                    key={songIndex}
                                    index={songIndex}
                                />
                            )
                        })}
                    </div>
                </>
            )}
        </div>
    )
}

AdminNav.propTypes = {
    // Through Redux.
    selectedSongIndex: PropTypes.number.isRequired,

    // From parent.
    allTasks: PropTypes.array,
    allTasksV2: PropTypes.array
}

export default connect(mapStateToProps)(AdminNav)
