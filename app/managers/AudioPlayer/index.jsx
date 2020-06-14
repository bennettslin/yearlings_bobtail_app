// These listeners take in no props from parent, so can live anywhere.
import React from 'react'
import AudioManager from './Audio'
import PlayerManager from './Player'

const AudioPlayerManager = () => (
    <>
        <AudioManager />
        <PlayerManager />
    </>
)

export default AudioPlayerManager
