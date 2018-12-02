import React from 'react'
import cx from 'classnames'

import ProgressHelper from '../progressHelper'

/*************
 * CONTAINER *
 *************/

const ProgressFooter = ({ sumTask }) => {

    const neededHours = sumTask.neededHours,
        workedHours = sumTask.workedHours,
        remainingHours = neededHours - workedHours,
        neededTime = ProgressHelper.getRemainingTimeStringFromHours(neededHours),
        workedTime = ProgressHelper.getRemainingTimeStringFromHours(workedHours),
        remainingTime = ProgressHelper.getRemainingTimeStringFromHours(remainingHours),
        nextCheckInDate = ProgressHelper.getNextCheckInDateFromHours(remainingHours)

    return (
        <ProgressFooterView
            neededHours={neededHours}
            // workedHours={workedHours}
            // remainingHours={remainingHours}
            neededTime={neededTime}
            workedTime={workedTime}
            remainingTime={remainingTime}
            nextCheckInDate={nextCheckInDate}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const ProgressFooterView = ({

    // From controller.
    neededHours,
    // workedHours,
    // remainingHours,
    neededTime,
    workedTime,
    remainingTime,
    nextCheckInDate

}) => (
    <div className={cx(
        'ProgressFooter',
        'text-cell-wrapper'
    )}>
        {neededHours &&
            <div className="text-cell footer">
                {/* <div>{parseInt(neededHours)} - {parseInt(workedHours)} = {parseInt(remainingHours)}h</div> */}
                <div>needed time: {neededTime}</div>
                <div>worked time: {workedTime}</div>
                <div>remaining time: {remainingTime}</div>
                <div>next check-in: {nextCheckInDate}</div>
            </div>
        }
    </div>
)

export default ProgressFooter
