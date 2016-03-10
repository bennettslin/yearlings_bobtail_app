var LYRICS_COLUMN_NAMES = ['left', 'right'];

var DevLyricsField = React.createClass({

    getDefaultProps: function() {
        return {
            playedSongLyrics: '',
            handleAnnotationSelect: function() {}
        };
    },

    render: function() {

        var lyricsColumnKeys = Object.keys(this.props.playedSongLyrics),
            filteredLyricsColumnKeys = LYRICS_COLUMN_NAMES.filter(function(key) {
                return lyricsColumnKeys.indexOf(key) !== -1;
            }),
            isDoublespeaker = this.props.playedSongLyrics.left && this.props.playedSongLyrics.right;
            lyricsColumns = filteredLyricsColumnKeys.map(function(key, index) {
                return (
                    <DevLyricsColumn
                        key={key}
                        columnIndex={key}
                        columnTitle={isDoublespeaker ? key + ' speaker' : null}
                        playedSongLyrics={this.props.playedSongLyrics[key]}
                        handleAnnotationSelect={this.props.handleAnnotationSelect}
                    />
                );
            }.bind(this));

        return (
            <div className="dev-lyrics">
                <h2>lyrics</h2>
                <div className="dev-lyrics-columns">
                    {lyricsColumns}
                </div>
            </div>
        );
    }
});