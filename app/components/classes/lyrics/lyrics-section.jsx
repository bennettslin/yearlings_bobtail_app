import React from 'react';
import FormatUtility from '../../utilities/format-utility.jsx';

const defaultProps = {
    selectedSongLyrics: '',
    handleAnnotationSelect() {}
};

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
        let lyricElements;

        // It is a regular song.
        if (verseObject.lyric) {
            lyricElements = this._getLyricElement(verseObject.lyric);

        // It is a doublespeaker song
        } else {
            lyricElements = (
                <div className="double-lines-block">
                    <div className="line left">
                        {this._getLyricElement(verseObject.leftLyric)}
                    </div>
                    <div className="line right">
                        {this._getLyricElement(verseObject.rightLyric)}
                    </div>
                </div>
            );
        }

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