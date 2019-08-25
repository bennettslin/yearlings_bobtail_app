/* eslint-disable */
// import React, { Fragment as ___ } from 'react'
// import PropTypes from 'prop-types'
import audioPlay from 'assets/svgs/app/audioPlay'

const AUDIO_PLAY_MAP = {
    [true]: audioPlay,
    [false]: audioPlay
}

// const propTypes = {
//     buttonIdentifier: PropTypes.bool.isRequired,
//     className: PropTypes.string
// }

// const AudioPlayIcon = ({
//     buttonIdentifier: isPlaying

// }) => {
//     return (
//         <___>
//             {}
//         </___>
//     )
// }

// AudioPlayIcon.propTypes = propTypes

export default function({ buttonIdentifier: isPlaying }) {
    return AUDIO_PLAY_MAP[isPlaying]
}
