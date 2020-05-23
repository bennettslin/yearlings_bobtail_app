// These listeners take in no props from parent, so can live anywhere.

import React, { PureComponent } from 'react'

import AudioManager from './Audio'
import PlayerManager from './Player'

import { populateRefs } from '../../helpers/ref'

class AudioPlayerManager extends PureComponent {

    _toggleSelectedPlayer = payload => {
        return this.toggleSelectedPlayer(payload)
    }

    _handleSongEnd = () => {
        return this.handleSongEnd()
    }

    _getRefs = payload => {
        populateRefs(this, payload)
    }

    render() {
        return (
            <>
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
            </>
        )
    }
}

export default AudioPlayerManager
