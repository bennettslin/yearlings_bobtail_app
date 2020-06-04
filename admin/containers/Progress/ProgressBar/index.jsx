import React from 'react'
import PropTypes from 'prop-types'
import { getBarWidthStyle } from './helper'

const ProgressBar = ({
    sumTask,
    maxTotalNeededHours

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

ProgressBar.propTypes = {
    sumTask: PropTypes.shape({
        workedHours: PropTypes.number.isRequired,
        neededHours: PropTypes.number.isRequired
    }),
    maxTotalNeededHours: PropTypes.number.isRequired
}

export default ProgressBar
