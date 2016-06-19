import React from 'react';
import FormatUtility from '../../utilities/format-utility.jsx';

const defaultProps = {
    columnKey: '',
    selectedSongLyrics: [],
    handleAnnotationSelect() {}
};

class LyricsColumn extends React.Component {

    _getStanzaElement(stanzaArray, stanzaIndex) {
        // A "stanza" wraps a block of text.
        return (
            <div className={'stanza ' + stanzaIndex} key={stanzaIndex}>
                {stanzaArray.map((verseObject, verseIndex) => {
                    return this._getVerseElement(verseObject, verseIndex);
                })}
            </div>
        );
    }

    _getVerseElement(verseObject, verseIndex) {
        // A "verse" wraps a single line of text.
        return (
            <div className={'verse ' + verseIndex} key={verseIndex}>
                {this._getLyricElement(verseObject)}
            </div>
        );
    }

    _getLyricElement(verseObject) {
        // A "lyric" is a formatted text element that includes annotation data.

        /**
            verseObject = {
                time: 0,
                lyric: [
                    'My',
                    {
                        annotationIndex: 1,
                        anchor: 'awesome',
                        dotKeys: [],
                        todo: false
                    },
                    'lyric.'
                ]
            }
        */

        return FormatUtility.getFormattedTextElement(true, verseObject.lyric, this.props.handleAnnotationSelect);
    }

    render() {
        const props = this.props,
            columnTitleHeader = props.columnKey ? <h3>{props.columnKey +  ' speaker'}</h3> : null,
            columnClassName = 'lyric-column' + (props.columnKey ? ' doublespeaker ' + props.columnKey : ''),
            lyricTextArea = (
                <div className={'lyric-block'}>
                    {props.selectedSongLyrics.map((stanzaArray, stanzaIndex) => {
                        return this._getStanzaElement(stanzaArray, stanzaIndex);
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

LyricsColumn.defaultProps = defaultProps;
export default LyricsColumn;