import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
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
                    <ReactAudioPlayer
                        key={index}
                        src={mp3}
                    />
                )
            })}
        </div>
    )
}

export default AudioPlayersSection
