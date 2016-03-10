var DevSongButtonsField = React.createClass({

    getDefaultProps: function() {
        return {
            songs: [],
            playedSongIndex: -1,
            handleSongChange: function() {}
        };
    },

    render: function() {
        var songButtons = this.props.songs.map(function(song, index) {
                var className = 'dev-song-button' +
                    (this.props.playedSongIndex === index ? ' played' : '');

                return (
                    <div key={index} className={className}>
                        <a onClick={this.props.handleSongChange.bind(null, index)}>
                            {index + 1}. {song.title}
                        </a>
                    </div>
                );
            }.bind(this));

        return (
            <div className="dev-song-buttons">
                {songButtons}
            </div>
        );
    }
});