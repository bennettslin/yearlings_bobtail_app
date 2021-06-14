import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ArtupDispatcher from '../../../../dispatchers/Artup'
import Artup2Dispatcher from '../../../../dispatchers/Artup2'
import { mapSelectedPromoKey } from '../../../../redux/promo/selector'
import {
    ARROW_LEFT,
    ARROW_RIGHT,
    PROMO_TOGGLE_KEY,
} from '../../../../constants/access'
import {
    getIsArtupPage,
    getIsArtup2Page,
    getIsPromoHomepage,
} from '../../../../helpers/promo'
import { setSelectedPromoKey } from '../../../../redux/promo/action'

const PromoNavigation = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        dispatchArtup = useRef(),
        dispatchArtup2 = useRef(),
        selectedPromoKey = useSelector(mapSelectedPromoKey)

    const getDispatcher = () => {
        if (getIsArtupPage(selectedPromoKey)) {
            return dispatchArtup
        } else if (getIsArtup2Page(selectedPromoKey)) {
            return dispatchArtup2
        }
    }

    const navigateChildPromo = keyName => {
        if (getIsPromoHomepage(selectedPromoKey)) {
            return false
        }

        switch (keyName) {
            case PROMO_TOGGLE_KEY:
                dispatch(setSelectedPromoKey())
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
        <>
            <ArtupDispatcher {...{ ref: dispatchArtup }} />
            <Artup2Dispatcher {...{ ref: dispatchArtup2 }} />
        </>
    )
})

export default PromoNavigation
