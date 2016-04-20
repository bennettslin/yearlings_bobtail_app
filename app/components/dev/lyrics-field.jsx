import React from 'react';
import { FormattedLyricsSet } from './text-formatter.jsx';

const LYRICS_SET_NAMES = ['left', 'right'];
const defaultProps = {
    playedSongLyrics: '',
    handleAnnotationSelect() {}
};

class LyricsField extends React.Component {

    render() {
        var lyricsSetKeys = Object.keys(this.props.playedSongLyrics),
            filteredLyricsSetKeys = LYRICS_SET_NAMES.filter(function(key) {
                return lyricsSetKeys.indexOf(key) !== -1;
            }),
            isDoublespeaker = this.props.playedSongLyrics.left && this.props.playedSongLyrics.right,
            lyricsSets = filteredLyricsSetKeys.map(function(key, index) {
                return (
                    <FormattedLyricsSet
                        key={key}
                        setIndex={key}
                        setTitle={isDoublespeaker ? key + ' speaker' : null}
                        playedSongLyrics={this.props.playedSongLyrics[key]}
                        handleAnnotationSelect={this.props.handleAnnotationSelect}
                    />
                );
            }, this);

        return (
            <div className="lyrics-field">
                <h2>lyrics</h2>
                <div className="lyrics-columns">
                    {lyricsSets}
                </div>
            </div>
        );
    }
}

LyricsField.defaultProps = defaultProps;
export default LyricsField;