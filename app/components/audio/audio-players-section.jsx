import React from 'react'
import PropTypes from 'prop-types'
import AudioPlayer from './audio-player'

/*************
 * CONTAINER *
 *************/

const AudioPlayersSection = (props) => (
    <AudioPlayersSectionView {...props} />
)

AudioPlayersSection.propTypes = {
    mp3s: PropTypes.array.isRequired
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
