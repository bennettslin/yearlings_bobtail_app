import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateAccessStore } from '../../redux/access/action'
import { updateDotsStore } from '../../redux/dots/action'
import { updateDotsSlideStore } from '../../redux/dotsSlide/action'
import { setNewValueInBitNumber } from '../../helpers/bit'
import { getDotKeysFromBitNumber } from '../../helpers/dot'
import { ORDERED_DOT_KEYS } from '../../constants/dots'
import { DOTS_BIT_NUMBER_SELECTOR } from '../../redux/dots/selectors'
import { DOTS_SLIDE_BIT_NUMBER_SELECTOR } from '../../redux/dotsSlide/selectors'

const DotSelectDispatcher = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        dotsBitNumber = useSelector(DOTS_BIT_NUMBER_SELECTOR),
        dotsSlideBitNumber = useSelector(DOTS_SLIDE_BIT_NUMBER_SELECTOR),
        dispatchSelectDot = (selectedDotIndex) => {
            // TODO: Make a general helper that toggles the bit number for both.
            const
                selectedDotKeys = getDotKeysFromBitNumber(dotsBitNumber),
                selectedDotKey = ORDERED_DOT_KEYS[selectedDotIndex],
                isSelected = !selectedDotKeys[selectedDotKey],

                newDotsBitNumber = setNewValueInBitNumber({
                    keysArray: ORDERED_DOT_KEYS,
                    bitNumber: dotsBitNumber,
                    key: selectedDotKey,
                    value: isSelected
                })

            dispatch(updateDotsStore({
                dotsBitNumber: newDotsBitNumber,
                [selectedDotKey]: isSelected
            }))

            // Make most recently toggled dot the accessed dot.
            dispatch(updateAccessStore({
                accessedDotIndex: selectedDotIndex
            }))
            return true
        },

        dispatchActivatedDot = (activatedDotIndex) => {
            // TODO: Make a general helper that toggles the bit number for both.
            const
                activatedDotKeys = getDotKeysFromBitNumber(dotsSlideBitNumber),
                activatedDotKey = ORDERED_DOT_KEYS[activatedDotIndex],
                isActivated = !activatedDotKeys[activatedDotKey],

                newDotsSlideBitNumber = setNewValueInBitNumber({
                    keysArray: ORDERED_DOT_KEYS,
                    bitNumber: dotsSlideBitNumber,
                    key: activatedDotKey,
                    value: isActivated
                })

            dispatch(updateDotsSlideStore({
                dotsSlideBitNumber: newDotsSlideBitNumber,
                [activatedDotKey]: isActivated
            }))
        }

    useImperativeHandle(ref, () => ({
        dispatchSelectDot,
        dispatchActivatedDot
    }))
    return null
})

export default DotSelectDispatcher
