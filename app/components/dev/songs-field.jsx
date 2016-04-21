import React from 'react';
import SongRow from './song-row.jsx';
import ProgressHelper from '../helpers/progress-helper.jsx';

const defaultProps = {
    songs: [],
    playedSongIndex: 0,
    handleSongChange() {}
};

class SongsField extends React.Component {

    componentWillMount() {
        const maxTotalNeededHours = ProgressHelper.getMaxTotalNeededHoursFromSongs(this.props.songs);

        this.setState({
            maxTotalNeededHours
        });
    }

    render() {
        var songs = this.props.songs,
            songsHeader = (
                <SongRow key="header" isHeader={true} />
            ),
            songRows = songs.map(function(song, index) {
                var songIndex = index + 1,
                    isSelected = this.props.playedSongIndex === songIndex,
                    sumTask = ProgressHelper.calculateSumTask(song.tasks);

                return (
                    <SongRow
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
            sumAllTasks = ProgressHelper.calculateSumAllTasks(songs),
            songsFooter = (
                <SongRow key="footer" isFooter={true} sumTask={sumAllTasks} />
            );

        return (
            <div className="songs-field">
                {songsHeader}
                {songRows}
                {songsFooter}
            </div>
        );
    }
}

SongsField.defaultProps = defaultProps;
export default SongsField;