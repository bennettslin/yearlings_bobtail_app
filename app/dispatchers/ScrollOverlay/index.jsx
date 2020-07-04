import { forwardRef, useImperativeHandle, useState, memo } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { updateIsScrolling } from '../../redux/hover/action'
import { mapIsScrolling } from '../../redux/hover/selector'

const ScrollOverlayDispatcher = forwardRef(({ getLyricScrollElement }, ref) => {
    const
        dispatch = useDispatch(),
        isScrolling = useSelector(mapIsScrolling),
        [scrollTimeoutId, setScrollTimeoutId] = useState(-1)

    const _dispatchScrollOverlay = prevScrollTop => {
        const nextScrollTop = getLyricScrollElement().scrollTop

        dispatch(updateIsScrolling(prevScrollTop !== nextScrollTop))
    }

    const determineScrollOverlay = (timeoutDuration = 50) => {
        const prevScrollTop = getLyricScrollElement().scrollTop

        clearTimeout(scrollTimeoutId)

        setScrollTimeoutId(setTimeout(
            () => _dispatchScrollOverlay(prevScrollTop),
            timeoutDuration
        ))

        // If isScrolling is already on, don't bother to dispatch again.
        if (!isScrolling) {
            dispatch(updateIsScrolling(true))
        }
    }

    useImperativeHandle(ref, () => determineScrollOverlay)
    return null
})

ScrollOverlayDispatcher.propTypes = {
    getLyricScrollElement: PropTypes.func.isRequired
}

export default memo(ScrollOverlayDispatcher)
