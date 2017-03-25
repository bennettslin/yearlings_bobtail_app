import React from 'react'
import ProgressHelper from '../../../helpers/progress-helper'

/*************
 * CONTAINER *
 *************/

const ProgressFooter = ({ sumTask }) => {

    const neededHours = sumTask.neededHours,
        workedHours = sumTask.workedHours,
        remainingHours = neededHours - workedHours,
        neededTime = ProgressHelper.getRemainingTimeStringFromHours(neededHours),
        workedTime = ProgressHelper.getRemainingTimeStringFromHours(workedHours),
        remainingTime = ProgressHelper.getRemainingTimeStringFromHours(remainingHours)

    return (
        <ProgressFooterView
            neededHours={neededHours}
            workedHours={workedHours}
            remainingHours={remainingHours}
            neededTime={neededTime}
            workedTime={workedTime}
            remainingTime={remainingTime}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const ProgressFooterView = ({

    // From controller.
    neededHours,
    workedHours,
    remainingHours,
    neededTime,
    workedTime,
    remainingTime

}) => (
    <div className="text-cell-wrapper">
        {neededHours &&
            <div className="text-cell footer">
                <div>{neededHours} - {workedHours} = {remainingHours}h</div>
                <div>needed time: {neededTime}</div>
                <div>worked time: {workedTime}</div>
                <div>remaining time: {remainingTime}</div>
            </div>
        }
    </div>
)

export default ProgressFooter
