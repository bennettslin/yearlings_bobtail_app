// This isn't currently being used.

import React from 'react';

const defaultProps = {
    songs: [],
    playedSongIndex: 0,
    handleSongChange() {}
};

class SongPlayerSection extends React.Component {

    render() {
        return (
            <div className="song-player-section">
                <h3>player</h3>
                <div>
                    played song: {this.props.playedSongIndex}
                </div>
            </div>
        );
    }
}

SongPlayerSection.defaultProps = defaultProps;
export default SongPlayerSection;