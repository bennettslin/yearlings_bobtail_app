import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateActivatedStore } from '../../redux/activated/action'
import { updateAudioStore } from '../../redux/audio/action'
import { updateScrollLyricStore } from '../../redux/scrollLyric/action'
import { updateSelectedStore } from '../../redux/selected/action'
import { resetVerseBars } from '../../redux/verseBars/action'
import { getStartTimeForVerse } from '../../album/api/time'
import { getSceneIndexForVerse } from '../../album/api/verses'
import { mapSelectedSongIndex } from '../../redux/selected/selectors'

const VerseDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        dispatchVerse = ({
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
                queuedPlaySongIndex: selectedSongIndex,
                queuedPlayVerseIndex: selectedVerseIndex
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
                queuedScrollLyricLog: scrollLog,
                queuedScrollLyricByVerse: true,
                queuedScrollLyricIndex: selectedVerseIndex,
                queuedScrollLyricAlways: true,
                queuedSceneChangeExitScrollCallback: true
            }))
        }

    useImperativeHandle(ref, () => dispatchVerse)
    return null
})

export default VerseDispatcher
