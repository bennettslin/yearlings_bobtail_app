import React from 'react';

/*************
 * CONTAINER *
 *************/

const ProgressBar = (props) => (
    <ProgressBarView {...props} />
);

/********
 * VIEW *
 ********/

const ProgressBarView = ({
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
        <div className="progress-bar" style={totalStyle}>
            <div className="filled-bar" style={filledStyle}></div>
        </div>
    );
};

export default ProgressBar;