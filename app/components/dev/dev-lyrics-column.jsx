import React from 'react';
import DevFormattedLyricsColumn from './dev-text-formatter.jsx';

export default class DevLyricsColumn extends React.Component {

    _parseLyric(lyric) {
        var annotation = lyric.annotation;
        return this.props.TextFormatter.getFormattedSpan(lyric.verse, this.props.handleAnnotationSelect);
    }

    render() {
        var columnIndex = this.props.columnIndex,
            columnTitleHeader = this.props.columnTitle ? <h3>{this.props.columnTitle}</h3> : null,
            doublespeakerClassName = this.props.columnTitle ? ' doublespeaker' : '',
            alignRightClassName = this.props.columnTitle === 'right speaker' ? ' align-right' : '',
            columnClassName = 'dev-lyrics-column ' + columnIndex + doublespeakerClassName + alignRightClassName,
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
            <div className={columnClassName}>
                {columnTitleHeader}
                {lyricsTextArea}
            </div>
        );
    }
}

DevLyricsColumn.defaultProps = {
    columnIndex: 'left',
    columnTitle: '',
    playedSongLyrics: [],
    handleAnnotationSelect() {}
}