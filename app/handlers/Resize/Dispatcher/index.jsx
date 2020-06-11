// eslint-disable-next-line object-curly-newline
import { forwardRef, useImperativeHandle, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { updateEntranceStore } from '../../../redux/entrance/action'
import { updateViewportStore } from '../../../redux/viewport/action'
import { getWindowDimensions } from '../../../helpers/resize/device'

const ResizeDispatcher = forwardRef(({ getRootElement }, ref) => {
    const dispatch = useDispatch()

    const beginEnterTransition = () => {
        logTransition('Theatre can enter.')

        const {
            windowHeight,
            windowWidth
        } = getWindowDimensions(getRootElement())

        dispatch(updateViewportStore({
            windowWidth,
            windowHeight
        }))

        dispatch(updateEntranceStore({ canTheatreEnter: true }))
    }

    useEffect(() => {
        /**
         * As soon as we have a reference to the root container, begin
         * showing theatre.
         */
        logTransition('Theatre can enter.')
        dispatch(updateEntranceStore({ canTheatreEnter: true }))
    }, [])

    useImperativeHandle(ref, () => beginEnterTransition)
    return null
})

ResizeDispatcher.propTypes = {
    getRootElement: PropTypes.func.isRequired
}

export default ResizeDispatcher
