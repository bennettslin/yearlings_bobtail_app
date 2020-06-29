/**
 * TODO: This is rendered nine times. Consider whether to just listen for a
 * promised song change event instead. For now, there doesn't seem to be any
 * issues.
 */
import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateAccessStore } from '../../redux/access/action'
import { updateAudioStore } from '../../redux/audio/action'
import { updateSelectedStore } from '../../redux/selected/action'
import {
    updateEarColumnIndex,
    updateWikiIndices
} from '../../redux/session/action'
import { updateIsNavShown } from '../../redux/toggle/action'
import { getStartTimeForVerse } from '../../api/album/time'
import { getSceneIndexForVerse } from '../../api/album/verses'
import { getSongsAndLoguesCount } from '../../api/album/songs'
import { mapSelectedSongIndex } from '../../redux/selected/selector'

const SongDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        selectedSongIndex = useSelector(mapSelectedSongIndex)

    const dispatchSong = ({
        isPlayFromLogue = false,
        selectedSongIndex: nextSongIndex = 0,
        selectedVerseIndex = 0,
        selectedAnnotationIndex = 0,
        earColumnIndex,
        destinationWormholeIndex,
        direction
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

        dispatch(updateAudioStore({
            queuedPlayFromLogue: isPlayFromLogue,
            queuedPlaySongIndex: nextSongIndex
        }))

        const
            selectedSceneIndex = getSceneIndexForVerse(
                nextSongIndex,
                selectedVerseIndex
            ),
            selectedTime = getStartTimeForVerse(
                nextSongIndex,
                selectedVerseIndex
            )

        dispatch(updateWikiIndices())
        if (Number.isFinite(earColumnIndex)) {
            dispatch(updateEarColumnIndex(earColumnIndex))
        }
        dispatch(updateSelectedStore({
            selectedSongIndex: nextSongIndex,
            selectedVerseIndex,
            selectedAnnotationIndex,
            selectedSceneIndex,
            selectedTime
        }))

        logSelect({
            action: 'song',
            song: nextSongIndex,
            verse: selectedVerseIndex,
            annotation: selectedAnnotationIndex,
            scene: selectedSceneIndex
        })

        dispatch(updateAccessStore({
            accessedNavIndex: nextSongIndex,
            accessedAnnotationIndex:
                isWormholeSelected ?
                    selectedAnnotationIndex : 1,
            ...isWormholeSelected && {
                accessedWikiWormholeIndex: destinationWormholeIndex
            }
        }))

        dispatch(updateIsNavShown())

        return true
    }

    useImperativeHandle(ref, () => dispatchSong)
    return null
})

export default SongDispatcher
