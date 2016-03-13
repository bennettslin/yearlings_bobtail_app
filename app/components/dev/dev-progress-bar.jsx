import React from 'react';

export default class DevProgressBar extends React.Component {

    // getDefaultProps() {
    //     return {
    //         sumTask: {
    //             workedHours: 0,
    //             neededHours: 0
    //         },
    //         maxTotalNeededHours: 0
    //     };
    // };

    constructor(props) {
        super(props);
    }

    render() {
        var sumTask = this.props.sumTask,
            filledStyle,
            totalStyle;

        filledStyle = {
            width: (sumTask.workedHours / (sumTask.neededHours || 0.01) * 100) + '%'
        };

        totalStyle = {
            width: (sumTask.neededHours / (this.props.maxTotalNeededHours || 0.01) * 100) + '%'
        }

        return (
            <div className="total-progress-bar" style={totalStyle}>
                <div className="filled-progress-bar" style={filledStyle}></div>
            </div>
        );
    }
}