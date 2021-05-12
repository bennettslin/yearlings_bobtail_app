// Popup container for marketing section.
import React, { forwardRef, memo, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import getDidMountHoc from '../../../hocs/DidMountHoc'
import { updateIsMarketingShown } from '../../../redux/toggle/action'
import Popup from '../../Popup'
import Marketing from '../../Marketing'
import { mapIsPromoShown } from '../../../redux/toggle/selector'
import './style'

const MarketingPopup = forwardRef(({ didMount }, ref) => {
    const
        dispatch = useDispatch(),
        isPromoShown = useSelector(mapIsPromoShown)

    const handleCloseClick = () => {
        dispatch(updateIsMarketingShown())
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
            isMarketingPopup
            shrinkAnimate
            displaysInOverlay
            noOverflowHidden
            {...{
                popupName: 'MarketingPopup',
                isVisible: isPromoShown,
                handleCloseClick,
            }}
        >
            <Marketing {...{ ref }} />
        </Popup>
    )
})

MarketingPopup.propTypes = {
    didMount: PropTypes.bool.isRequired,
}

export default memo(getDidMountHoc(MarketingPopup))
