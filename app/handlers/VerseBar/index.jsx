import {
    forwardRef, useImperativeHandle, useEffect, useState, memo
} from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import {
    updateVerseBarsStore,
    resetVerseBarsQueue,
    resetVerseBars
} from '../../redux/verseBars/action'
import { getVerseBarsStatus } from './helper'
import { mapIsActivated } from '../../redux/activated/selector'
import { mapVerseCursorIndex } from '../../redux/cursor/selector'
import { mapLyricSectionRect } from '../../redux/lyricSection/selector'
import {
    mapSliderVerseIndex,
    mapIsSliderTouched
} from '../../redux/slider/selector'
import { mapIsLyricExpanded } from '../../redux/toggle/selector'
import {
    mapVerseBarsStatus,
    mapQueuedDetermineVerseBars
} from '../../redux/verseBars/selector'
import { mapIsHeightlessLyric } from '../../redux/viewport/selector'

const VerseBarHandler = forwardRef(({ getScrollVerseChild }, ref) => {
    const
        dispatch = useDispatch(),
        isActivated = useSelector(mapIsActivated),
        verseCursorIndex = useSelector(mapVerseCursorIndex),
        lyricSectionRect = useSelector(mapLyricSectionRect),
        isHeightlessLyric = useSelector(mapIsHeightlessLyric),
        isSliderTouched = useSelector(mapIsSliderTouched),
        sliderVerseIndex = useSelector(mapSliderVerseIndex),
        isLyricExpanded = useSelector(mapIsLyricExpanded),
        verseBarsStatus = useSelector(mapVerseBarsStatus),
        queuedDetermineVerseBars = useSelector(mapQueuedDetermineVerseBars),
        [verseBarsTimeoutId, setVerseBarsTimeoutId] = useState(-1)

    /**
     * This is technically within a timeout closure, but these values shouldn't
     * change from the time the timeout was set.
     */
    const _dispatchVerseBars = () => {
        const verseElement = getScrollVerseChild(verseCursorIndex)

        // Check for verse element in case we are loading from a logue.
        if (verseElement) {
            const nextVerseBarsStatus = getVerseBarsStatus({
                isLyricExpanded,
                isHeightlessLyric,
                lyricSectionRect,
                verseElement
            })

            // Prevent too many dispatches during scrolling.
            if (verseBarsStatus !== nextVerseBarsStatus) {
                dispatch(updateVerseBarsStore({
                    verseBarsStatus: nextVerseBarsStatus
                }))
            }
        }
    }

    const determineVerseBars = (timeoutDuration = 10) => {
        /**
         * It seems to help to both make the call immediately, and then set a
         * timeout for it. For now, I don't think there's any performance hit.
         */
        _dispatchVerseBars()

        clearTimeout(verseBarsTimeoutId)

        setVerseBarsTimeoutId(setTimeout(
            _dispatchVerseBars,
            timeoutDuration
        ))
    }

    useEffect(() => {
        if (queuedDetermineVerseBars) {
            /**
             * Make duration long enough for Chrome, Firefox, and Safari. 150
             * is fine for lyric page up and down, but 300 seems to be needed
             * for navigating between annotations.
             */
            determineVerseBars(150)
            dispatch(resetVerseBarsQueue())
        }
    }, [queuedDetermineVerseBars])

    useEffect(() => {
        /**
         * Determine verse bars here while we are sliding, as soon as slider is
         * touched.
         */
        if (sliderVerseIndex > -1 && isSliderTouched) {
            _dispatchVerseBars()
        }
    }, [sliderVerseIndex])

    useEffect(() => {
        if (isActivated) {
            dispatch(resetVerseBars())
        }
    }, [isActivated])

    useImperativeHandle(ref, () => determineVerseBars)
    return null
}
)

VerseBarHandler.propTypes = {
    getScrollVerseChild: PropTypes.func.isRequired
}

export default memo(VerseBarHandler)
