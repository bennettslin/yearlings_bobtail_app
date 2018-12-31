/* eslint-disable react/prop-types */
import React from 'react'
// import PropTypes from 'prop-types'
import cx from 'classnames'

import {
    getRemainingTimeStringFromHours,
    getNextCheckInDateFromHours
} from './helper'

const ProgressFooter = ({ sumTask }) => {

    const neededHours = sumTask.neededHours,
        workedHours = sumTask.workedHours,
        remainingHours = neededHours - workedHours,
        neededTime = getRemainingTimeStringFromHours(neededHours),
        workedTime = getRemainingTimeStringFromHours(workedHours),
        remainingTime = getRemainingTimeStringFromHours(remainingHours),
        nextCheckInDate = getNextCheckInDateFromHours(remainingHours)

    return (
        <div className={cx(
            'ProgressFooter',
            'text-cell-wrapper'
        )}>
            {neededHours &&
                <div className="text-cell footer">
                    <div>{parseInt(neededHours)}h - {parseInt(workedHours)}h = {parseInt(remainingHours)}h</div>
                    <div>needed time: {neededTime}</div>
                    <div>worked time: {workedTime}</div>
                    <div>remaining time: {remainingTime}</div>
                    <div>next check-in: {nextCheckInDate}</div>
                </div>
            }
        </div>
    )
}

export default ProgressFooter
