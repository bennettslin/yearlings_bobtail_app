import React from 'react';
import { FormattedLyricsSection } from './text-formatter.jsx';

const LYRICS_SECTION_NAMES = ['left', 'right'];
const defaultProps = {
    playedSongLyrics: '',
    handleAnnotationSelect() {}
};

class LyricsField extends React.Component {

    render() {
        var lyricsSectionKeys = Object.keys(this.props.playedSongLyrics),
            filteredLyricsSectionKeys = LYRICS_SECTION_NAMES.filter(function(key) {
                return lyricsSectionKeys.indexOf(key) !== -1;
            }),
            isDoublespeaker = this.props.playedSongLyrics.left && this.props.playedSongLyrics.right,
            lyricsSections = filteredLyricsSectionKeys.map(function(key, index) {
                return (
                    <FormattedLyricsSection
                        key={key}
                        sectionIndex={key}
                        sectionTitle={isDoublespeaker ? key + ' speaker' : null}
                        playedSongLyrics={this.props.playedSongLyrics[key]}
                        handleAnnotationSelect={this.props.handleAnnotationSelect}
                    />
                );
            }, this);

        return (
            <div className="lyrics-field">
                <h2>lyrics</h2>
                <div className="lyrics-sections-container">
                    {lyricsSections}
                </div>
            </div>
        );
    }
}

LyricsField.defaultProps = defaultProps;
export default LyricsField;