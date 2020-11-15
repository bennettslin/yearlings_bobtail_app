import { forwardRef, useImperativeHandle, memo } from 'react'
import { useDispatch } from 'react-redux'
import {
    ARROW_LEFT,
    ARROW_RIGHT,
    ARROW_UP
} from '../../../../constants/access'
import {
    decrementPitchSegmentIndex,
    incrementPitchSegmentIndex,
    resetPitchSegmentIndex
} from '../../../../redux/pitch/action'

const PitchNavigation = forwardRef((props, ref) => {
    const
        dispatch = useDispatch()

    const navigatePitch = keyName => {
        switch (keyName) {
            case ARROW_LEFT:
                dispatch(decrementPitchSegmentIndex())
                break
            case ARROW_RIGHT:
                dispatch(incrementPitchSegmentIndex())
                break
            case ARROW_UP:
                dispatch(resetPitchSegmentIndex())
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
