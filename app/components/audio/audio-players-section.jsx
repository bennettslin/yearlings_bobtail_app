import React from 'react'
import AudioPlayer from './audio-player'
import AlbumData from '../../album-data'

const { mp3s } = AlbumData

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
