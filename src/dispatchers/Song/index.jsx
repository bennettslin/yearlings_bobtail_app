import { forwardRef, useContext, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AudioPlayerContext from '../../contexts/AudioPlayer'
import { updateAccessStore } from '../../redux/access/action'
import { resetSongChange, resetVerseChange } from '../../redux/entrance/action'
import { updateLyricStore } from '../../redux/lyric/action'
import { updateSelectedStore } from '../../redux/selected/action'
import {
    updateEarColumnIndex,
    updateWikiIndices,
} from '../../redux/session/action'
import { updateIsNavExpanded } from '../../redux/toggle/action'
import { getSongsAndLoguesCount } from '../../endpoint/album/songs'
import { mapIsSongChangeDone } from '../../redux/entrance/selector'
import { mapSelectedSongIndex } from '../../redux/selected/selector'
import { logSongSelect } from './helper'

const SongDispatcher = forwardRef((props, ref) => {
    const
        { callAudioManager } = useContext(AudioPlayerContext),
        dispatch = useDispatch(),
        isSongChangeDone = useSelector(mapIsSongChangeDone),
        selectedSongIndex = useSelector(mapSelectedSongIndex)

    const dispatchSong = ({
        selectedSongIndex: nextSongIndex = 0,
        selectedVerseIndex = 0,
        selectedAnnotationIndex = 0,
        doBrowserBypassNavigation = false,
        earColumnIndex,
        destinationWormholeIndex,
        fromPlayDispatcher,
        fromPlayerContinue,
        fromPlayerEnd,
        direction,
    }) => {
        const isWormholeSelected = Boolean(destinationWormholeIndex)

        // Called from audio section's previous or next buttons.
        if (direction) {
            nextSongIndex = selectedSongIndex + direction

            if (
                nextSongIndex < 0 ||
                nextSongIndex >= getSongsAndLoguesCount()
            ) {
                return false
            }
        }

        /**
         * Song changed, so begin transition if not already in place. Doing
         * this immediately, rather than waiting another lifecycle, for UI
         * purposes.
         */
        if (isSongChangeDone) {
            dispatch(resetSongChange())
        }

        dispatch(updateWikiIndices())

        if (Number.isFinite(earColumnIndex)) {
            dispatch(updateEarColumnIndex(earColumnIndex))
        }

        // If from play dispatcher, audio was already called.
        if (
            !fromPlayDispatcher &&
            !fromPlayerContinue &&
            !fromPlayerEnd
        ) {
            callAudioManager({
                songIndex: nextSongIndex,
                verseIndex: selectedVerseIndex,
            })
        }

        dispatch(resetVerseChange())

        // Prevent popup annotation from persisting upon song change.
        dispatch(updateLyricStore({ lyricAnnotationIndex: 0 }))

        dispatch(updateSelectedStore({
            selectedSongIndex: nextSongIndex,
            selectedVerseIndex,
            selectedAnnotationIndex,
            doBrowserBypassNavigation,
        }))

        logSongSelect({
            songIndex: nextSongIndex,
            verseIndex: selectedVerseIndex,
            annotationIndex: selectedAnnotationIndex,
            fromPlayerContinue,
            fromPlayerEnd,
        })

        dispatch(updateAccessStore({
            accessedNavIndex: nextSongIndex,
            accessedAnnotationIndex:
                isWormholeSelected ?
                    selectedAnnotationIndex : 1,
            ...isWormholeSelected && {
                accessedWikiWormholeIndex: destinationWormholeIndex,
            },
        }))

        // Assume after song is selected, user no longer wants nav shown.
        dispatch(updateIsNavExpanded())

        return true
    }

    useImperativeHandle(ref, () => dispatchSong)
    return null
})

export default SongDispatcher
