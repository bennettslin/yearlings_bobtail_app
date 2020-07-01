// eslint-disable-next-line object-curly-newline
import { forwardRef, useImperativeHandle, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { updateIsScrolling } from '../../redux/scrollOverlay/action'

const ScrollOverlayDispatcher = forwardRef(({ getLyricScrollElement }, ref) => {
    const
        dispatch = useDispatch(),
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

        dispatch(updateIsScrolling(true))
    }

    useImperativeHandle(ref, () => determineScrollOverlay)
    return null
})

ScrollOverlayDispatcher.propTypes = {
    getLyricScrollElement: PropTypes.func.isRequired
}

export default ScrollOverlayDispatcher
