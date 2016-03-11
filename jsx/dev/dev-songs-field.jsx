var DevSongsField = React.createClass({

    _maxTotalNeededHours: 0,

    getDefaultProps: function() {
        return {
            songs: [],
            playedSongIndex: -1,
            handleSongChange: function() {}
        };
    },

    componentWillMount: function() {
        this._maxTotalNeededHours = ProgressManager.getMaxTotalNeededHoursFromSongs(this.props.songs);
    },

    render: function() {
        var songs = this.props.songs,
            songRows = songs.map(function(song, songIndex) {
                var isSelected = this.props.playedSongIndex === songIndex,
                    sumTask = ProgressManager.calculateSumTask(song.tasks);

                return (
                    <DevSongRow
                        key={songIndex}
                        songIndex={songIndex}
                        songTitle={song.title}
                        sumTask={sumTask}
                        maxTotalNeededHours={this._maxTotalNeededHours}
                        isSelected={isSelected}
                        handleSongChange={this.props.handleSongChange}
                    />
                );
            }, this),
            sumAllTasks = ProgressManager.calculateSumAllTasks(songs);

        // Add headers.
        songRows.unshift(
            <div key="header" className="dev-song-row">
                <div className="dev-song-container">
                    <h3 className="dev-song-button-header">Song</h3>
                    <h3 className="dev-song-progress-header">Progress</h3>
                </div>
            </div>
        );

        // Add sum of progress in footer.
        songRows.push(
            <div key="footer" className="dev-song-row">
                <div className="dev-song-container">
                    <div className="dev-song-button-footer"></div>
                    <h3 className="dev-song-progress-footer">{sumAllTasks.workedHours}/{sumAllTasks.neededHours}</h3>
                </div>
            </div>
        );

        return (
            <div className="dev-songs-field">
                {songRows}
            </div>
        );
    }
});