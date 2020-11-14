import { forwardRef, useImperativeHandle, memo } from 'react'
import { useDispatch } from 'react-redux'
import {
    ARROW_LEFT,
    ARROW_RIGHT,
    ARROW_UP
} from '../../../../constants/access'
import {
    decrementPitchIndex,
    incrementPitchIndex,
    resetPitchIndex
} from '../../../../redux/pitch/action'

const PitchNavigation = forwardRef((props, ref) => {
    const
        dispatch = useDispatch()

    const navigatePitch = keyName => {
        switch (keyName) {
            case ARROW_LEFT:
                dispatch(decrementPitchIndex())
                break
            case ARROW_RIGHT:
                dispatch(incrementPitchIndex())
                break
            case ARROW_UP:
                dispatch(resetPitchIndex())
                break
            default:
                return false
        }

        return true
    }

    useImperativeHandle(ref, () => navigatePitch)
    return null
})

export default memo(PitchNavigation)
