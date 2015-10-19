var SongPoint = React.createClass({
    render: function() {
        var songIndex = this.props.songIndex;

        return (
            <li className={'song-point-' + songIndex}>
                <button onClick={this.props._changeSong.bind(null, songIndex)} data-song-id={songIndex}>
                    {songIndex + 1}. {this.props.songTitle}
                </button>
            </li>
        );
    }
});

var LyricsColumn = React.createClass({
    render: function() {
        var playedSongIndex = this.props.playedSongIndex,
            columnIndex = this.props.columnIndex;

        return (
            <div className={'lyrics-song-' + playedSongIndex + ' lyrics-column-' + columnIndex}>
                <h1>{playedSongIndex + 1}. {this.props.playedSongTitle}</h1>
                <span>{this.props.playedSongLyric}</span>
            </div>
        );
    }
});

var BookPage = React.createClass({
    render: function() {

        // FIXME: To be modular, this should not know page number
        var pageButtonLabels = this.props.viewedPageIndex === 0 ?
                ['skip to Book II', 'continue to Book II'] :
                ['back to Book I', 'return to Book I'],

            pageButtons = pageButtonLabels.map(function(label) {
                return (
                    <div className="page-change-button">
                        <button onClick={this.props._changePage}>
                            {label}
                        </button>
                    </div>
                );
            }.bind(this)),

            songPoints = this.props.songs.map(function(song, index) {
                var songIndex = this.props.viewedPageStartingIndex + index;
                return (
                    <SongPoint
                        key={songIndex}
                        songIndex={songIndex}
                        songTitle={song.title}
                        _changeSong={this.props._changeSong}
                    />
                );
            }.bind(this)),
            lyricsColumns;

            if (this.props.playedSongLyrics) {
                lyricsColumns = (
                    <div>
                        {this.props.playedSongLyrics.map(function(playedSongLyric, columnIndex) {
                            return (
                                <LyricsColumn
                                    key={columnIndex}
                                    playedSongIndex={this.props.playedSongIndex}
                                    playedSongTitle={this.props.playedSongTitle}
                                    playedSongLyric={playedSongLyric}
                                    columnIndex={columnIndex}
                                />
                            );
                        }.bind(this))}
                    </div>
                );
            }

        return (
            <div className="book-page">
                {pageButtons[0]}
                <ul className="song-path">
                    {songPoints}
                </ul>
                {lyricsColumns}
                {pageButtons[1]}
            </div>
        );
    }
});
