import React from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import AdminNavItem from './AdminNavItem'
import ProgressFooter from '../ProgressFooter'
import { getSongsAndLoguesCount } from '../../../../app/api/album/songs'
import { getArrayOfLength } from '../../../../app/helpers/general'
import {
    getSumOfTasks,
    getAllTasks,
    getAllTasksV2,
    getMaxTotalNeededHoursFromSongs
} from './helper'
import { mapSelectedSongIndex } from '../../../../app/redux/selected/selectors'

const songIndicesArray = getArrayOfLength(getSongsAndLoguesCount())

/*************
 * CONTAINER *
 *************/

const AdminNav = () => {
    const
        selectedSongIndex = useSelector(mapSelectedSongIndex),
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

export default AdminNav
