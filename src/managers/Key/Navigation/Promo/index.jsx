import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { mapSelectedPromoKey } from '../../../../redux/promo/selector'
import {
    ARROW_LEFT,
    ARROW_RIGHT,
    PROMO_TOGGLE_KEY,
} from '../../../../constants/access'
import { getIsPromoHomepage } from '../../../../helpers/promo'
import { resetPromo } from '../../../../redux/promo/action'
import PitchDispatcher from '../../../../dispatchers/Pitch'

const PromoNavigation = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        dispatchPitch = useRef(),
        selectedPromoKey = useSelector(mapSelectedPromoKey)

    const navigateChildPromo = keyName => {
        if (getIsPromoHomepage(selectedPromoKey)) {
            return false
        }

        switch (keyName) {
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
        <PitchDispatcher {...{ ref: dispatchPitch }} />
    )
})

export default PromoNavigation
