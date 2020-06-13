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
import { getCursorIndex } from '../../helpers/verse'
import { mapActivatedVerseIndex } from '../../redux/activated/selectors'
import { mapIsDesktopWidth } from '../../redux/device/selectors'
import { mapIsLyricExpandable } from '../../redux/lyricExpand/selectors'
import { mapLyricDynamicHeight } from '../../redux/lyricHeight/selectors'
import { mapSelectedVerseIndex } from '../../redux/selected/selectors'
import { mapSliderVerseIndex } from '../../redux/slider/selectors'
import { mapIsLyricExpanded } from '../../redux/toggle/selectors'
import {
    mapQueuedDetermineVerseBars,
    mapQueuedVerseBarsTimeout
} from '../../redux/verseBars/selectors'
import {
    mapWindowHeight,
    mapIsHeightlessLyric,
    mapMenuHeight,
    mapCanSliderMount
} from '../../redux/viewport/selectors'

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
        [verseBarsTimeoutId, setVerseBarsTimeoutId] = useState('')

    const _dispatchVerseBars = ({ sliderVerseIndex = -1 } = {}) => {
        const verseElement = getScrollVerseChild(getCursorIndex(
            sliderVerseIndex,
            activatedVerseIndex,
            selectedVerseIndex
        ))

        // Check for verse element in case we are loading from a logue.
        if (verseElement) {

            // TODO: Make this a selector. Maybe by making a bit number?
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

        setVerseBarsTimeoutId(
            setTimeout(
                _dispatchVerseBars,
                timeoutDuration
            )
        )
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
