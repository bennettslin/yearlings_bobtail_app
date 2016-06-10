import React from 'react';
import ProgressHelper from '../helpers/progress-helper.js';

module.exports = {

    getProgressFooterContent(sumTask = 0, fontSize = 1) {
        const workedHours = sumTask.workedHours,
            neededHours = sumTask.neededHours,
            remainingHours = neededHours - workedHours,
            remainingTimeString = ProgressHelper.getRemainingTimeStringFromHours(remainingHours);

        return (
            <div className="text-cell-wrapper">
                {neededHours ?
                    <div className={'text-cell footer font-size-' + fontSize}>
                        <div>{neededHours} - {workedHours} = {remainingHours}h</div>
                        <div>{remainingTimeString}</div>
                    </div> : null
                }
            </div>
        );
    }
}