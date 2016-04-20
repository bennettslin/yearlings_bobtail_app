import React from 'react';

const defaultProps = {
    sectionIndex: 'left',
    sectionTitle: '',
    playedSongLyrics: [],
    handleAnnotationSelect() {}
};

class LyricsSection extends React.Component {

    _parseLyric(lyric) {
        var annotation = lyric.annotation;
        return this.props.TextFormatter.getFormattedSpan(lyric.verse, this.props.handleAnnotationSelect);
    }

    render() {
        var sectionIndex = this.props.sectionIndex,
            sectionTitleHeader = this.props.sectionTitle ? <h3>{this.props.sectionTitle}</h3> : null,
            doublespeakerClassName = this.props.sectionTitle ? ' doublespeaker' : '',
            alignRightClassName = this.props.sectionTitle === 'right speaker' ? ' align-right' : '',
            sectionClassName = 'lyrics-section ' + sectionIndex + doublespeakerClassName + alignRightClassName,
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
            <div className={sectionClassName}>
                {sectionTitleHeader}
                {lyricsTextArea}
            </div>
        );
    }
}

LyricsSection.defaultProps = defaultProps;
export default LyricsSection;