// eslint-disable-next-line object-curly-newline
import { forwardRef, useImperativeHandle, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { updateIsScrolling } from '../../redux/scrollOverlay/action'
import { mapIsScrolling } from '../../redux/scrollOverlay/selector'

const ScrollOverlayDispatcher = forwardRef(({ getLyricScrollElement }, ref) => {
    const
        dispatch = useDispatch(),
        isScrolling = useSelector(mapIsScrolling),
        [scrollTimeoutId, setScrollTimeoutId] = useState(-1)

    const _dispatchScroll = prevScrollTop => {
        const nextScrollTop = getLyricScrollElement().scrollTop

        dispatch(updateIsScrolling(prevScrollTop !== nextScrollTop))
    }

    const dispatchScroll = (timeoutDuration = 50) => {
        // Prevent too many dispatches while scrolling.
        if (!isScrolling) {
            const prevScrollTop = getLyricScrollElement().scrollTop

            clearTimeout(scrollTimeoutId)

            setScrollTimeoutId(setTimeout(
                () => _dispatchScroll(prevScrollTop),
                timeoutDuration
            ))

            dispatch(updateIsScrolling(true))
        }
    }

    useImperativeHandle(ref, () => dispatchScroll)
    return null
})

ScrollOverlayDispatcher.propTypes = {
    getLyricScrollElement: PropTypes.func.isRequired
}

export default ScrollOverlayDispatcher
