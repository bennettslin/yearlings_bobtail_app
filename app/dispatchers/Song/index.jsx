/**
 * TODO: This is rendered nine times. Consider whether to just listen for a
 * promised song change event instead. For now, there doesn't seem to be any
 * issues.
 */
import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateAccessStore } from '../../redux/access/action'
import { updateAudioStore } from '../../redux/audio/action'
import { resetSongChange } from '../../redux/entrance/action'
import { updateSelectedStore } from '../../redux/selected/action'
import {
    updateEarColumnIndex,
    updateWikiIndices,
} from '../../redux/session/action'
import { updateIsNavExpanded } from '../../redux/toggle/action'
import { getSongsAndLoguesCount } from '../../api/album/songs'
import { mapIsSongChangeDone } from '../../redux/entrance/selector'
import { mapSelectedSongIndex } from '../../redux/selected/selector'

const SongDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        isSongChangeDone = useSelector(mapIsSongChangeDone),
        selectedSongIndex = useSelector(mapSelectedSongIndex)

    const dispatchSong = ({
        isPlayFromLogue = false,
        selectedSongIndex: nextSongIndex = 0,
        selectedVerseIndex = 0,
        selectedAnnotationIndex = 0,
        earColumnIndex,
        destinationWormholeIndex,
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

        dispatch(updateAudioStore({
            queuedPlayFromLogue: isPlayFromLogue,
            queuedSongIndex: nextSongIndex,
        }))

        dispatch(updateWikiIndices())

        if (Number.isFinite(earColumnIndex)) {
            dispatch(updateEarColumnIndex(earColumnIndex))
        }

        dispatch(updateSelectedStore({
            selectedSongIndex: nextSongIndex,
            selectedVerseIndex,
            selectedAnnotationIndex,
        }))

        logSelect({
            action: 'song',
            song: nextSongIndex,
            verse: selectedVerseIndex,
            annotation: selectedAnnotationIndex,
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

        dispatch(updateIsNavExpanded())

        return true
    }

    useImperativeHandle(ref, () => dispatchSong)
    return null
})

export default SongDispatcher
