import { forwardRef, useImperativeHandle, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateAudioStore } from '../../redux/audio/action'
import { updateSelectedStore } from '../../redux/selected/action'
import { getStartTimeForVerse } from '../../api/album/time'
import { updateActivatedStore } from '../../redux/activated/action'
import { mapLyricVerseIndex } from '../../redux/lyric/selector'
import { scrollLyricForVerseSelect } from '../../redux/scrollLyric/action'
import { mapSelectedSongIndex } from '../../redux/selected/selector'

const VerseDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        lyricVerseIndex = useSelector(mapLyricVerseIndex)

    const dispatchVerse = ({
        scrollLog,
        verseIndex,
        fromActivated
    }) => {
        if (fromActivated) {
            dispatch(updateActivatedStore())
        }

        // Only dispatch if verse has changed.
        if (lyricVerseIndex !== verseIndex) {
            dispatch(updateAudioStore({
                queuedPromisePlay: true
            }))

            dispatch(updateSelectedStore({
                selectedVerseIndex: verseIndex,
                selectedTime: getStartTimeForVerse(
                    selectedSongIndex,
                    verseIndex
                )
            }))

            logSelect({
                action: 'verse',
                song: selectedSongIndex,
                verse: verseIndex
            })

            dispatch(scrollLyricForVerseSelect(
                scrollLog,
                verseIndex
            ))
        }
    }

    useImperativeHandle(ref, () => dispatchVerse)
    return null
})

export default memo(VerseDispatcher)
