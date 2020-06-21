import {
    forwardRef, useImperativeHandle, useEffect, useState
} from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import {
    updateVerseBarsStore,
    resetVerseBarsQueue
} from '../../redux/verseBars/action'
import { getVerseBarStatus } from './helper'
import { getCursorIndex } from '../../helpers/cursor'
import { mapActivatedVerseIndex } from '../../redux/activated/selector'
import { mapIsDesktopWidth } from '../../redux/device/selector'
import { mapIsLyricExpandable } from '../../redux/lyricExpand/selector'
import { mapLyricDynamicHeight } from '../../redux/lyricHeight/selector'
import { mapSelectedVerseIndex } from '../../redux/selected/selector'
import { mapSliderVerseIndex } from '../../redux/slider/selector'
import { mapIsLyricExpanded } from '../../redux/toggle/selector'
import {
    mapQueuedDetermineVerseBars,
    mapQueuedVerseBarsTimeout
} from '../../redux/verseBars/selector'
import {
    mapWindowHeight,
    mapIsHeightlessLyric,
    mapMenuHeight,
    mapCanSliderMount
} from '../../redux/viewport/selector'

const VerseBarHandler = forwardRef(({ getScrollVerseChild }, ref) => {
    const
        dispatch = useDispatch(),
        activatedVerseIndex = useSelector(mapActivatedVerseIndex),
        isLyricExpandable = useSelector(mapIsLyricExpandable),
        canSliderMount = useSelector(mapCanSliderMount),
        lyricDynamicHeight = useSelector(mapLyricDynamicHeight),
        isHeightlessLyric = useSelector(mapIsHeightlessLyric),
        menuHeight = useSelector(mapMenuHeight),
        selectedVerseIndex = useSelector(mapSelectedVerseIndex),
        sliderVerseIndex = useSelector(mapSliderVerseIndex),
        isLyricExpanded = useSelector(mapIsLyricExpanded),
        queuedDetermineVerseBars = useSelector(mapQueuedDetermineVerseBars),
        queuedVerseBarsTimeout = useSelector(mapQueuedVerseBarsTimeout),
        windowHeight = useSelector(mapWindowHeight),
        isDesktopWidth = useSelector(mapIsDesktopWidth),
        [verseBarsTimeoutId, setVerseBarsTimeoutId] = useState(-1)

    /**
     * This is technically within a timeout closure, but these values shouldn't
     * change from the time the timeout was set.
     */
    const _dispatchVerseBars = ({ sliderVerseIndex = -1 } = {}) => {
        const verseElement = getScrollVerseChild(getCursorIndex(
            sliderVerseIndex,
            activatedVerseIndex,
            selectedVerseIndex
        ))

        // Check for verse element in case we are loading from a logue.
        if (verseElement) {

            const {
                isVerseBarAbove,
                isVerseBarBelow
            } = getVerseBarStatus({
                isLyricExpandable,
                canSliderMount,
                isDesktopWidth,
                windowHeight,
                isLyricExpanded,
                lyricDynamicHeight,
                isHeightlessLyric,
                menuHeight,
                verseElement
            })

            dispatch(updateVerseBarsStore({
                isVerseBarAbove,
                isVerseBarBelow
            }))
        }
    }

    const dispatchVerseBars = (timeoutDuration = 10) => {
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
            dispatchVerseBars(queuedVerseBarsTimeout)
            dispatch(resetVerseBarsQueue())
        }
    }, [queuedDetermineVerseBars])

    useEffect(() => {
        // Determine verse bars here while we are sliding.
        if (sliderVerseIndex > -1) {
            _dispatchVerseBars({ sliderVerseIndex })
        }
    }, [sliderVerseIndex])

    useEffect(() => {
        /**
         * This is needed because a verse might get activated or deactivated,
         * while the selected verse needs to be shown in a verse bar.
         */
        _dispatchVerseBars()
    }, [activatedVerseIndex])

    useImperativeHandle(ref, () => dispatchVerseBars)
    return null
}
)

VerseBarHandler.propTypes = {
    getScrollVerseChild: PropTypes.func.isRequired
}

export default VerseBarHandler
