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
import { mapIsAutoScroll, mapIsPromoShown } from '../../redux/toggle/selector'
import { resetVerseChange, updateEntranceStore } from '../../redux/entrance/action'
import { logVerseSelect } from './helper'

const VerseDispatcher = forwardRef((props, ref) => {
    const
        { callAudioManager } = useContext(AudioPlayerContext),
        dispatch = useDispatch(),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        lyricVerseIndex = useSelector(mapLyricVerseIndex),
        isAutoScroll = useSelector(mapIsAutoScroll),
        isPromoShown = useSelector(mapIsPromoShown)

    const dispatchVerse = ({
        scrollLog,
        verseIndex = 0,
        fromActivated,
        fromPlayerListen,
        fromPlayerEnd,

    } = {}) => {
        dispatch(resetVerseChange())

        // Only dispatch if verse has changed.
        if (lyricVerseIndex !== verseIndex) {
            dispatch(updateSelectedStore({
                selectedVerseIndex: verseIndex,
                bypassNavigation: isPromoShown,
            }))

            logVerseSelect({
                songIndex: selectedSongIndex,
                verseIndex,
                fromPlayerListen,
                fromPlayerEnd,
            })

            if (fromActivated) {
                dispatch(updateActivatedVerseIndex())
            }

            if (fromPlayerListen || fromPlayerEnd) {
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
                dispatch(scrollLyricForVerseSelect(
                    scrollLog,
                    verseIndex,
                ))
            }

            /**
             * When dispatched from player listen, isPlaying is still true, so
             * audio manager doesn't need to be called again. When dispatched
             * because the player has ended, isPlaying is set back to false. So
             * the whole process of loading the player needs to begin anew.
             */
            if (!fromPlayerListen) {
                callAudioManager({ verseIndex })
            }
        }
    }

    useImperativeHandle(ref, () => dispatchVerse)
    return null
})

export default VerseDispatcher
