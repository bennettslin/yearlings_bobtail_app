var LyricsColumn = React.createClass({

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
        return TextFormatter.getMappedTextElement(lyric.verse, this.props._handleAnnotationSelect);
    }
});
