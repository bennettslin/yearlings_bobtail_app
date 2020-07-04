import { forwardRef, useImperativeHandle, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateAudioStore } from '../../redux/audio/action'
import { updateSelectedStore } from '../../redux/selected/action'
import { getStartTimeForVerse } from '../../api/album/time'
import { mapLyricVerseIndex } from '../../redux/lyric/selector'
import { scrollLyricForVerseSelect } from '../../redux/scrollLyric/action'
import { mapSelectedSongIndex } from '../../redux/selected/selector'

const VerseDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        lyricVerseIndex = useSelector(mapLyricVerseIndex)

    const _dispatchScrollLyric = (scrollLog, nextVerseIndex) => {
        dispatch(scrollLyricForVerseSelect(
            scrollLog,
            nextVerseIndex
        ))
    }

    const dispatchVerse = (scrollLog, nextVerseIndex) => {
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

            // TODO: This timeout might not be all that effective.
            setTimeout(
                () => _dispatchScrollLyric(scrollLog, nextVerseIndex),
                0
            )
        }
    }

    useImperativeHandle(ref, () => dispatchVerse)
    return null
})

export default memo(VerseDispatcher)
