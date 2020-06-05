// eslint-disable-next-line object-curly-newline
import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateAccessStore } from '../../../../redux/access/action'
import DotSelectDispatcher from '../../../../dispatchers/DotSelect'
import {
    ARROW_LEFT,
    ARROW_RIGHT,
    ARROW_UP,
    ARROW_DOWN,
    ENTER
} from '../../../../constants/access'
import { DOT_KEYS_COUNT } from '../../../../constants/dots'
import {
    mapIsAccessOn,
    mapAccessedDotIndex
} from '../../../../redux/access/selectors'

const DotsSlideNavigation = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        dispatchSelectDot = useRef(),
        isAccessOn = useSelector(mapIsAccessOn),
        accessedDotIndex = useSelector(mapAccessedDotIndex)

    const navigateDotsSlide = (keyName) => {
        if (isAccessOn) {
            let nextAccessedDotIndex

            switch (keyName) {
                case ARROW_LEFT:
                    nextAccessedDotIndex = (accessedDotIndex + (DOT_KEYS_COUNT - 1)) % DOT_KEYS_COUNT
                    break
                case ARROW_RIGHT:
                    nextAccessedDotIndex = (accessedDotIndex + 1) % DOT_KEYS_COUNT
                    break
                case ARROW_UP:
                    if (accessedDotIndex >= DOT_KEYS_COUNT / 2) {
                        nextAccessedDotIndex = (accessedDotIndex + (DOT_KEYS_COUNT / 2)) % DOT_KEYS_COUNT
                    } else if (accessedDotIndex !== 0) {
                        nextAccessedDotIndex = (accessedDotIndex + (DOT_KEYS_COUNT / 2) - 1) % DOT_KEYS_COUNT
                    } else {
                        nextAccessedDotIndex = (accessedDotIndex + (DOT_KEYS_COUNT - 1)) % DOT_KEYS_COUNT
                    }
                    break
                case ARROW_DOWN:
                    if (accessedDotIndex < DOT_KEYS_COUNT / 2) {
                        nextAccessedDotIndex = (accessedDotIndex + (DOT_KEYS_COUNT / 2)) % DOT_KEYS_COUNT
                    } else if (accessedDotIndex !== DOT_KEYS_COUNT - 1) {
                        nextAccessedDotIndex = (accessedDotIndex + (DOT_KEYS_COUNT / 2) + 1) % DOT_KEYS_COUNT
                    } else {
                        nextAccessedDotIndex = (accessedDotIndex + 1) % DOT_KEYS_COUNT
                    }
                    break
                case ENTER:
                    dispatchSelectDot.current.dispatchSelectDot(accessedDotIndex)
                    return true
                default:
                    return false
            }

            dispatch(updateAccessStore({
                accessedDotIndex: nextAccessedDotIndex
            }))
        }
        return true
    }

    useImperativeHandle(ref, () => navigateDotsSlide)
    return (
        <DotSelectDispatcher {...{ ref: dispatchSelectDot }} />
    )
})

export default DotsSlideNavigation
