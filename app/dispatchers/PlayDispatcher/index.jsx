// eslint-disable-next-line object-curly-newline
import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateAudioStore } from '../../redux/audio/action'
import SongDispatcher from '../../handlers/Song/Dispatcher'
import { getPlayerCanPlayThroughFromBit } from '../../helpers/player'
import { mapIsPlaying } from '../../redux/audio/selectors'
import { mapPlayersBitNumber } from '../../redux/players/selectors'
import {
    mapSelectedSongIndex,
    mapIsSelectedLogue
} from '../../redux/selected/selectors'

const PlayDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        dispatchSong = useRef(),
        isPlaying = useSelector(mapIsPlaying),
        playersBitNumber = useSelector(mapPlayersBitNumber),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        isSelectedLogue = useSelector(mapIsSelectedLogue)

    const dispatchPlay = (nextIsPlaying = !isPlaying) => {
        // TODO: Make this a selector
        const playerCanPlayThrough = getPlayerCanPlayThroughFromBit({
            songIndex: selectedSongIndex,
            playersBitNumber
        })

        // Do not toggle play if player is not ready to play through.
        if (!playerCanPlayThrough) {
            return false
        }

        const isPlayFromLogue = isSelectedLogue && nextIsPlaying

        /**
         * Select first song if play button in logue is toggled on. In order
         * to keep player and song in sync, only dispatch song, and let song
         * handler send queued event to toggle play.
         */
        if (isPlayFromLogue) {
            dispatchSong.current({
                isPlayFromLogue: true,
                selectedSongIndex: 1
            })

        } else {
            dispatch(updateAudioStore({ queuedTogglePlay: true }))
        }

        return true
    }

    useImperativeHandle(ref, () => dispatchPlay)
    return (
        <SongDispatcher {...{ ref: dispatchSong }} />
    )
})

export default PlayDispatcher
