import React from 'react';
import FormatHelper from '../helpers/format-helper.jsx';

const defaultProps = {
    columnKey: 'left',
    columnTitle: '',
    selectedSongLyrics: [],
    handleAnnotationSelect() {}
};

class LyricColumn extends React.Component {

    _getStanza(stanza, stanzaIndex) {
        return (
            <div className={'stanza ' + stanzaIndex} key={stanzaIndex}>
                {stanza.map((verse, verseIndex) => {
                    return this._getVerse(verse, verseIndex);
                })}
            </div>
        );
    }

    _getVerse(verse, verseIndex) {
        return (
            <div className={'verse ' + verseIndex} key={verseIndex}>
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
            doublespeakerClassName = props.columnTitle ? ' double-column' : '',
            columnClassName = 'lyric-column ' + columnKey + doublespeakerClassName,
            lyricTextArea = (
                <div className={'lyric-text-area'}>
                    {props.selectedSongLyrics.map((stanza, stanzaIndex) => {
                        return this._getStanza(stanza, stanzaIndex);
                    })}
                </div>
            );

        return (
            <div className={columnClassName}>
                {columnTitleHeader}
                {lyricTextArea}
            </div>
        );
    }
}

LyricColumn.defaultProps = defaultProps;
export default LyricColumn;