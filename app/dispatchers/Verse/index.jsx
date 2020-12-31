import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { updateAudioStore } from '../../redux/audio/action'
import { updateSelectedStore } from '../../redux/selected/action'
import { updateActivatedStore } from '../../redux/activated/action'
import { mapLyricVerseIndex } from '../../redux/lyric/selector'
import {
    scrollLyricForVerseSelect,
    scrollLyricForPlayAutoScroll,
} from '../../redux/scrollLyric/action'
import { mapSelectedSongIndex } from '../../redux/selected/selector'
import { mapIsAutoScroll } from '../../redux/toggle/selector'

const VerseDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        lyricVerseIndex = useSelector(mapLyricVerseIndex),
        isAutoScroll = useSelector(mapIsAutoScroll)

    const dispatchVerse = ({
        scrollLog,
        verseIndex = 0,
        fromActivated,
        fromPlayer,
    }) => {
        // Only dispatch if verse has changed.
        if (lyricVerseIndex !== verseIndex) {
            dispatch(updateSelectedStore({
                selectedVerseIndex: verseIndex,
            }))

            logSelect({
                action: fromPlayer ? 'playerVerse' : 'verse',
                song: selectedSongIndex,
                verse: verseIndex,
            })

            if (fromActivated) {
                dispatch(updateActivatedStore())
            }

            if (fromPlayer) {
                // If autoScroll is on, scroll to selected verse.
                if (isAutoScroll) {
                    dispatch(scrollLyricForPlayAutoScroll(verseIndex))
                }
            } else {
                dispatch(scrollLyricForVerseSelect(
                    scrollLog,
                    verseIndex
                ))
            }
        }
    }

    useImperativeHandle(ref, () => dispatchVerse)
    return null
})

export default VerseDispatcher
