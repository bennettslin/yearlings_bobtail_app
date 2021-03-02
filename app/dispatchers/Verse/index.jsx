import { forwardRef, useContext, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AudioPlayerContext from '../../contexts/AudioPlayer'
import { updateSelectedStore } from '../../redux/selected/action'
import { updateActivatedVerseIndex } from '../../redux/activated/action'
import { mapLyricVerseIndex } from '../../redux/lyric/selector'
import {
    scrollLyricForVerseSelect,
    scrollLyricForPlayAutoScroll,
} from '../../redux/scrollLyric/action'
import { mapSelectedSongIndex } from '../../redux/selected/selector'
import { mapIsAutoScroll } from '../../redux/toggle/selector'

const VerseDispatcher = forwardRef((props, ref) => {
    const
        { callAudioManager } = useContext(AudioPlayerContext),
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
                dispatch(updateActivatedVerseIndex())
            }

            if (fromPlayer) {
                // If autoScroll is on, scroll to selected verse.
                if (isAutoScroll) {
                    dispatch(scrollLyricForPlayAutoScroll(verseIndex))
                }
            } else {
                callAudioManager({ verseIndex })
                dispatch(scrollLyricForVerseSelect(
                    scrollLog,
                    verseIndex,
                ))
            }
        }
    }

    useImperativeHandle(ref, () => dispatchVerse)
    return null
})

export default VerseDispatcher
