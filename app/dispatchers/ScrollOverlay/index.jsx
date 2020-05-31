// eslint-disable-next-line object-curly-newline
import { forwardRef, useImperativeHandle, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { updateIsScrolling } from '../../redux/scrollOverlay/action'

const ScrollOverlayDispatcher = forwardRef(({ getLyricElement }, ref) => {
    const
        dispatch = useDispatch(),
        [scrollTimeoutId, setScrollTimeoutId] = useState(''),
        _dispatchScroll = prevScrollTop => {
            const nextScrollTop = getLyricElement().scrollTop

            dispatch(updateIsScrolling(prevScrollTop !== nextScrollTop))
        },
        dispatchScrollTimeout = (timeoutDuration = 50) => {
            const prevScrollTop = getLyricElement().scrollTop

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
    getLyricElement: PropTypes.func.isRequired
}

export default ScrollOverlayDispatcher
