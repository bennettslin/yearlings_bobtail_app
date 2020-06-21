// eslint-disable-next-line object-curly-newline
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateIsSongSelectComplete } from '../../../redux/lyric/action'
import { mapSelectedSongIndex } from '../../../redux/selected/selector'

const SongChangeExitListener = () => {
    const
        dispatch = useDispatch(),
        timeoutRef = useRef(),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        [songChangeTimeoutId, setSongChangeTimeoutId] = useState('')

    timeoutRef.current = { songChangeTimeoutId }

    const beginSongSelect = () => {
        dispatch(updateIsSongSelectComplete(true))
    }

    useEffect(() => {
        dispatch(updateIsSongSelectComplete(false))

        // Clear previous timeout.
        clearTimeout(timeoutRef.current.songChangeTimeoutId)

        // Wait for song selection to finish.
        setSongChangeTimeoutId(setTimeout(
            beginSongSelect, 200
        ))
    }, [selectedSongIndex])

    return null
}

export default SongChangeExitListener
