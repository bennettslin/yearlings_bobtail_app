import React from 'react';
import LyricsColumn from './lyrics-section-column.jsx';

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
                    <LyricsColumn
                        key={key}
                        columnKey={key}
                        columnTitle={isDoublespeaker ? key + ' speaker' : null}
                        selectedSongLyrics={this.props.selectedSongLyrics[key]}
                        handleAnnotationSelect={this.props.handleAnnotationSelect}
                    />
                );
            }, this);

        return (
            <div className="lyrics-field">
                <h2>lyrics</h2>
                <div className="lyrics-columns-container">
                    {lyricsColumns}
                </div>
            </div>
        );
    }
}

LyricsSection.defaultProps = defaultProps;
export default LyricsSection;