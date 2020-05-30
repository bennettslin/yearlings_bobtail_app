import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateAccessStore } from '../../redux/access/action'
import { updateDotsStore } from '../../redux/dots/action'
import { updateDotsSlideStore } from '../../redux/dotsSlide/action'
import { DOTS_BIT_NUMBER_SELECTOR } from '../../redux/dots/selectors'
import { DOTS_SLIDE_BIT_NUMBER_SELECTOR } from '../../redux/dotsSlide/selectors'
import { getValueAndDotsBitNumberForToggledDotIndex } from './helpers'
import { ORDERED_DOT_KEYS } from '../../constants/dots'

const DotSelectDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        dotsBitNumber = useSelector(DOTS_BIT_NUMBER_SELECTOR),
        dotsSlideBitNumber = useSelector(DOTS_SLIDE_BIT_NUMBER_SELECTOR),
        dispatchSelectDot = dotIndex => {
            const {
                value,
                bitNumber
            } = getValueAndDotsBitNumberForToggledDotIndex({
                dotIndex,
                bitNumber: dotsBitNumber
            })

            dispatch(updateDotsStore({
                dotsBitNumber: bitNumber,
                [ORDERED_DOT_KEYS[dotIndex]]: value
            }))

            // Make most recently toggled dot the accessed dot.
            dispatch(updateAccessStore({
                accessedDotIndex: dotIndex
            }))
            return true
        },

        dispatchActivatedDot = dotIndex => {
            const {
                value,
                bitNumber
            } = getValueAndDotsBitNumberForToggledDotIndex({
                dotIndex,
                bitNumber: dotsSlideBitNumber
            })

            dispatch(updateDotsSlideStore({
                dotsSlideBitNumber: bitNumber,
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
