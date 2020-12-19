import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import PitchDispatcher from '../../../../dispatchers/Pitch'
import {
    ARROW_LEFT,
    ARROW_RIGHT
} from '../../../../constants/access'

const PitchNavigation = forwardRef((props, ref) => {
    const dispatchPitch = useRef()

    const navigatePitch = keyName => {
        let keyWasRegistered = false
        switch (keyName) {
            case ARROW_LEFT:
                keyWasRegistered = dispatchPitch.current({ direction: -1 })
                break
            case ARROW_RIGHT:
                keyWasRegistered = dispatchPitch.current({ direction: 1 })
                break
        }

        return keyWasRegistered
    }

    useImperativeHandle(ref, () => navigatePitch)
    return (
        <PitchDispatcher {...{ ref: dispatchPitch }} />
    )
})

export default PitchNavigation
