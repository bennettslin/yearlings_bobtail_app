import React from 'react'
import ProgressHelper from '../../helpers/progress-helper.js'

/*************
 * CONTAINER *
 *************/

const ProgressFooter = (props) => {

    const { sumTask } = props,

        workedHours = sumTask.workedHours,
        neededHours = sumTask.neededHours,
        remainingHours = neededHours - workedHours,
        remainingTime = ProgressHelper.getRemainingTimeStringFromHours(remainingHours)

    return (
        <ProgressFooterView
            workedHours={workedHours}
            neededHours={neededHours}
            remainingHours={remainingHours}
            remainingTime={remainingTime}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const ProgressFooterView = ({

    // From controller.
    workedHours,
    neededHours,
    remainingHours,
    remainingTime

}) => (

    <div className="text-cell-wrapper">
        {neededHours ?
            <div className={'text-cell footer'}>
                <div>{neededHours} - {workedHours} = {remainingHours}h</div>
                <div>{remainingTime}</div>
            </div> : null
        }
    </div>
)

export default ProgressFooter