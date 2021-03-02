import React, { forwardRef, useContext, useImperativeHandle, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SongDispatcher from '../Song'
import AudioPlayerContext from '../../contexts/AudioPlayer'
import { updateIsPlaying } from '../../redux/audio/action'
import { scrollLyricBackToSelectedVerse } from '../../redux/scrollLyric/action'
import { mapIsPlaying } from '../../redux/audio/selector'
import { mapPlayerCanPlayThrough } from '../../redux/players/selector'
import { mapIsSelectedLogue } from '../../redux/selected/selector'

const PlayDispatcher = forwardRef((props, ref) => {
    const
        { callAudioManager } = useContext(AudioPlayerContext),
        dispatch = useDispatch(),
        dispatchSong = useRef(),
        isPlaying = useSelector(mapIsPlaying),
        playerCanPlayThrough = useSelector(mapPlayerCanPlayThrough),
        isSelectedLogue = useSelector(mapIsSelectedLogue)

    const dispatchPlay = (nextIsPlaying = !isPlaying) => {
        // Do not toggle play if player is not ready to play through.
        if (!playerCanPlayThrough) {
            return false
        }

        callAudioManager({
            isPlaying: nextIsPlaying,
            // If in logue, play the first song.
            ...isSelectedLogue && {
                songIndex: 1,
            },
        })

        if (nextIsPlaying) {
            dispatch(scrollLyricBackToSelectedVerse('Play toggled'))

            // If in logue, select the first song.
            if (isSelectedLogue) {
                dispatchSong.current({
                    fromPlayDispatcher: true,
                    selectedSongIndex: 1,
                })
            }

        } else {
            dispatch(updateIsPlaying())
        }

        return true
    }

    useImperativeHandle(ref, () => dispatchPlay)
    return (
        <SongDispatcher {...{ ref: dispatchSong }} />
    )
})

export default PlayDispatcher
