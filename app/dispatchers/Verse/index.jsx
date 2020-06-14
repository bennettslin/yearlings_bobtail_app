import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateActivatedStore } from '../../redux/activated/action'
import { updateAudioStore } from '../../redux/audio/action'
import { updateScrollLyricStore } from '../../redux/scrollLyric/action'
import { updateSelectedStore } from '../../redux/selected/action'
import { resetVerseBars } from '../../redux/verseBars/action'
import { getStartTimeForVerse } from '../../api/album/time'
import { getSceneIndexForVerse } from '../../api/album/verses'
import { mapSelectedSongIndex } from '../../redux/selected/selector'

const VerseDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        selectedSongIndex = useSelector(mapSelectedSongIndex)

    const dispatchVerse = ({
        selectedVerseIndex = 0,
        scrollLog
    }) => {

        const
            selectedSceneIndex = getSceneIndexForVerse(
                selectedSongIndex,
                selectedVerseIndex
            ),
            selectedTime = getStartTimeForVerse(
                selectedSongIndex,
                selectedVerseIndex
            )

        dispatch(updateAudioStore({
            queuedPlaySongIndex: selectedSongIndex
        }))

        dispatch(updateSelectedStore({
            selectedVerseIndex,
            selectedSceneIndex,
            selectedTime
        }))

        logSelect({
            action: 'verse',
            song: selectedSongIndex,
            verse: selectedVerseIndex,
            scene: selectedSceneIndex
        })

        // Ensure that no verse is activated.
        dispatch(updateActivatedStore())

        // Selecting a verse necessarily resets the verse bars.
        dispatch(resetVerseBars())

        dispatch(updateScrollLyricStore({
            scrollLyricLog: scrollLog,
            scrollLyricByVerse: true,
            scrollLyricIndex: selectedVerseIndex,
            scrollLyricAlways: true,
            queuedSceneChangeExitScrollCallback: true
        }))
    }

    useImperativeHandle(ref, () => dispatchVerse)
    return null
})

export default VerseDispatcher
