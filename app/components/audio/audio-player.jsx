import React from 'react'

/*************
 * CONTAINER *
 *************/

const AudioPlayer = (props) => {

    return (
        <AudioPlayerView {...props} />
    )
}

/****************
 * PRESENTATION *
 ****************/

const AudioPlayerView = ({

    // From props.
    mp3

}) => {

    return (
        <audio controls>
            <source src={mp3} type="audio/mpeg" />
        </audio>
    )
}

export default AudioPlayer
