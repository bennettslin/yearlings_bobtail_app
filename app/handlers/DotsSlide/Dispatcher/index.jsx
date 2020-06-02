// Child that knows rules to toggle dots slide. Not needed if just turning off.
import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateToggleStore } from '../../../redux/toggle/action'
import { mapIsSelectedLogue } from '../../../redux/selected/selectors'
import { mapIsDotsSlideShown } from '../../../redux/toggle/selectors'

const DotsSlideDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        isSelectedLogue = useSelector(mapIsSelectedLogue),
        isDotsSlideShown = useSelector(mapIsDotsSlideShown)

    const dispatchDotsSlide = (
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
