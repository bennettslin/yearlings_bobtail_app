import React from 'react';
import LyricColumn from './lyric-column.jsx';

const LYRICS_COLUMN_NAMES = ['left', 'right'];
const defaultProps = {
    selectedSongLyrics: '',
    handleAnnotationSelect() {}
};

class LyricsSection extends React.Component {

    render() {
        const lyricsColumnKeys = Object.keys(this.props.selectedSongLyrics),
            filteredLyricsColumnKeys = LYRICS_COLUMN_NAMES.filter(function(key) {
                return lyricsColumnKeys.indexOf(key) !== -1;
            }),
            isDoublespeaker = this.props.selectedSongLyrics.left && this.props.selectedSongLyrics.right,
            lyricsColumns = filteredLyricsColumnKeys.map(function(key, index) {
                return (
                    <LyricColumn
                        key={key}
                        columnKey={key}
                        columnTitle={isDoublespeaker ? key + ' speaker' : null}
                        selectedSongLyrics={this.props.selectedSongLyrics[key]}
                        handleAnnotationSelect={this.props.handleAnnotationSelect}
                    />
                );
            }, this);

        return (
            <div className="section lyrics-section">
                <h2>lyrics</h2>
                <div className="lyric-columns">
                    {lyricsColumns}
                </div>
            </div>
        );
    }
}

LyricsSection.defaultProps = defaultProps;
export default LyricsSection;