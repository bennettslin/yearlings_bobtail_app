import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { useSelector } from 'react-redux'
import ArtupDispatcher from '../../../../dispatchers/Artup'
import { mapSelectedPromoPath } from '../../../../redux/marketing/selector'
import {
    ARROW_LEFT,
    ARROW_RIGHT,
} from '../../../../constants/access'
import { getIsArtupPage } from '../../../../helpers/marketing'

const PromoNavigation = forwardRef((props, ref) => {
    const
        dispatchArtup = useRef(),
        selectedPromoPath = useSelector(mapSelectedPromoPath)

    const getDispatcher = () => {
        if (getIsArtupPage(selectedPromoPath)) {
            return dispatchArtup
        }
    }

    const navigatePromo = keyName => {
        const dispatcher = getDispatcher()

        if (!dispatcher) {
            return false
        }

        let keyWasRegistered = false
        switch (keyName) {
            case ARROW_LEFT:
                keyWasRegistered = dispatchArtup.current({ direction: -1 })
                break
            case ARROW_RIGHT:
                keyWasRegistered = dispatchArtup.current({ direction: 1 })
                break
        }

        return keyWasRegistered
    }

    useImperativeHandle(ref, () => navigatePromo)
    return (
        <ArtupDispatcher {...{ ref: dispatchArtup }} />
    )
})

export default PromoNavigation
