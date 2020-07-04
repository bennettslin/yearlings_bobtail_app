import {
    forwardRef, useImperativeHandle, useEffect, useRef, useState, memo
} from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import {
    updateVerseBarsStore,
    resetVerseBarsQueue
} from '../../redux/verseBars/action'
import { getVerseBarsStatus } from './helper'
import { mapActivatedVerseIndex } from '../../redux/activated/selector'
import { mapVerseCursorIndex } from '../../redux/cursor/selector'
import { mapLyricSectionRect } from '../../redux/lyricSection/selector'
import {
    mapSliderVerseIndex,
    mapIsSliderTouched
} from '../../redux/slider/selector'
import { mapIsLyricExpanded } from '../../redux/toggle/selector'
import {
    mapVerseBarsStatus,
    mapQueuedDetermineVerseBars,
    mapQueuedVerseBarsTimeout
} from '../../redux/verseBars/selector'
import { mapIsHeightlessLyric } from '../../redux/viewport/selector'

const VerseBarHandler = forwardRef(({ getScrollVerseChild }, ref) => {
    const
        dispatch = useDispatch(),
        didMount = useRef(),
        verseCursorIndex = useSelector(mapVerseCursorIndex),
        activatedVerseIndex = useSelector(mapActivatedVerseIndex),
        lyricSectionRect = useSelector(mapLyricSectionRect),
        isHeightlessLyric = useSelector(mapIsHeightlessLyric),
        isSliderTouched = useSelector(mapIsSliderTouched),
        sliderVerseIndex = useSelector(mapSliderVerseIndex),
        isLyricExpanded = useSelector(mapIsLyricExpanded),
        verseBarsStatus = useSelector(mapVerseBarsStatus),
        queuedDetermineVerseBars = useSelector(mapQueuedDetermineVerseBars),
        queuedVerseBarsTimeout = useSelector(mapQueuedVerseBarsTimeout),
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
        console.log('determine verse bars')
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
            determineVerseBars(queuedVerseBarsTimeout)
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
        if (didMount.current) {
            /**
             * This is needed because a verse might get activated or
             * deactivated, while the selected verse needs to be shown in a
             * verse bar.
             */
            _dispatchVerseBars()
        } else {
            didMount.current = true
        }
    }, [activatedVerseIndex])

    useImperativeHandle(ref, () => determineVerseBars)
    return null
}
)

VerseBarHandler.propTypes = {
    getScrollVerseChild: PropTypes.func.isRequired
}

export default memo(VerseBarHandler)
