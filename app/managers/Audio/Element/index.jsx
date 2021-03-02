// Component for individual audio element.
import React, {
    forwardRef, useContext, useImperativeHandle, useRef,
} from 'react'
import PropTypes from 'prop-types'
import ReactAudioPlayer from 'react-audio-player'
import { getMp3ForSong } from '../../../api/mp3'
import AudioPlayerContext from '../../../contexts/AudioPlayer'
import { getFormattedTime } from '../../../helpers/format'

const AudioPlayerElement = forwardRef(({
    songIndex,
    onLoadedMetadata,

}, ref) => {
    const
        { setSelectedPlayerTime } = useContext(AudioPlayerContext),
        audioPlayerElement = useRef()

    const getIsPaused = () => audioPlayerElement.current.paused

    const load = () => audioPlayerElement.current.load()

    const play = () => {
        logPlayer(`Promising to play ${songIndex}\u2026`)
        return audioPlayerElement.current.play()
    }

    const pause = () => {
        if (!getIsPaused()) {
            audioPlayerElement.current.pause()
            logPlayer(`Player ${songIndex} paused.`)
        }
    }

    const setCurrentTime = (currentTime, isUpdate) => {
        audioPlayerElement.current.currentTime = currentTime
        logPlayer(`Player ${songIndex} ${isUpdate ? 'updated to' : 'loaded at'} ${getFormattedTime(audioPlayerElement.current.currentTime)}.`)
    }

    const setRef = node => {
        if (node) {
            audioPlayerElement.current = node.audioEl.current
        }
    }

    const onListen = time => {
        // Update selected player time displayed in song banner.
        setSelectedPlayerTime(time)

        // if (isSongSelected) {
        //     // If this returns true, repeat song.
        //     const {
        //         songEnded,
        //         doRepeat,
        //     } = updateCurrentTime(time)

        //     if (songEnded) {
        //         logPlayer(`Player ${songIndex} reached end of final verse.`)
        //     }

        //     if (doRepeat) {
        //         askToPlay(0)
        //     }
        // }
    }

    const onEnded = () => {
        logPlayer(`Player for ${songIndex} ended itself.`)
        // If this returns true, repeat song.
        // if (handleSongEnd()) {
        //     askToPlay(0)
        // }
    }

    useImperativeHandle(ref, () => ({
        getIsPaused,
        load,
        play,
        pause,
        setCurrentTime,
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
}

export default AudioPlayerElement
