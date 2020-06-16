// Singleton to listen for song change.
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateActivatedStore } from '../../../redux/activated/action'
import { updateShownNavBookIndex } from '../../../redux/session/action'
import { resetVerseBars } from '../../../redux/verseBars/action'
import { getBookForSongIndex } from '../../../api/album/songs'
import { mapSelectedSongIndex } from '../../../redux/selected/selector'

const SongListener = () => {
    const
        dispatch = useDispatch(),
        selectedSongIndex = useSelector(mapSelectedSongIndex)

    useEffect(() => {
        dispatch(updateShownNavBookIndex(
            getBookForSongIndex(selectedSongIndex))
        )
        dispatch(updateActivatedStore())
        dispatch(resetVerseBars())
    }, [selectedSongIndex])

    return null
}

export default SongListener
