import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateActivatedStore } from '../../redux/activated/action'
import { updateAudioStore } from '../../redux/audio/action'
import { updateSelectedStore } from '../../redux/selected/action'
import { resetVerseBars } from '../../redux/verseBars/action'
import { getStartTimeForVerse } from '../../api/album/time'
import { mapLyricVerseIndex } from '../../redux/lyric/selector'
import { mapSelectedSongIndex } from '../../redux/selected/selector'

const VerseDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        lyricVerseIndex = useSelector(mapLyricVerseIndex)

    const dispatchVerse = nextVerseIndex => {
        // Only dispatch if verse has changed.
        if (lyricVerseIndex !== nextVerseIndex) {
            dispatch(updateAudioStore({
                queuedPlaySongIndex: selectedSongIndex
            }))

            dispatch(updateSelectedStore({
                selectedVerseIndex: nextVerseIndex,
                selectedTime: getStartTimeForVerse(
                    selectedSongIndex,
                    nextVerseIndex
                )
            }))

            logSelect({
                action: 'verse',
                song: selectedSongIndex,
                verse: nextVerseIndex
            })
        }

        // Ensure that no verse is activated.
        dispatch(updateActivatedStore())

        // Selecting a verse necessarily resets the verse bars.
        dispatch(resetVerseBars())
    }

    useImperativeHandle(ref, () => dispatchVerse)
    return null
})

export default VerseDispatcher
