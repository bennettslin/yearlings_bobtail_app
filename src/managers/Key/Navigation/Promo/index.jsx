import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { useDispatch } from 'react-redux'
import {
    ARROW_LEFT,
    ARROW_RIGHT,
    COPY_URL_KEY,
    PROMO_TOGGLE_KEY,
} from '../../../../constants/access'
import { resetPromo } from '../../../../redux/promo/action'
import CopyUrlDispatcher from '../../../../dispatchers/CopyUrl'
import PitchDispatcher from '../../../../dispatchers/Pitch'

const PromoNavigation = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        copyUrlDispatcher = useRef(),
        dispatchPitch = useRef()

    const navigateChildPromo = keyName => {
        switch (keyName) {
            case COPY_URL_KEY:
                return copyUrlDispatcher.current.copyUrl()
            case PROMO_TOGGLE_KEY:
                dispatch(resetPromo())
                return true
        }
        return false
    }

    const navigatePitchPromo = keyName => {
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

    const navigatePromo = keyName => (
        navigateChildPromo(keyName) ||
        navigatePitchPromo(keyName)
    )

    useImperativeHandle(ref, () => navigatePromo)
    return (
        <>
            <CopyUrlDispatcher {...{ ref: copyUrlDispatcher }} />
            <PitchDispatcher {...{ ref: dispatchPitch }} />
        </>
    )
})

export default PromoNavigation
