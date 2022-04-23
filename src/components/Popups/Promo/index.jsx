// Popup container for promo section.
import React, { forwardRef, memo, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import getDidMountHoc from '../../../hocs/DidMountHoc'
import Popup from '../../Popup'
import Promo from '../../Promo'
import PromoDispatcher from '../../../dispatchers/Promo'
import { mapIsPromoShown } from '../../../redux/toggle/selector'
import './style'

const PromoPopup = forwardRef(({ didMount }, ref) => {
    const
        dispatchPromo = useRef(),
        isPromoShown = useSelector(mapIsPromoShown)

    const handleCloseClick = () => {
        dispatchPromo.current()
    }

    useEffect(() => {
        if (isPromoShown) {
            logState('isPromoShown')
        }
    }, [isPromoShown])

    return didMount && (
        <>
            <PromoDispatcher {...{ ref: dispatchPromo }} />
            <Popup
                mountOnEnter
                unmountOnExit
                isFullPopup
                isPromoPopup
                shrinkAnimate
                displaysInOverlay
                noOverflowHidden
                {...{
                    popupName: 'PromoPopup',
                    isVisible: isPromoShown,
                    handleCloseClick,
                }}
            >
                <Promo {...{ ref }} />
            </Popup>
        </>
    )
})

PromoPopup.propTypes = {
    didMount: PropTypes.bool.isRequired,
}

export default memo(getDidMountHoc(PromoPopup))
