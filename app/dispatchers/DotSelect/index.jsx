import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateAccessStore } from '../../redux/access/action'
import { updateDotsStore } from '../../redux/dots/action'
import { updateDotsSlideStore } from '../../redux/dotsSlide/action'
import { mapSelectedDotsBit } from '../../redux/dots/selectors'
import { mapDotsSlideBit } from '../../redux/dotsSlide/selectors'
import { getValueAndDotsBitForToggledDotIndex } from './helpers'
import { ORDERED_DOT_KEYS } from '../../constants/dots'

const DotSelectDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        selectedDotsBit = useSelector(mapSelectedDotsBit),
        dotsSlideBit = useSelector(mapDotsSlideBit)

    const dispatchSelectDot = dotIndex => {
        const {
            value,
            dotsBit
        } = getValueAndDotsBitForToggledDotIndex({
            dotIndex,
            dotsBit: selectedDotsBit
        })

        dispatch(updateDotsStore({
            selectedDotsBit: dotsBit,
            [ORDERED_DOT_KEYS[dotIndex]]: value
        }))

        // Make most recently toggled dot the accessed dot.
        dispatch(updateAccessStore({
            accessedDotIndex: dotIndex
        }))
        return true
    }

    const dispatchActivatedDot = dotIndex => {
        const {
            value,
            dotsBit
        } = getValueAndDotsBitForToggledDotIndex({
            dotIndex,
            dotsBit: dotsSlideBit
        })

        dispatch(updateDotsSlideStore({
            dotsSlideBit: dotsBit,
            [ORDERED_DOT_KEYS[dotIndex]]: value
        }))
    }

    useImperativeHandle(ref, () => ({
        dispatchSelectDot,
        dispatchActivatedDot
    }))
    return null
})

export default DotSelectDispatcher
