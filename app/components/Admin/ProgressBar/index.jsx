import React from 'react'
import { getBarWidthStyle } from './helper'

const ProgressBar = ({
    sumTask, maxTotalNeededHours
}) => {

    const {
        workedHours,
        neededHours
    } = sumTask

    return (
        <div
            {...{
                className: 'ProgressBar',
                style: {
                    width: getBarWidthStyle(neededHours, maxTotalNeededHours)
                }
            }}
        >
            <div
                {...{
                    className: 'ProgressBar__filled',
                    style: {
                        width: getBarWidthStyle(workedHours, neededHours)
                    }
                }}
            />
        </div>
    )
}

export default ProgressBar
