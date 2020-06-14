// These listeners take in no props from parent, so can live anywhere.
import React, { useRef } from 'react'
import AudioManager from './Audio'
import PlayerManager from './Player'

const AudioPlayerManager = () => {
    const _handleSongEnd = useRef()

    const handleSongEnd = () => {
        _handleSongEnd.current()
    }

    return (
        <>
            <AudioManager {...{ ref: _handleSongEnd }} />
            <PlayerManager {...{ handleSongEnd }} />
        </>
    )
}

export default AudioPlayerManager
