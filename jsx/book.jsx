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
                ' lyrics-column-' + columnIndex + shownClassName + expandedClassName,
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
                    <div className={'lyrics-text'} onScroll={this.props._handleScroll}>
                        <h1 className="lyrics-header">{playedSongIndex + 1}. {this.props.playedSongTitle}</h1>
                        <div className={'lyrics-verses foldable-area ' + (this.props.isFolded ? 'folded' : 'unfolded')}>
                            {this.props.playedSongLyric.map(function(stanza, stanzaIndex) {
                                return (
                                    <div className={'stanza-' + stanzaIndex} key={stanzaIndex}>
                                        {stanza.map(function(verse, verseIndex) {
                                            return (
                                                <div className={'verse-' + verseIndex} key={verseIndex}>
                                                    {this._italicise(verse)}
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

    _italicise: function(verse) {
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

    render: function() {
        var lyricsColumnsArray = ['left', 'right'],
            lyricsColumnsKeys = this.props.playedSongLyrics ? Object.keys(this.props.playedSongLyrics) : [],
            lyricsColumns = (
                <div className="sticky-lyrics">
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
                                    _handleScroll={this._handleLyricsScroll}
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

    _handleLyricsScroll: function(index) {
        console.log("scrolled");
    }
});
