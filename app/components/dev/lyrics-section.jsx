import React from 'react';
import LyricsColumn from './lyrics-column.jsx';

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
                    <LyricsColumn
                        key={index}
                        columnKey={isDoublespeaker ? (index === 0 ? 'left' : 'right') : null}
                        selectedSongLyrics={lyrics}
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