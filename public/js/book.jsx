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

var Book = React.createClass({
    render: function() {
        var lyricsColumns;

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
            <div className="book">
                {lyricsColumns}
                {this.props.pageStartingIndices.map(function(startingIndex, index) {
                    var pageSongs;
                    // select the songs to be shown on this page
                    if (index === this.props.pageStartingIndices.length - 1) {
                        pageSongs = this.props.songs.slice(startingIndex);
                    } else {
                        var nextPageStartingIndex = this.props.pageStartingIndices[index + 1];
                        pageSongs = this.props.songs.slice(startingIndex, nextPageStartingIndex);
                    }

                    return (
                        <Page
                            key={index}
                            songs={pageSongs}
                            startingIndex={startingIndex}
                            pageIndex={index}
                            viewedPageIndex={this.props.viewedPageIndex}
                            playedSongIndex={this.props.playedSongIndex}
                            playedSongTitle={this.props.playedSongTitle}
                            playedSongLyrics={this.props.playedSongLyrics}
                            _changePage={this.props._changePage}
                            _changeSong={this.props._changeSong}
                        />
                    );
                }.bind(this))}
            </div>
        );
    }
});