import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import keys from 'lodash.keys'

import AdminNavItem from './AdminNavItem'
import ProgressFooter from '../ProgressFooter'

import { getSongsAndLoguesCount } from 'album/api/songs'
import { getArrayOfLength } from 'helpers/general'

import {
    getSumOfTasks,
    getAllTasks,
    getAllTasksV2,
    getIllustratorTasks,
    getMaxTotalNeededHoursFromSongs
} from './helper'

const songIndicesArray = getArrayOfLength(getSongsAndLoguesCount())

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
        sumAllTasksV2 = allTasksV2 ? getSumOfTasks(allTasksV2) : null,
        illustratorTasks = getIllustratorTasks()

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
                {songIndicesArray.map(songIndex => {
                    return (
                        <AdminNavItem {...navItemProps}
                            key={songIndex}
                            index={songIndex}
                        />
                    )
                })}
            </div>
            <div className="row">
                {keys(illustratorTasks).map(thing => {
                    const thingTasks = illustratorTasks[thing]

                    return (
                        <ProgressFooter
                            {...{
                                key: thing,
                                thing,
                                sumTask: getSumOfTasks(thingTasks)
                            }}
                        />
                    )
                })}
                <ProgressFooter {...{ sumTask: sumAllTasks }} />
                <ProgressFooter
                    isV2
                    {...{ sumTask: sumAllTasksV2 }}
                />
            </div>
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

const mapStateToProps = ({
    selectedStore: { selectedSongIndex }
}) => ({
    selectedSongIndex
})

export default connect(mapStateToProps)(AdminNav)
