import { forwardRef, useContext, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AudioPlayerContext from '../../contexts/AudioPlayer'
import { updateSelectedStore } from '../../redux/selected/action'
import { updateActivatedVerseIndex } from '../../redux/activated/action'
import { mapLyricVerseIndex } from '../../redux/lyric/selector'
import {
    scrollLyricForVerseSelect,
    autoScrollLyricForPlay,
} from '../../redux/scrollLyric/action'
import { mapSelectedSongIndex } from '../../redux/selected/selector'
import { mapIsAutoScroll } from '../../redux/toggle/selector'
import { updateEntranceStore } from '../../redux/entrance/action'
import { logVerseSelect } from './helper'

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
        fromPlayerListen,
        fromPlayerRepeat,

    } = {}) => {
        // Only dispatch if verse has changed.
        if (lyricVerseIndex !== verseIndex) {
            dispatch(updateSelectedStore({
                selectedVerseIndex: verseIndex,
            }))

            logVerseSelect({
                selectedSongIndex,
                verseIndex,
                fromPlayerListen,
                fromPlayerRepeat,
            })

            if (fromActivated) {
                dispatch(updateActivatedVerseIndex())
            }

            if (fromPlayerListen) {
                // If autoScroll is on, scroll to selected verse.
                if (isAutoScroll) {
                    dispatch(autoScrollLyricForPlay(verseIndex))
                } else {
                    /**
                     * Since there will be no lyric scroll to block the scene
                     * transition, go ahead and unblock it now.
                     */
                    dispatch(updateEntranceStore({ isSceneScrollComplete: true }))
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
