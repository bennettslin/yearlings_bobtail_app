import React, { Component } from 'react';

/*************
 * CONTAINER *
 *************/

const ProgressBar = (props) => {

    const { sumTask,
            maxTotalNeededHours } = props,

        filledStyle = {
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
);

export default ProgressBar;