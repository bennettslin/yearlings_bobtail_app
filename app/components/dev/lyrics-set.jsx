import React from 'react';

const defaultProps = {
    setIndex: 'left',
    setTitle: '',
    playedSongLyrics: [],
    handleAnnotationSelect() {}
};

class LyricsSet extends React.Component {

    _parseLyric(lyric) {
        var annotation = lyric.annotation;
        return this.props.TextFormatter.getFormattedSpan(lyric.verse, this.props.handleAnnotationSelect);
    }

    render() {
        var setIndex = this.props.setIndex,
            setTitleHeader = this.props.setTitle ? <h3>{this.props.setTitle}</h3> : null,
            doublespeakerClassName = this.props.setTitle ? ' doublespeaker' : '',
            alignRightClassName = this.props.setTitle === 'right speaker' ? ' align-right' : '',
            setClassName = 'lyrics-column ' + setIndex + doublespeakerClassName + alignRightClassName,
            lyricsTextArea = (
                <div className={'lyrics-text'}>
                    {this.props.playedSongLyrics.map(function(stanza, stanzaIndex) {
                        return (
                            <div className={'stanza-' + stanzaIndex} key={stanzaIndex}>
                                {stanza.map(function(lyric, verseIndex) {
                                    return (
                                        <div className={'verse-' + verseIndex} key={verseIndex}>
                                            {this._parseLyric(lyric)}
                                        </div>
                                    )
                                }, this)}
                            </div>
                        )
                    }, this)}
                </div>
            );

        return (
            <div className={setClassName}>
                {setTitleHeader}
                {lyricsTextArea}
            </div>
        );
    }
}

LyricsSet.defaultProps = defaultProps;
export default LyricsSet;