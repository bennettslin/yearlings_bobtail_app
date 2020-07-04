import {
    forwardRef, useImperativeHandle, useEffect, useState, memo
} from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { updateVerseBarsStatus } from '../../redux/verseBars/action'
import { getVerseBarsStatus } from './helper'
import { mapVerseCursorIndex } from '../../redux/cursor/selector'
import { mapLyricSectionRect } from '../../redux/lyricSection/selector'
import { mapIsLyricExpanded } from '../../redux/toggle/selector'
import { mapVerseBarsStatus } from '../../redux/verseBars/selector'
import { mapIsHeightlessLyric } from '../../redux/viewport/selector'

const VerseBarHandler = forwardRef(({ getScrollVerseChild }, ref) => {
    const
        dispatch = useDispatch(),
        verseCursorIndex = useSelector(mapVerseCursorIndex),
        lyricSectionRect = useSelector(mapLyricSectionRect),
        isHeightlessLyric = useSelector(mapIsHeightlessLyric),
        isLyricExpanded = useSelector(mapIsLyricExpanded),
        verseBarsStatus = useSelector(mapVerseBarsStatus),
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

            // Prevent unnecessary dispatches.
            if (verseBarsStatus !== nextVerseBarsStatus) {
                dispatch(updateVerseBarsStatus(nextVerseBarsStatus))
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
        // Determine verse bars anytime verse cursor index has changed.
        _dispatchVerseBars()
    }, [verseCursorIndex])

    useImperativeHandle(ref, () => determineVerseBars)
    return null
}
)

VerseBarHandler.propTypes = {
    getScrollVerseChild: PropTypes.func.isRequired
}

export default memo(VerseBarHandler)
