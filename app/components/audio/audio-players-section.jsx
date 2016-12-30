import React from 'react'
import AudioPlayer from './audio-player'
import { SONG_FILES } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const AudioPlayersSection = (props) => {

    return (
        <AudioPlayersSectionView {...props} />
    )
}

/****************
 * PRESENTATION *
 ****************/

const AudioPlayersSectionView = ({

    // From props.
    mp3s,

...other }) => {

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
