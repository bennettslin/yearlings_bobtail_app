import React from 'react';

const defaultProps = {
    sumTask: {
        workedHours: 0,
        neededHours: 0
    },
    maxTotalNeededHours: 0
};

class ProgressBar extends React.Component {

    render() {
        const sumTask = this.props.sumTask,
            filledStyle = {
                width: (sumTask.workedHours / (sumTask.neededHours || 0.01) * 100) + '%'
            },

            totalStyle = {
                width: (sumTask.neededHours / (this.props.maxTotalNeededHours || 0.01) * 100) + '%'
            };

        return (
            <div className="total-progress-bar" style={totalStyle}>
                <div className="filled-progress-bar" style={filledStyle}></div>
            </div>
        );
    }
}

ProgressBar.defaultProps = defaultProps;
export default ProgressBar;