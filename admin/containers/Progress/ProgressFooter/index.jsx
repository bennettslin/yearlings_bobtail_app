/* eslint-disable react/prop-types */
import React from 'react'
// import PropTypes from 'prop-types'
import cx from 'classnames'

import {
    getRemainingTimeStringFromHours,
    getNextCheckInDateFromHours
} from './helper'

const ProgressFooter = ({
    isV2,
    thing,
    sumTask
}) => {

    const
        {
            workedHours,
            neededHours
        } = sumTask,
        remainingHours = neededHours - workedHours,
        neededTime = getRemainingTimeStringFromHours(neededHours),
        workedTime = getRemainingTimeStringFromHours(workedHours),
        remainingTime = getRemainingTimeStringFromHours(remainingHours),
        nextCheckInDate = getNextCheckInDateFromHours(remainingHours)

    return (
        <div className={cx(
            'ProgressFooter',
            'text-cell-wrapper',
            isV2 && 'ProgressFooter__v2',
            Boolean(thing) && 'ProgressFooter__illustrator'
        )}>
            {neededHours &&
                <div className="text-cell footer">
                    {Boolean(isV2) && (
                        <div>v2 work</div>
                    )}
                    {!thing && (
                        <div>
                            {parseInt(neededHours)}h - {parseInt(workedHours)}h = {parseInt(remainingHours)}h
                        </div>
                    )}
                    <div>{thing || 'needed time'}: {neededTime}</div>
                    {!thing && (
                        <>
                            <div>worked time: {workedTime}</div>
                            <div>remaining time: {remainingTime}</div>
                            {!isV2 && (
                                <div>finish date: {nextCheckInDate}</div>
                            )}
                        </>
                    )}
                </div>
            }
        </div>
    )
}

export default ProgressFooter
