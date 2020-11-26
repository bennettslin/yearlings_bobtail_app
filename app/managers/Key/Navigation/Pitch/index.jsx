import React, { forwardRef, useImperativeHandle, useRef, memo } from 'react'
import PitchDispatcher from '../../../../dispatchers/Pitch'
import {
    ARROW_LEFT,
    ARROW_RIGHT,
    ARROW_UP
} from '../../../../constants/access'

const PitchNavigation = forwardRef((props, ref) => {
    const dispatchPitch = useRef()

    const navigatePitch = keyName => {
        switch (keyName) {
            case ARROW_LEFT:
                dispatchPitch.current({ direction: -1 })
                break
            case ARROW_RIGHT:
                dispatchPitch.current({ direction: 1 })
                break
            case ARROW_UP:
                dispatchPitch.current({ pitchSegmentIndex: 0 })
                break
            default:
                return false
        }

        return true
    }

    useImperativeHandle(ref, () => navigatePitch)
    return (
        <PitchDispatcher {...{ ref: dispatchPitch }} />
    )
})

export default memo(PitchNavigation)
