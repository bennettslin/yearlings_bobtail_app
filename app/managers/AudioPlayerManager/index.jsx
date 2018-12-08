// These listeners take in no props from parent, so can live anywhere.

import React, { PureComponent, Fragment as ___ } from 'react'

import AudioManager from './AudioManager'
import PlayerManager from './PlayerManager'

class AudioPlayerManager extends PureComponent {

    _toggleSelectedPlayer = (payload) => {
        return this.toggleSelectedPlayer(payload)
    }

    _handleSongEnd = () => {
        return this.handleSongEnd()
    }

    render() {
        return (
            <___>
                <AudioManager
                    {...{
                        parentThis: this,
                        toggleSelectedPlayer: this._toggleSelectedPlayer
                    }}
                />
                <PlayerManager
                    {...{
                        parentThis: this,
                        handleSongEnd: this._handleSongEnd
                    }}
                />
            </___>
        )
    }
}

export default AudioPlayerManager
