var LYRICS_COLUMN_NAMES = ['left', 'right'];

var DevLyrics = React.createClass({

    getDefaultProps: function() {
        return {
            playedSongLyrics: '',
            _handleAnnotationSelect: function() {}
        };
    },

    render: function() {

        var lyricsColumnsKeys = this.props.playedSongLyrics ? Object.keys(this.props.playedSongLyrics) : [],
            lyricsColumns = LYRICS_COLUMN_NAMES.filter(function(key) {
                return lyricsColumnsKeys.indexOf(key) !== -1;
            });

        return (
            <div className="dev-lyrics">
                <h2>lyrics</h2>
                <div className="dev-lyrics-columns">
                    {lyricsColumns.map(function(key, index) {
                        return (
                            <DevLyricsColumn
                                key={key}
                                columnIndex={key}
                                playedSongLyric={this.props.playedSongLyrics ? this.props.playedSongLyrics[key] : null}
                                _handleAnnotationSelect={this.props._handleAnnotationSelect}
                            />
                        );
                    }.bind(this))}
                </div>
            </div>
        );
    }
});