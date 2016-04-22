import React from 'react';
import FormatHelper from '../helpers/format-helper.jsx';

const defaultProps = {
    columnKey: 'left',
    columnTitle: '',
    selectedSongLyrics: [],
    handleAnnotationSelect() {}
};

class LyricsColumn extends React.Component {

    _getStanza(stanza, stanzaIndex) {
        return (
            <div className={'stanza-' + stanzaIndex} key={stanzaIndex}>
                {stanza.map((verse, verseIndex) => {
                    return this._getVerse(verse, verseIndex);
                })}
            </div>
        );
    }

    _getVerse(verse, verseIndex) {
        return (
            <div className={'verse-' + verseIndex} key={verseIndex}>
                {this._getParsedLyric(verse)}
            </div>
        );
    }

    _getParsedLyric(lyric) {
        const annotation = lyric.annotation;
        return FormatHelper.getFormattedSpan(lyric.verse, this.props.handleAnnotationSelect);
    }

    render() {
        const props = this.props,
            columnKey = props.columnKey,
            columnTitleHeader = props.columnTitle ? <h3>{props.columnTitle}</h3> : null,
            doublespeakerClassName = props.columnTitle ? ' doublespeaker' : '',
            alignRightClassName = props.columnTitle === 'right speaker' ? ' align-right' : '',
            columnClassName = 'lyrics-column ' + columnKey + doublespeakerClassName + alignRightClassName,
            lyricsTextArea = (
                <div className={'lyrics-text'}>
                    {props.selectedSongLyrics.map((stanza, stanzaIndex) => {
                        return this._getStanza(stanza, stanzaIndex);
                    })}
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

LyricsColumn.defaultProps = defaultProps;
export default LyricsColumn;