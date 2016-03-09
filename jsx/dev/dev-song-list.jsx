var DevSongList = React.createClass({

    getDefaultProps: function() {
        return {
            songs: [],
            playedSongIndex: -1,
            _changeSong: function() {}
        };
    },

    render: function() {
        var songPoints = this.props.songs.map(function(song, index) {
                var className = 'dev-song-point' +
                    (this.props.playedSongIndex === index ? ' played' : '');

                return (
                    <div key={index} className={className}>
                        <a onClick={this.props._changeSong.bind(null, index)}>
                            {index + 1}. {song.title}
                        </a>
                    </div>
                );
            }.bind(this));

        return (
            <div className="dev-song-list">
                <div className="dev-song-points">
                    {songPoints}
                </div>
            </div>
        );
    }
});