import { forwardRef, useContext, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AudioPlayerContext from '../../contexts/AudioPlayer'
import { updateAccessStore } from '../../redux/access/action'
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
        { callAudioManager } = useContext(AudioPlayerContext),
        dispatch = useDispatch(),
        isSongChangeDone = useSelector(mapIsSongChangeDone),
        selectedSongIndex = useSelector(mapSelectedSongIndex)

    const dispatchSong = ({
        selectedSongIndex: nextSongIndex = 0,
        selectedVerseIndex = 0,
        selectedAnnotationIndex = 0,
        earColumnIndex,
        destinationWormholeIndex,
        fromPlayDispatcher,
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
        if (!fromPlayDispatcher) {
            callAudioManager({
                songIndex: nextSongIndex,
                verseIndex: selectedVerseIndex,
            })
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
