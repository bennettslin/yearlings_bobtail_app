import React from 'react';
import FormatUtility from '../utilities/format-utility.jsx';

const defaultProps = {
    columnKey: '',
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
        return FormatUtility.getFormattedSpan(lyric.verse, this.props.handleAnnotationSelect);
    }

    render() {
        const props = this.props,
            columnTitleHeader = props.columnKey ? <h3>{props.columnKey +  ' speaker'}</h3> : null,
            columnClassName = 'lyric-column' + (props.columnKey ? ' doublespeaker ' + props.columnKey : ''),
            lyricTextArea = (
                <div className={'lyric-block'}>
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