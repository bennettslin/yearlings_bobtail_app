// Child that knows rules to stop propagation.

import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { updateFocusStore } from '../../redux/focus/action'
import { updateAccessStore } from '../../redux/access/action'

const StopPropagationDispatcher = ({ getRefs }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        getRefs({
            dispatchStopPropagation(e) {
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
        })
    }, [])

    return null
}

StopPropagationDispatcher.propTypes = {
    getRefs: PropTypes.func.isRequired
}

export default StopPropagationDispatcher
