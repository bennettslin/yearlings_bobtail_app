import React from 'react'
import ProgressHelper from '../../../helpers/progressHelper'

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
    <div className="ProgressBar" style={totalStyle}>
        <div className="ProgressBar__filled" style={filledStyle} />
    </div>
)

export default ProgressBar
