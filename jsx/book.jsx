// var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
// var ReactTransitionGroup = React.addons.TransitionGroup;

var LyricsColumn = React.createClass({

    // componentWillAppear: function(callback) {
    //     console.log("hi");
    // },
    // componentDidAppear: function() {
    //     console.log("hi2");
    // },
    // componentWillEnter: function(callback) {
    //     console.log("hi3");
    // },
    // componentDidEnter: function() {
    //     console.log("hi4");
    // },
    // componentWillLeave: function(callback) {
    //     console.log("hi5");
    // },
    // componentDidLeave: function() {
    //     console.log("hi6");
    // },

    render: function() {
        var playedSongIndex = this.props.playedSongIndex,
            columnIndex = this.props.columnIndex,
            shownClassName = this.props.isShown ? '' : ' unshown',
            expandedClassName = this.props.isExpanded ? ' expanded' : '',
            columnClassName = 'lyrics-song-' + playedSongIndex +
                ' lyrics-column-' + columnIndex +
                shownClassName + expandedClassName,
            // columnKeyName = 'lyrics-column-' + playedSongIndex + '-' + columnIndex,
            toggleFoldButton,
            lyricsTextArea;

            if (this.props.isShown) {
                var expandColumnsButton = (
                        <button className="expand-columns-button"
                            onClick={this.props._expandColumns}
                        >
                            expand
                        </button>
                    );

                toggleFoldButton = (
                    <button className="toggle-fold-button"
                        onClick={this.props._toggleFold}
                    >
                        fold
                    </button>
                );

                lyricsTextArea = (
                    <div className={'lyrics-text'}>
                        <h1 className="lyrics-header">{playedSongIndex + 1}. {this.props.playedSongTitle}</h1>
                        <div className={'lyrics-verses foldable-area ' + (this.props.isFolded ? 'folded' : 'unfolded')}>
                            {this.props.playedSongLyric.map(function(stanza, stanzaIndex) {
                                return (
                                    <div className={'stanza-' + stanzaIndex} key={stanzaIndex}>
                                        {stanza.map(function(lyric, verseIndex) {
                                            return (
                                                <div className={'verse-' + verseIndex} key={verseIndex}>
                                                    {this._parseLyric(lyric)}
                                                </div>
                                            )
                                        }.bind(this))}
                                    </div>
                                )
                            }.bind(this))}
                        </div>
                        {expandColumnsButton}
                    </div>
                );
            }

        return (
            <div
                className={columnClassName}
            >
                {toggleFoldButton}
                {lyricsTextArea}
            </div>
        );
    },

    _parseLyric: function(lyric) {
        var annotation = lyric.annotation;

        return this._getVerseMarkup(lyric.verse);
    },

    _getVerseMarkup: function(verse) {
        /**
         * this method assumes that each verse line that's italicised
         * will begin and end with <em> tags
         */
        if (verse.indexOf('<em>') !== -1) {
            verse = verse.replace('<em>', '').replace('</em>', '');
            return <span><em>{verse}</em></span>
        } else {
            return <span>{verse}</span>
        }
    }
});

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
    }
});
