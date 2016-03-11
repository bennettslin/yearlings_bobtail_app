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
                        maxTotalNeededHours={this._maxTotalNeededHours}
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
});