import React from 'react';
import { FormattedLyricsColumn } from './text-formatter.jsx';

const LYRICS_COLUMN_NAMES = ['left', 'right'];
const defaultProps = {
    playedSongLyrics: '',
    handleAnnotationSelect() {}
};

class LyricsField extends React.Component {

    render() {
        var lyricsColumnKeys = Object.keys(this.props.playedSongLyrics),
            filteredLyricsColumnKeys = LYRICS_COLUMN_NAMES.filter(function(key) {
                return lyricsColumnKeys.indexOf(key) !== -1;
            }),
            isDoublespeaker = this.props.playedSongLyrics.left && this.props.playedSongLyrics.right,
            lyricsColumns = filteredLyricsColumnKeys.map(function(key, index) {
                return (
                    <FormattedLyricsColumn
                        key={key}
                        columnIndex={key}
                        columnTitle={isDoublespeaker ? key + ' speaker' : null}
                        playedSongLyrics={this.props.playedSongLyrics[key]}
                        handleAnnotationSelect={this.props.handleAnnotationSelect}
                    />
                );
            }, this);

        return (
            <div className="lyrics-field">
                <h2>lyrics</h2>
                <div className="lyrics-columns">
                    {lyricsColumns}
                </div>
            </div>
        );
    }
}

LyricsField.defaultProps = defaultProps;
export default LyricsField;