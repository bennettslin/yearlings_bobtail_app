// These listeners take in no props from parent, so can live anywhere.
import React, { useRef } from 'react'
import AudioManager from './Audio'
import PlayerManager from './Player'

const AudioPlayerManager = () => {
    const
        handleSongEnd = useRef(),
        toggleSelectedPlayer = useRef()

    return (
        <>
            <AudioManager
                {...{
                    ref: handleSongEnd,
                    toggleSelectedPlayer
                }}
            />
            <PlayerManager
                {...{
                    ref: toggleSelectedPlayer,
                    handleSongEnd
                }}
            />
        </>
    )
}

export default AudioPlayerManager
