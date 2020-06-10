// eslint-disable-next-line object-curly-newline
import { forwardRef, useImperativeHandle, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { updateIsScrolling } from '../../redux/scrollOverlay/action'

const ScrollOverlayDispatcher = forwardRef(({ getLyricScrollParent }, ref) => {
    const
        dispatch = useDispatch(),
        [scrollTimeoutId, setScrollTimeoutId] = useState('')

    const _dispatchScroll = prevScrollTop => {
        const nextScrollTop = getLyricScrollParent().scrollTop

        dispatch(updateIsScrolling(prevScrollTop !== nextScrollTop))
    }

    const dispatchScrollTimeout = (timeoutDuration = 50) => {
        const prevScrollTop = getLyricScrollParent().scrollTop

        clearTimeout(scrollTimeoutId)

        setScrollTimeoutId(
            setTimeout(
                () => _dispatchScroll(prevScrollTop),
                timeoutDuration
            )
        )

        dispatch(updateIsScrolling(true))
    }

    useImperativeHandle(ref, () => dispatchScrollTimeout)
    return null
})

ScrollOverlayDispatcher.propTypes = {
    getLyricScrollParent: PropTypes.func.isRequired
}

export default ScrollOverlayDispatcher
