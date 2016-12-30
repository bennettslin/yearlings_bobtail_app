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
    mp3s

}) => {

    return (
        <div className="audio-players-section">
            {mp3s.map((mp3, index) => {
                return (
                    <AudioPlayer
                        ref={mp3}
                        key={index}
                        mp3={mp3}
                    />
                )
            })}
        </div>
    )
}

export default AudioPlayersSection
