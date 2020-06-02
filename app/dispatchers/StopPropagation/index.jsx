// Child that knows rules to stop propagation.
import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch } from 'react-redux'
import { updateFocusStore } from '../../redux/focus/action'
import { updateAccessStore } from '../../redux/access/action'

const StopPropagationDispatcher = forwardRef((props, ref) => {
    const dispatch = useDispatch()

    const stopPropagation = e => {
        if (e) {
            const { type } = e

            // Turn access off if not from a keyboard event.
            if (type === 'click' || type === 'mousedown') {
                dispatch(updateAccessStore({ isAccessOn: false }))
            }

            if (e.stopPropagation) {
                e.stopPropagation()

                dispatch(updateFocusStore({ queuedFocus: true }))
            }
        }
    }

    useImperativeHandle(ref, () => stopPropagation)
    return null
})

export default StopPropagationDispatcher
