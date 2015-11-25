var Book = React.createClass({
    getInitialState: function() {
        return {
            lyricsAreFolded: this.props.device === 'mobile',
            lyricsAreExpanded: false,
            pageScrollingDisabled: false
        };
    },

    componentDidMount: function() {
        /**
         * Keep event handlers for synchronising lyrics columns in DOM,
         * because React's virtual DOM is too slow for this purpose.
         */
        leftLyricsColumn = document.getElementsByClassName('lyrics-column-left')[0];
        rightLyricsColumn = document.getElementsByClassName('lyrics-column-right')[0];

        // FIXME: These event listeners aren't needed if lyrics columns are doublespeaker...
        if (leftLyricsColumn && rightLyricsColumn) {
            leftLyricsColumn.addEventListener('wheel', this._synchroniseLyricsColumns.bind(this, leftLyricsColumn, rightLyricsColumn), true);
            rightLyricsColumn.addEventListener('wheel', this._synchroniseLyricsColumns.bind(this, rightLyricsColumn, leftLyricsColumn), true);
        }
    },

    componentWillReceiveProps: function(nextProps) {
        /**
         * Lyrics columns are initially folded by default on mobile,
         * but initially unfolded on larger screens.
         */
        if (this.props.device !== nextProps.device) {
            this.setState({
                lyricsAreFolded: nextProps.device === 'mobile'
            });
        }
    },

    componentWillUnmount: function() {
        if (leftLyricsColumn && rightLyricsColumn) {
            leftLyricsColumn.removeEventListener('wheel', this._synchroniseLyricsColumns.bind(this, leftLyricsColumn, rightLyricsColumn));
            rightLyricsColumn.removeEventListener('wheel', this._synchroniseLyricsColumns.bind(this, rightLyricsColumn, leftLyricsColumn));
        }
    },

    render: function() {
        var lyricsColumnsArray = ['left', 'right'],
            lyricsColumnsKeys = this.props.playedSongLyrics ? Object.keys(this.props.playedSongLyrics) : [],
            lyricsColumns = (
                <div className={'sticky-lyrics' + (this.props.lyricsColumnsAreStuck ? ' stuck' : '')}>
                    <div className="wrapper-width">
                        {lyricsColumnsArray.map(function(key, index) {
                            var isShown = lyricsColumnsKeys.indexOf(key) !== -1,
                                isDoublespeaker = isShown && lyricsColumnsKeys.indexOf(lyricsColumnsArray[(index + 1) % 2]) !== -1;
                            return (
                                <LyricsColumn
                                    key={key}
                                    isShown={isShown}
                                    isDoublespeaker={isDoublespeaker}
                                    isFolded={this.state.lyricsAreFolded}
                                    isExpanded={this.state.lyricsAreExpanded}
                                    playedSongIndex={this.props.playedSongIndex}
                                    playedSongTitle={this.props.playedSongTitle}
                                    playedSongLyric={this.props.playedSongLyrics ? this.props.playedSongLyrics[key] : null}
                                    columnIndex={key}
                                    device={this.props.device}
                                    _toggleFold={this._toggleLyricsFold}
                                    _expandColumns={this._expandLyricsColumns}
                                    _disablePageScroll={this._disablePageScroll}
                                    _handleAnnotationSelect={this._handleAnnotationSelect}
                                />
                            );
                        }.bind(this))}
                    </div>
                </div>
            );

        return (
            <div className={'book' + (this.state.pageScrollingDisabled ? ' no-scroll' : '')}>
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
                            scrollingDisabled={this.state.pageScrollingDisabled}
                            _changePage={this.props._changePage}
                            _changeSong={this.props._changeSong}
                        />
                    );
                }.bind(this))}
            </div>
        );
    },

    _toggleLyricsFold: function() {
        // Page should not scroll when lyrics are unfolded on phone.
        if (this.props.device === 'mobile') {
            this._disablePageScroll(!this.state.pageScrollingDisabled);
        }

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

    _disablePageScroll: function(scrollingDisabled) {
        console.log("disabling page scroll", scrollingDisabled);
        this.setState({
            pageScrollingDisabled: scrollingDisabled
        });
    },

    _handleAnnotationSelect: function(annotationKey) {
        // FIXME: Obviously, this should be implemented.
        console.log("annotation key is", annotationKey);
    }
});
