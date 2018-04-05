import React from 'react'
import ProgressHelper from '../../../helpers/progress-helper'

/*************
 * CONTAINER *
 *************/

const ProgressBar = ({ sumTask, maxTotalNeededHours }) => {

    const { workedHours,
            neededHours } = sumTask,
        filledStyle = { width: ProgressHelper.getBarWidthStyle(workedHours, neededHours) },
        totalStyle = { width: ProgressHelper.getBarWidthStyle(neededHours, maxTotalNeededHours) }

    return (
        <ProgressBarView
            filledStyle={filledStyle}
            totalStyle={totalStyle}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const ProgressBarView = ({

    // From controller.
    filledStyle,
    totalStyle

}) => (
    <div className="progress-bar" style={totalStyle}>
        <div className="filled-bar" style={filledStyle} />
    </div>
)

export default ProgressBar
