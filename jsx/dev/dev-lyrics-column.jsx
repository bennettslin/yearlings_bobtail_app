var DevLyricsColumn = React.createClass({

    getDefaultProps: function() {
        return {
            playedSongLyrics: '',
            _handleAnnotationSelect: function() {}
        };
    },

    render: function() {
        var columnIndex = this.props.columnIndex,
            columnClassName = 'dev-lyrics-column ' + columnIndex,
            lyricsTextArea = (
                <div className={'lyrics-text'}>
                    <div className={'lyrics-verses'}>
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

        return (
            <div
                className={columnClassName}
            >
                {lyricsTextArea}
            </div>
        );
    },

    _parseLyric: function(lyric) {
        var annotation = lyric.annotation;
        return TextFormatter.getMappedTextElement(lyric.verse, this.props._handleAnnotationSelect);
    }
});
