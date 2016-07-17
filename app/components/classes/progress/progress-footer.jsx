import React from 'react';
import ProgressHelper from '../../helpers/progress-helper.js';

/*************
 * CONTAINER *
 *************/

/********
 * VIEW *
 ********/

const ProgressFooter = ({
    sumTask = 0
}) => {
    const workedHours = sumTask.workedHours,
        neededHours = sumTask.neededHours,
        remainingHours = neededHours - workedHours,
        remainingTimeString = ProgressHelper.getRemainingTimeStringFromHours(remainingHours);

    return (
        <div className="text-cell-wrapper">
            {neededHours ?
                <div className={'text-cell footer'}>
                    <div>{neededHours} - {workedHours} = {remainingHours}h</div>
                    <div>{remainingTimeString}</div>
                </div> : null
            }
        </div>
    );
};

export default ProgressFooter;