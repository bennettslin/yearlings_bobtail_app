import React from 'react';
import ProgressHelper from '../../helpers/progress-helper.js';

/*************
 * CONTAINER *
 *************/

const ProgressFooter = ({
    sumTask = 0
}) => {
    const workedHours = sumTask.workedHours,
        neededHours = sumTask.neededHours,
        remainingHours = neededHours - workedHours,
        remainingTimeString = ProgressHelper.getRemainingTimeStringFromHours(remainingHours);
    return (
        <ProgressFooterView
            workedHours={workedHours}
            neededHours={neededHours}
            remainingHours={remainingHours}
            remainingTimeString={remainingTimeString}
        />
    );
};

/****************
 * PRESENTATION *
 ****************/

const ProgressFooterView = ({
    workedHours,
    neededHours,
    remainingHours,
    remainingTimeString
}) => (
    <div className="text-cell-wrapper">
        {neededHours ?
            <div className={'text-cell footer'}>
                <div>{neededHours} - {workedHours} = {remainingHours}h</div>
                <div>{remainingTimeString}</div>
            </div> : null
        }
    </div>
);

export default ProgressFooter;