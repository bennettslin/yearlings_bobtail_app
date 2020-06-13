// These listeners take in no props from parent, so can live anywhere.
import React, { PureComponent } from 'react'

import AudioManager from './Audio'
import PlayerManager from './Player'

class AudioPlayerManager extends PureComponent {

    callToggleSelectedPlayer = payload => {
        this.toggleSelectedPlayer(payload)
    }

    callHandleSongEnd = () => {
        this.handleSongEnd()
    }

    getHandleSongEnd = dispatch => {
        this.handleSongEnd = dispatch
    }

    setToggleSelectedPlayer = dispatch => {
        this.toggleSelectedPlayer = dispatch
    }

    render() {
        return (
            <>
                <AudioManager
                    {...{
                        ref: this.getHandleSongEnd,
                        toggleSelectedPlayer: this.callToggleSelectedPlayer
                    }}
                />
                <PlayerManager
                    {...{
                        getToggleSelectedPlayer: this.setToggleSelectedPlayer,
                        handleSongEnd: this.callHandleSongEnd
                    }}
                />
            </>
        )
    }
}

export default AudioPlayerManager
