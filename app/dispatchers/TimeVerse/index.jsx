// Child that knows rules to dispatch time and verse from player.
import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { scrollLyricForPlayAutoScroll } from '../../redux/scrollLyric/action'
import { updateSelectedStore } from '../../redux/selected/action'
import { updateVerseBarsStore } from '../../redux/verseBars/action'
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
        dispatch(updateSelectedStore({
            selectedVerseIndex: nextVerseIndex,
            selectedTime: currentTime
        }))

        logSelect({
            action: 'playerVerse',
            song: selectedSongIndex,
            verse: nextVerseIndex
        })

        // If autoScroll is on, scroll to selected verse.
        if (isAutoScroll) {
            dispatch(scrollLyricForPlayAutoScroll(nextVerseIndex))

        } else {
            /**
             * If manual scroll is on, selected verse may go from above window,
             * view, to in it, to below it. So, determine verse bars.
             */
            dispatch(updateVerseBarsStore({ queuedDetermineVerseBars: true }))
        }
    }

    useImperativeHandle(ref, () => dispatchTimeVerse)
    return null
})

export default TimeVerseDispatcher
