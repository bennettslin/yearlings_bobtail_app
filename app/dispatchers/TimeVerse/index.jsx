// Child that knows rules to dispatch time and verse from player.
import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateEntranceStore } from '../../redux/entrance/action'
import { updateScrollLyricStore } from '../../redux/scrollLyric/action'
import { updateSelectedStore } from '../../redux/selected/action'
import { updateVerseBarsStore } from '../../redux/verseBars/action'
import { getSceneIndexForVerse } from '../../api/album/verses'
import { mapSelectedSongIndex } from '../../redux/selected/selector'
import { mapIsAutoScroll } from '../../redux/toggle/selector'

const TimeVerseDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        isAutoScroll = useSelector(mapIsAutoScroll)

    const dispatchTimeVerse = ({
        currentTime = 0,
        nextVerseIndex = 0
    } = {}) => {
        // This is only ever called by the player.
        const selectedSceneIndex = getSceneIndexForVerse(
            selectedSongIndex,
            nextVerseIndex
        )

        dispatch(updateSelectedStore({
            selectedVerseIndex: nextVerseIndex,
            selectedSceneIndex,
            selectedTime: currentTime
        }))

        logSelect({
            action: 'playerVerse',
            song: selectedSongIndex,
            verse: nextVerseIndex,
            scene: selectedSceneIndex
        })

        // If autoScroll is on, scroll to selected verse.
        if (isAutoScroll) {
            dispatch(updateScrollLyricStore({
                scrollLyricLog:
                    `Player autoScroll to verse ${nextVerseIndex}.`,
                scrollLyricByVerse: true,
                scrollLyricIndex: nextVerseIndex,
                scrollLyricFromAutoScroll: true,
                queuedSceneChangeExitScrollCallback: true
            }))

        } else {
            /**
             * If manual scroll is on, selected verse may go from above window,
             * view, to in it, to below it. So, determine verse bars.
             */
            dispatch(updateVerseBarsStore({ queuedDetermineVerseBars: true }))

            // There is no scrolling, so complete scene change exit right away.
            logTransition('Scene scroll did exit from time verse.')
            dispatch(updateEntranceStore({ didSceneScrollExit: true }))
        }
    }

    useImperativeHandle(ref, () => dispatchTimeVerse)
    return null
})

export default TimeVerseDispatcher
