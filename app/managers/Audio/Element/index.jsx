// Component for individual audio element.
import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import PropTypes from 'prop-types'
import ReactAudioPlayer from 'react-audio-player'
import { getMp3ForSong } from '../../../api/mp3'

const AudioPlayerElement = forwardRef(({
    songIndex,
    onLoadedMetadata,
    onListen,
    onEnded,

}, ref) => {
    const audioPlayerElement = useRef()

    const setRef = node => {
        if (node) {
            audioPlayerElement.current = node.audioEl.current
        }
    }

    useImperativeHandle(ref, () => ({

    }))

    return (
        <ReactAudioPlayer
            {...{
                ref: setRef,
                listenInterval: 50,

                /**
                 * This was originally onCanPlayThrough, but Firefox and Safari
                 * don't support it.
                 */
                onLoadedMetadata,
                onListen,
                onEnded,
                src: getMp3ForSong(songIndex),
            }}
        />
    )
})

AudioPlayerElement.propTypes = {
    songIndex: PropTypes.number.isRequired,
    onLoadedMetadata: PropTypes.func.isRequired,
    onListen: PropTypes.func.isRequired,
    onEnded: PropTypes.func.isRequired,
}

export default AudioPlayerElement
