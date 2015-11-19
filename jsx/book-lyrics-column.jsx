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
