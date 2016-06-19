import React from 'react';
import SongRow from './song-row.jsx';
import ProgressHelper from '../../helpers/progress-helper.js';

const defaultProps = {
    songs: [],

    // Includes album tasks.
    allTasks: [],

    selectedSongIndex: 0,
    handleSongChange() {}
};

class SongsSection extends React.Component {

    componentWillMount() {
        const maxTotalNeededHours = ProgressHelper.getMaxTotalNeededHoursFromSongs(this.props.songs);

        this.setState({
            maxTotalNeededHours
        });
    }

    render() {
        const songs = this.props.songs,
            songsHeader = (
                <SongRow key="header" isHeader={true} />
            ),
            songRows = songs.map((song, index) => {
                const songIndex = index + 1,
                    isSelected = this.props.selectedSongIndex === songIndex,
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
            }),
            sumAllTasks = ProgressHelper.calculateSumAllTasks(this.props.allTasks),
            songsFooter = (
                <SongRow key="footer" isFooter={true} sumTask={sumAllTasks} />
            );

        return (
            <div className="section songs-section">
                {songsHeader}
                {songRows}
                {songsFooter}
            </div>
        );
    }
}

SongsSection.defaultProps = defaultProps;
export default SongsSection;