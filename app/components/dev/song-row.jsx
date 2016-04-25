import React from 'react';
import ProgressBar from './progress-bar.jsx';
import ProgressHelper from '../helpers/progress-helper.jsx';

const defaultProps = {
    songIndex: 0,
    songTitle: '',
    sumTask: {
        workedHours: 0,
        neededHours: 0
    },
    maxTotalNeededHours: 0,
    isHeader: false,
    isFooter: false,
    isSelected: false,
    handleSongChange() {}
};

class SongRow extends React.Component {

    _getSongContent(sumTask) {
        const props = this.props;

        return (
            <div className="text-cell-wrapper">
                <a className="text-cell text" onClick={props.handleSongChange.bind(null, props.songIndex, 'selected', true)}>
                    {props.songIndex + '. ' + props.songTitle}
                </a>
                <span className="text-cell figure">
                    {sumTask.workedHours}/{sumTask.neededHours}h
                </span>
            </div>
        );
    }

    _getHeaderContent() {
        return (
            <div className="text-cell-wrapper">
                <h3 className="text-cell text">song</h3>
                <h3 className="text-cell figure">progress</h3>
            </div>
        );
    }

    render() {
        const props = this.props,
            sumTask = props.sumTask,
            className = 'row primary-row' + (props.isSelected ? ' played' : ''),
            progressBar = (!props.isHeader && !props.isFooter ?
                <ProgressBar
                    sumTask={sumTask}
                    maxTotalNeededHours={props.maxTotalNeededHours}
                /> : null
            );

        let wrappedTextContent;

        if (props.isHeader) {
            wrappedTextContent = this._getHeaderContent();

        } else if (props.isFooter) {
            wrappedTextContent = ProgressHelper.getProgressFooterContent(sumTask, 1);

        } else {
            wrappedTextContent = this._getSongContent(sumTask);
        }

        return (
            <div className={className}>
                {progressBar}
                {wrappedTextContent}
            </div>
        );
    }
}

SongRow.defaultProps = defaultProps;
export default SongRow;