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
        return (
            <div className="song-text-wrapper">
                <a className="text-cell button" onClick={this.props.handleSongChange.bind(null, this.props.songIndex, 'selected', true)}>
                    {this.props.songIndex}. {this.props.songTitle}
                </a>
                <span className="text-cell progress">
                    {sumTask.workedHours}/{sumTask.neededHours}h
                </span>
            </div>
        );
    }

    _getHeaderContent() {
        return (
            <div className="song-text-wrapper">
                <h3 className="text-cell button-label">song</h3>
                <h3 className="text-cell progress">progress</h3>
            </div>
        );
    }

    render() {
        const props = this.props,
            sumTask = props.sumTask,
            className = 'song-row' + (props.isSelected ? ' played' : ''),
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