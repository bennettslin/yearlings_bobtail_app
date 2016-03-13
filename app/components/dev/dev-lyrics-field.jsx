import React from 'react';
import { DevFormattedLyricsColumn } from './dev-text-formatter.jsx';

var LYRICS_COLUMN_NAMES = ['left', 'right'];

export default class DevLyricsField extends React.Component {

    render() {
        var lyricsColumnKeys = Object.keys(this.props.playedSongLyrics),
            filteredLyricsColumnKeys = LYRICS_COLUMN_NAMES.filter(function(key) {
                return lyricsColumnKeys.indexOf(key) !== -1;
            }),
            isDoublespeaker = this.props.playedSongLyrics.left && this.props.playedSongLyrics.right,
            lyricsColumns = filteredLyricsColumnKeys.map(function(key, index) {
                return (
                    <DevFormattedLyricsColumn
                        key={key}
                        columnIndex={key}
                        columnTitle={isDoublespeaker ? key + ' speaker' : null}
                        playedSongLyrics={this.props.playedSongLyrics[key]}
                        handleAnnotationSelect={this.props.handleAnnotationSelect}
                    />
                );
            }, this);

        return (
            <div className="dev-lyrics-field">
                <h2>lyrics</h2>
                <div className="dev-lyrics-columns">
                    {lyricsColumns}
                </div>
            </div>
        );
    }
}

DevLyricsField.defaultProps = {
    playedSongLyrics: '',
    handleAnnotationSelect() {}
}