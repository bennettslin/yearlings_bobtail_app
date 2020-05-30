// Child that knows rules to toggle dots slide. Not needed if just turning off.
import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateToggleStore } from '../../../redux/toggle/action'
import { IS_SELECTED_LOGUE_SELECTOR } from '../../../redux/selected/selectors'
import { IS_DOTS_SLIDE_SHOWN_SELECTOR } from '../../../redux/toggle/selectors'

const DotsSlideDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        isSelectedLogue = useSelector(IS_SELECTED_LOGUE_SELECTOR),
        isDotsSlideShown = useSelector(IS_DOTS_SLIDE_SHOWN_SELECTOR),
        dispatchDotsSlide = (
            // Just toggle unless parent specifies value.
            triedIsDotsSlideShown = !isDotsSlideShown
        ) => {
            // Turning off is always successful.
            const newIsDotsSlideShown = triedIsDotsSlideShown &&

                // ... also must not be in logue.
                !isSelectedLogue

            dispatch(updateToggleStore({
                isDotsSlideShown: newIsDotsSlideShown
            }))

            // Try was successful.
            return newIsDotsSlideShown === triedIsDotsSlideShown
        }

    useImperativeHandle(ref, () => dispatchDotsSlide)
    return null
})

export default DotsSlideDispatcher
