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
            doublespeakerClassName = this.props.isDoublespeaker ? ' doublespeaker' : '',
            expandedClassName = this.props.isExpanded ? ' expanded' : '',
            foldedClassName = this.props.isFolded ? ' folded' : '',
            columnClassName = 'lyrics-song-' + playedSongIndex +
                ' lyrics-column-' + columnIndex +
                shownClassName + doublespeakerClassName +
                expandedClassName + foldedClassName,
            // columnKeyName = 'lyrics-column-' + playedSongIndex + '-' + columnIndex,
            expandColumnsButton,
            toggleFoldButton,
            lyricsTextArea;

            if (this.props.isShown) {
                expandColumnsButton = (
                    <button className="expand-columns-button"
                        onClick={this.props._expandColumns}
                    >
                        {this.props.isExpanded ? 'collapse' : 'expand'}
                    </button>
                );

                toggleFoldButton = (
                    <button className="toggle-fold-button"
                        onClick={this.props._toggleFold}
                    >
                        {this.props.isFolded ? 'unfold' : 'fold'}
                    </button>
                );

                lyricsTextArea = (
                    <div className={'lyrics-text'}>
                        <h1 className="lyrics-header">{playedSongIndex + 1}. {this.props.playedSongTitle}</h1>
                        <div className={'lyrics-verses foldable-area'}>
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
                    </div>
                );
            }

        return (
            <div
                className={columnClassName}
            >
                {expandColumnsButton}
                {toggleFoldButton}
                {lyricsTextArea}
            </div>
        );
    },

    _parseLyric: function(lyric) {
        var annotation = lyric.annotation;
        return this._getMappedVerseElement(lyric.verse);
    },

    /**
     * Returns either a single element or a mapped element wrapped in a span tag
     */
    _getMappedVerseElement: function(verse, index, nestedIndex) {
        index = index || 0;
        nestedIndex = nestedIndex || 0;

        if (Array.isArray(verse)) {
            return (
                <span key={nestedIndex + '-' + index}>
                    {verse.map(function(verseElement, index) {
                        return this._getMappedVerseElement(verseElement, index, nestedIndex + 1);
                    }.bind(this))}
                </span>
            );

        } else if (typeof verse === 'string' || typeof verse === 'object') {
            return this._getTaggedVerseElement(verse, index, nestedIndex);
        }
    },

    /**
     * Returns a single element wrapped in a span, italic, or anchor tag
     */
    _getTaggedVerseElement: function(verse, index, nestedIndex) {
        if (typeof verse === 'string') {
            return <span key={nestedIndex + '-' + index}>{verse}</span>;

        } else if (typeof verse === 'object') {
            if (verse.italic) {
                return <em key={nestedIndex + '-' + index}>{this._getMappedVerseElement(verse.italic, index, nestedIndex)}</em>;

            } else if (verse.anchor) {
                return (
                    <a
                        key={nestedIndex + '-' + index}
                        onClick={this.props._handleAnnotationSelect.bind(null, '#' + verse.annotationKey)}
                    >
                        {this._getMappedVerseElement(verse.anchor, index, nestedIndex)}
                    </a>
                );

            }
        }
    }
});
