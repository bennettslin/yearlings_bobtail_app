// Popup container for pitch section.
import React, { forwardRef, memo, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import getDidMountHoc from '../../DidMountHoc'
import { updateIsMarketingShown } from '../../../redux/toggle/action'
import Popup from '../../Popup'
import Pitch from '../../Pitch'
import PitchNav from '../../PitchNav'
import { mapIsMarketingShown } from '../../../redux/toggle/selector'
import './style'

const PitchPopup = forwardRef(({ didMount }, ref) => {
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
            isPitchPopup
            shrinkAnimate
            displaysInOverlay
            {...{
                popupName: 'PitchPopup',
                isVisible: isMarketingShown,
                handleCloseClick,
            }}
        >
            <Pitch {...{ ref }} />
            <PitchNav />
        </Popup>
    )
})

PitchPopup.propTypes = {
    didMount: PropTypes.bool.isRequired,
}

export default memo(getDidMountHoc(PitchPopup))
