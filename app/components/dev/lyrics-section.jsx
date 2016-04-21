import React from 'react';
import FormatHelper from '../helpers/format-helper.jsx';

const defaultProps = {
    sectionIndex: 'left',
    sectionTitle: '',
    selectedSongLyrics: [],
    handleAnnotationSelect() {}
};

class LyricsSection extends React.Component {

    _getStanza(stanza, stanzaIndex) {
        return (
            <div className={'stanza-' + stanzaIndex} key={stanzaIndex}>
                {stanza.map(function(lyric, verseIndex) {
                    return this._getVerse(lyric, verseIndex);
                }, this)}
            </div>
        );
    }

    _getVerse(lyric, verseIndex) {
        return (
            <div className={'verse-' + verseIndex} key={verseIndex}>
                {this._getParsedLyric(lyric)}
            </div>
        );
    }

    _getParsedLyric(lyric) {
        const annotation = lyric.annotation;
        return FormatHelper.getFormattedSpan(lyric.verse, this.props.handleAnnotationSelect);
    }

    render() {
        const props = this.props,
            sectionIndex = props.sectionIndex,
            sectionTitleHeader = props.sectionTitle ? <h3>{props.sectionTitle}</h3> : null,
            doublespeakerClassName = props.sectionTitle ? ' doublespeaker' : '',
            alignRightClassName = props.sectionTitle === 'right speaker' ? ' align-right' : '',
            sectionClassName = 'lyrics-section ' + sectionIndex + doublespeakerClassName + alignRightClassName,
            lyricsTextArea = (
                <div className={'lyrics-text'}>
                    {props.selectedSongLyrics.map(function(stanza, stanzaIndex) {
                        return this._getStanza(stanza, stanzaIndex);
                    }, this)}
                </div>
            );

        return (
            <div className={sectionClassName}>
                {sectionTitleHeader}
                {lyricsTextArea}
            </div>
        );
    }
}

LyricsSection.defaultProps = defaultProps;
export default LyricsSection;