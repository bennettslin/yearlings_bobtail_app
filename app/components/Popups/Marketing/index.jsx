// Popup container for marketing section.
import React, { forwardRef, memo, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import getDidMountHoc from '../../../hocs/DidMountHoc'
import { updateIsMarketingShown } from '../../../redux/toggle/action'
import Popup from '../../Popup'
import Marketing from '../../Marketing'
import { mapIsMarketingShown } from '../../../redux/toggle/selector'
import './style'

const MarketingPopup = forwardRef(({ didMount }, ref) => {
    const
        dispatch = useDispatch(),
        isMarketingShown = useSelector(mapIsMarketingShown)

    const handleCloseClick = () => {
        dispatch(updateIsMarketingShown())
    }

    useEffect(() => {
        if (isMarketingShown) {
            logState('isMarketingShown')
        }
    }, [isMarketingShown])

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
                isVisible: isMarketingShown,
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
