var Book = React.createClass({
    getInitialState: function() {
        return {
            lyricsAreFolded: false,
            lyricsAreExpanded: false
        };
    },

    componentDidMount: function() {
        /**
         * Keep event handlers for synchronising lyrics columns in DOM,
         * because React's virtual DOM is too slow for this purpose.
         */
        leftLyricsColumn = document.getElementsByClassName('lyrics-column-left')[0];
        rightLyricsColumn = document.getElementsByClassName('lyrics-column-right')[0];

        if (leftLyricsColumn && rightLyricsColumn) {
            leftLyricsColumn.addEventListener('wheel', this._synchroniseLyricsColumns.bind(null, leftLyricsColumn, rightLyricsColumn));

            rightLyricsColumn.addEventListener('wheel', this._synchroniseLyricsColumns.bind(null, rightLyricsColumn, leftLyricsColumn));
        }
    },

    componentWillUnmount: function() {
        if (leftLyricsColumn && rightLyricsColumn) {
            leftLyricsColumn.removeEventListener('wheel', this._synchroniseLyricsColumns.bind(null, leftLyricsColumn, rightLyricsColumn));

            rightLyricsColumn.removeEventListener('wheel', this._synchroniseLyricsColumns.bind(null, rightLyricsColumn, leftLyricsColumn));
        }
    },

    render: function() {
        var lyricsColumnsArray = ['left', 'right'],
            lyricsColumnsKeys = this.props.playedSongLyrics ? Object.keys(this.props.playedSongLyrics) : [],
            lyricsColumns = (
                <div className={'sticky-lyrics' + (this.props.lyricsColumnsAreStuck ? ' stuck' : '')}>
                    <div className="wrapper-width">
                        {lyricsColumnsArray.map(function(key) {
                            var isShown = lyricsColumnsKeys.indexOf(key) !== -1;
                            return (
                                <LyricsColumn
                                    key={key}
                                    isShown={isShown}
                                    isFolded={this.state.lyricsAreFolded}
                                    isExpanded={this.state.lyricsAreExpanded}
                                    playedSongIndex={this.props.playedSongIndex}
                                    playedSongTitle={this.props.playedSongTitle}
                                    playedSongLyric={this.props.playedSongLyrics ? this.props.playedSongLyrics[key] : null}
                                    columnIndex={key}
                                    _toggleFold={this._toggleLyricsFold}
                                    _expandColumns={this._expandLyricsColumns}
                                    _handleAnnotationSelect={this._handleAnnotationSelect}
                                />
                            );
                        }.bind(this))}
                    </div>
                </div>
            );

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
    },

    _toggleLyricsFold: function() {
        this.setState({
            lyricsAreFolded: !this.state.lyricsAreFolded
        });
    },

    _expandLyricsColumns: function() {
        this.setState({
            lyricsAreExpanded: !this.state.lyricsAreExpanded
        });
    },

    _synchroniseLyricsColumns: function(sourceColumn, followerColumn) {
        followerColumn.scrollTop = sourceColumn.scrollTop;
    },

    _handleAnnotationSelect: function(annotationKey) {
        // FIXME: Obviously, this should be implemented.
        console.log("annotation key is", annotationKey);
    }
});
