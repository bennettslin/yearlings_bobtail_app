// Popup container for promo section.
import React, { forwardRef, memo, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import getDidMountHoc from '../../../hocs/DidMountHoc'
import { updateIsPromoShown } from '../../../redux/toggle/action'
import Popup from '../../Popup'
import Promo from '../../Promo'
import { mapIsPromoShown } from '../../../redux/toggle/selector'
import './style'

const PromoPopup = forwardRef(({ didMount }, ref) => {
    const
        dispatch = useDispatch(),
        isPromoShown = useSelector(mapIsPromoShown)

    const handleCloseClick = () => {
        dispatch(updateIsPromoShown())
    }

    useEffect(() => {
        if (isPromoShown) {
            logState('isPromoShown')
        }
    }, [isPromoShown])

    return didMount && (
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
    )
})

PromoPopup.propTypes = {
    didMount: PropTypes.bool.isRequired,
}

export default memo(getDidMountHoc(PromoPopup))
