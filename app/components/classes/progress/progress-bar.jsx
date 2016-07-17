import React from 'react';

/*************
 * CONTAINER *
 *************/

const ProgressBar = ({
    sumTask,
    maxTotalNeededHours
}) => {
    const filledStyle = {
            width: (sumTask.workedHours / (sumTask.neededHours || 0.01) * 100) + '%'
        },
        totalStyle = {
            width: (sumTask.neededHours / (maxTotalNeededHours || 0.01) * 100) + '%'
        };
    return (
        <ProgressBarView
            filledStyle={filledStyle}
            totalStyle={totalStyle}
        />
    );
};

/********
 * VIEW *
 ********/

const ProgressBarView = ({
    filledStyle,
    totalStyle
}) => {
    return (
        <div className="progress-bar" style={totalStyle}>
            <div className="filled-bar" style={filledStyle}></div>
        </div>
    );
};

export default ProgressBar;