import React from 'react';
import FormatUtility from '../utilities/format-utility.jsx';

const defaultProps = {
    columnKey: '',
    selectedSongLyrics: [],
    handleAnnotationSelect() {}
};

class LyricColumn extends React.Component {

    _getStanza(stanzaArray, stanzaIndex) {
        // A "stanza" wraps a block of text.
        return (
            <div className={'stanza ' + stanzaIndex} key={stanzaIndex}>
                {stanzaArray.map((verseObject, verseIndex) => {
                    return this._getVerse(verseObject, verseIndex);
                })}
            </div>
        );
    }

    _getVerse(verseObject, verseIndex) {
        // A "verse" wraps a single line of text.
        return (
            <div className={'verse ' + verseIndex} key={verseIndex}>
                {this._getParsedLyric(verseObject)}
            </div>
        );
    }

    _getParsedLyric(verseObject) {
        /**
            verseObject = {
                time: 0,
                verse: [
                    'My',
                    {
                        annotationIndex: 1,
                        anchor: 'awesome',
                        codes: [],
                        todo: false
                    },
                    'lyric.'
                ]
            }
        */

        console.error('verseObject', verseObject);
        return FormatUtility.getFormattedSpan(verseObject.verse, this.props.handleAnnotationSelect);
    }

    render() {
        const props = this.props,
            columnTitleHeader = props.columnKey ? <h3>{props.columnKey +  ' speaker'}</h3> : null,
            columnClassName = 'lyric-column' + (props.columnKey ? ' doublespeaker ' + props.columnKey : ''),
            lyricTextArea = (
                <div className={'lyric-block'}>
                    {props.selectedSongLyrics.map((stanzaArray, stanzaIndex) => {
                        return this._getStanza(stanzaArray, stanzaIndex);
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