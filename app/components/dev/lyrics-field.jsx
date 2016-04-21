import React from 'react';
import LyricsSection from './lyrics-section.jsx';

const LYRICS_SECTION_NAMES = ['left', 'right'];
const defaultProps = {
    selectedSongLyrics: '',
    handleAnnotationSelect() {}
};

class LyricsField extends React.Component {

    render() {
        const lyricsSectionKeys = Object.keys(this.props.selectedSongLyrics),
            filteredLyricsSectionKeys = LYRICS_SECTION_NAMES.filter(function(key) {
                return lyricsSectionKeys.indexOf(key) !== -1;
            }),
            isDoublespeaker = this.props.selectedSongLyrics.left && this.props.selectedSongLyrics.right,
            lyricsSections = filteredLyricsSectionKeys.map(function(key, index) {
                return (
                    <LyricsSection
                        key={key}
                        sectionIndex={key}
                        sectionTitle={isDoublespeaker ? key + ' speaker' : null}
                        selectedSongLyrics={this.props.selectedSongLyrics[key]}
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