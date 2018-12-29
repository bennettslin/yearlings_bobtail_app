import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import AdminNavItem from './AdminNavItem'
import ProgressFooter from '../ProgressFooter'
import { getSumOfTasks } from '../helper'

import { getSongsAndLoguesCount } from 'album/api/songs'
import { getArrayOfLength } from 'helpers/general'

import { getMaxTotalNeededHoursFromSongs } from './helper'

const songIndicesArray = getArrayOfLength(getSongsAndLoguesCount())

/*************
 * CONTAINER *
 *************/

const AdminNavSection = ({
    selectedSongIndex,
    allTasks
}) => {

    const
        maxTotalNeededHours = getMaxTotalNeededHoursFromSongs(),
        sumAllTasks = allTasks ? getSumOfTasks(allTasks) : null,

        navItemProps = {
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
                <ProgressFooter
                    sumTask={sumAllTasks}
                />
            </div>
        </div>
    )
}

AdminNavSection.propTypes = {
    // Through Redux.
    selectedSongIndex: PropTypes.number.isRequired,

    // From parent.
    allTasks: PropTypes.array
}

const mapStateToProps = ({
    selectedStore: { selectedSongIndex }
}) => ({
    selectedSongIndex
})

export default connect(mapStateToProps)(AdminNavSection)
