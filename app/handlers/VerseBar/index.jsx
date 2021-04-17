import { forwardRef, useImperativeHandle, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import getDidMountHoc from '../../components/DidMountHoc'
import { updateVerseBarsStatus } from '../../redux/verseBars/action'
import { getVerseBarsStatus } from './helper'
import { getMapVerseCursorIndex } from '../../redux/cursor/selector'
import { mapLyricSectionRect } from '../../redux/lyricSection/selector'
import { mapIsLyricExpanded } from '../../redux/toggle/selector'
import { mapVerseBarsStatus } from '../../redux/verseBars/selector'
import { mapIsHeightlessLyric } from '../../redux/viewport/selector'

const VerseBarHandler = forwardRef(({ didMount, getScrollVerseChild }, ref) => {
    const
        dispatch = useDispatch(),
        verseCursorIndex = useSelector(getMapVerseCursorIndex(true)),
        lyricSectionRect = useSelector(mapLyricSectionRect),
        isHeightlessLyric = useSelector(mapIsHeightlessLyric),
        isLyricExpanded = useSelector(mapIsLyricExpanded),
        verseBarsStatus = useSelector(mapVerseBarsStatus)

    const determineVerseBars = () => {
        const verseElement = getScrollVerseChild(verseCursorIndex)

        // Check for verse element in case we are loading from a logue.
        if (verseElement) {
            const nextVerseBarsStatus = getVerseBarsStatus({
                isLyricExpanded,
                isHeightlessLyric,
                lyricSectionRect,
                verseElement,
            })

            // Prevent unnecessary dispatches.
            if (verseBarsStatus !== nextVerseBarsStatus) {
                dispatch(updateVerseBarsStatus(nextVerseBarsStatus))
            }
        }
    }

    useEffect(() => {
        // Also determine verse bars when verse cursor index has changed.
        if (didMount) {
            determineVerseBars()
        }
    }, [verseCursorIndex])

    useImperativeHandle(ref, () => determineVerseBars)
    return null
},
)

VerseBarHandler.propTypes = {
    didMount: PropTypes.bool.isRequired,
    getScrollVerseChild: PropTypes.func.isRequired,
}

export default getDidMountHoc(VerseBarHandler)
