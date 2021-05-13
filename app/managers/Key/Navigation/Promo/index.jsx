import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ArtupDispatcher from '../../../../dispatchers/Artup'
import { mapSelectedPromoPath } from '../../../../redux/promo/selector'
import {
    ARROW_LEFT,
    ARROW_RIGHT,
    ARROW_UP,
} from '../../../../constants/access'
import { getIsArtupPage, getIsPromoHomepage } from '../../../../helpers/promo'
import { setSelectedPromoPage } from '../../../../redux/promo/action'

const PromoNavigation = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        dispatchArtup = useRef(),
        selectedPromoPage = useSelector(mapSelectedPromoPath)

    const getDispatcher = () => {
        if (getIsArtupPage(selectedPromoPage)) {
            return dispatchArtup
        }
    }

    const navigateChildPromo = keyName => {
        if (getIsPromoHomepage(selectedPromoPage)) {
            return false
        }

        switch (keyName) {
            case ARROW_UP:
                dispatch(setSelectedPromoPage())
                return true
        }
        return false
    }

    const navigatePitchPromo = keyName => {
        const dispatchPromo = getDispatcher()
        if (!dispatchPromo) {
            return false
        }

        let keyWasRegistered = false

        switch (keyName) {
            case ARROW_LEFT:
                keyWasRegistered = dispatchPromo.current({ direction: -1 })
                break
            case ARROW_RIGHT:
                keyWasRegistered = dispatchPromo.current({ direction: 1 })
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
        <ArtupDispatcher {...{ ref: dispatchArtup }} />
    )
})

export default PromoNavigation
