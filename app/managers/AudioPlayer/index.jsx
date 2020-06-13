// These listeners take in no props from parent, so can live anywhere.
import React, { useRef } from 'react'
import AudioManager from './Audio'
import PlayerManager from './Player'

const AudioPlayerManager = () => {
    const
        _handleSongEnd = useRef(),
        _toggleSelectedPlayer = useRef()

    const handleSongEnd = () => {
        _handleSongEnd.current()
    }

    const toggleSelectedPlayer = isPlaying => {
        _toggleSelectedPlayer.current(isPlaying)
    }

    return (
        <>
            <AudioManager
                {...{
                    ref: _handleSongEnd,
                    toggleSelectedPlayer
                }}
            />
            <PlayerManager
                {...{
                    ref: _toggleSelectedPlayer,
                    handleSongEnd
                }}
            />
        </>
    )
}

export default AudioPlayerManager
