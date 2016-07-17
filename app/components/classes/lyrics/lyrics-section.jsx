import React from 'react';
import Constants from '../../constants/constants.js';
import FormatUtility from '../../utilities/format-utility.jsx';

const defaultProps = {
    selectedSongLyrics: '',
    handleAnnotationSelect() {}
};

/*************
 * CONTAINER *
 *************/

/********
 * VIEW *
 ********/

class LyricsSection extends React.Component {

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

        const lyricElements = verseObject.lyric ?

            // It is a regular verse.
            this._getLyricElement(verseObject.lyric) :

            // It is a doublespeaker verse.
            <div className="double-lines-block">
                {Constants.lyricColumnKeyClassPairs.map((keyClassPair, index) => {
                    return verseObject[keyClassPair.key] ?
                    <div key={index}
                        className={'line ' + keyClassPair.className}>
                        {this._getLyricElement(verseObject[keyClassPair.key])}
                    </div> : null
                })}
            </div>;

        return (
            <div className={'verse ' + verseIndex} key={verseIndex}>
                {lyricElements}
            </div>
        );
    }

    _getLyricElement(lyric, className) {
        /**
         * A "lyric" is a single line of text within a column. A regular song
         * will have one lyric per verse. A doublespeaker song will have two.
         */
        return FormatUtility.getFormattedTextElement(true, lyric, this.props.handleAnnotationSelect);
    }

    render() {
        const props = this.props,
            lyricsBlock = (
                <div className={'lyrics-block'}>
                    {props.selectedSongLyrics.map((stanzaArray, stanzaIndex) => {
                        return this._getStanzaElement(stanzaArray, stanzaIndex);
                    })}
                </div>
            );

        return (
            <div className="section lyrics-section">
                <h2>lyrics</h2>
                {lyricsBlock}
            </div>
        );
    }
}

LyricsSection.defaultProps = defaultProps;
export default LyricsSection;