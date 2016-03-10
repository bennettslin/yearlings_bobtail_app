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
        this._maxTotalNeededHours = ProgressManager.getMaxTotalNeededHours(this.props.songs);
    },

    render: function() {
        var songRows = this.props.songs.map(function(song, songIndex) {
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
            }.bind(this));

        // Add headers.
        songRows.unshift(
            <div key="header" className="dev-song-row">
                <div className="dev-song-container">
                    <h3 className="dev-song-button-header">Song</h3>
                    <h3 className="dev-song-progress-header">Progress</h3>
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