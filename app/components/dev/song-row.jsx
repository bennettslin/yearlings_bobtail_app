import React from 'react';
import ProgressBar from './progress-bar.jsx';

const ProgressHelpers = require('../helpers/progress-helpers.js');

const defaultProps = {
    songIndex: -1,
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
                <a className="text-cell button" onClick={this.props.handleSongChange.bind(null, this.props.songIndex)}>
                    {this.props.songIndex + 1}. {this.props.songTitle}
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
                <h3 className="text-cell button-label">Song</h3>
                <h3 className="text-cell progress">Progress</h3>
            </div>
        );
    }

    _getFooterContent(sumTask) {
        var workedHours = sumTask.workedHours,
            neededHours = sumTask.neededHours,
            remainingHours = neededHours - workedHours,
            remainingTime = ProgressHelpers.getRemainingTimeFromHours(remainingHours);

        return (
            <div className="song-text-wrapper footer">
                <h3 className="text-cell progress">
                    <div>{neededHours} - {workedHours} = {remainingHours}h</div>
                    <div>{remainingTime.weeks}w, {remainingTime.days}d</div>
                </h3>

            </div>
        );
    }

    render() {
        var sumTask = this.props.sumTask,
            className = 'song-row' + (this.props.isSelected ? ' played' : ''),
            progressBar = (!this.props.isHeader && !this.props.isFooter ?
                <ProgressBar
                    sumTask={sumTask}
                    maxTotalNeededHours={this.props.maxTotalNeededHours}
                /> : null
            ),
            wrappedTextContent;

        if (this.props.isHeader) {
            wrappedTextContent = this._getHeaderContent();

        } else if (this.props.isFooter) {
            wrappedTextContent = this._getFooterContent(sumTask);

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