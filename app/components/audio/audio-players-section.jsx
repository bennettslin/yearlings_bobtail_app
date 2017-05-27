import React from 'react'
import AudioPlayer from './audio-player'
import { getMp3s } from '../../helpers/data-helper'

/*************
 * CONTAINER *
 *************/

const AudioPlayersSection = (props) => (
    <AudioPlayersSectionView {...props} />
)

/****************
 * PRESENTATION *
 ****************/

const AudioPlayersSectionView = ({

    // From props.

...other }) => {

    const mp3s = getMp3s()

    return (
        <div className="audio-players-section">
            {mp3s.map((mp3, index) => {
                return (
                    <AudioPlayer {...other}
                        key={index}
                        mp3={mp3}
                        playerIndex={index + 1}
                    />
                )
            })}
        </div>
    )
}

export default AudioPlayersSection
