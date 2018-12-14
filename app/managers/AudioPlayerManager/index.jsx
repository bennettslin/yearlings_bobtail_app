// These listeners take in no props from parent, so can live anywhere.

import React, { PureComponent, Fragment as ___ } from 'react'

import AudioManager from './AudioManager'
import PlayerManager from './PlayerManager'

import { populateRefs } from 'helpers/ref'

class AudioPlayerManager extends PureComponent {

    _toggleSelectedPlayer = (payload) => {
        return this.toggleSelectedPlayer(payload)
    }

    _handleSongEnd = () => {
        return this.handleSongEnd()
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        return (
            <___>
                <AudioManager
                    {...{
                        getRefs: this._getRefs,
                        toggleSelectedPlayer: this._toggleSelectedPlayer
                    }}
                />
                <PlayerManager
                    {...{
                        getRefs: this._getRefs,
                        handleSongEnd: this._handleSongEnd
                    }}
                />
            </___>
        )
    }
}

export default AudioPlayerManager
