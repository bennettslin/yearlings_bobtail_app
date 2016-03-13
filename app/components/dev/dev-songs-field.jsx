import React from 'react';
import DevSongRow from './dev-song-row.jsx';

const ProgressManager = require('../helpers/progress-manager.js');

export default class DevSongsField extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            maxTotalNeededHours: 0
        };
    }

    componentWillMount() {
        const maxTotalNeededHours = ProgressManager.getMaxTotalNeededHoursFromSongs(this.props.songs);

        this.setState({
            maxTotalNeededHours
        });
    }

    render() {
        var songs = this.props.songs,
            songsHeader = (
                <DevSongRow key="header" isHeader={true} />
            ),
            songRows = songs.map(function(song, songIndex) {
                var isSelected = this.props.playedSongIndex === songIndex,
                    sumTask = ProgressManager.calculateSumTask(song.tasks);

                return (
                    <DevSongRow
                        key={songIndex}
                        songIndex={songIndex}
                        songTitle={song.title}
                        sumTask={sumTask}
                        maxTotalNeededHours={this.state.maxTotalNeededHours}
                        isSelected={isSelected}
                        handleSongChange={this.props.handleSongChange}
                    />
                );
            }, this),
            sumAllTasks = ProgressManager.calculateSumAllTasks(songs),
            songsFooter = (
                <DevSongRow key="footer" isFooter={true} sumTask={sumAllTasks} />
            );

        return (
            <div className="dev-songs-field">
                {songsHeader}
                {songRows}
                {songsFooter}
            </div>
        );
    }
}

DevSongsField = {
    songs: [],
    playedSongIndex: -1,
    handleSongChange() {}
}