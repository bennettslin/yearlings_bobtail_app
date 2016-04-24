import React from 'react';
import LyricColumn from './lyric-column.jsx';

const LYRICS_COLUMN_NAMES = ['left', 'right'];
const defaultProps = {
    selectedSongLyrics: '',
    handleAnnotationSelect() {}
};

class LyricsSection extends React.Component {

    render() {
        const props = this.props,
            isDoublespeaker = props.selectedSongLyrics.length > 1,
            lyricsColumns = props.selectedSongLyrics.map((lyrics, index) => {
                return (
                    <LyricColumn
                        key={index}
                        columnIndex={index}
                        columnTitle={isDoublespeaker ? (index === 0 ? 'left' : 'right') + ' speaker' : null}
                        selectedSongLyrics={props.selectedSongLyrics[index]}
                        handleAnnotationSelect={props.handleAnnotationSelect}
                    />
                );
            });

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