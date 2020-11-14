// Popup container for pitch section.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import getDidMountHoc from '../../DidMountHoc'
import { updateIsPitchShown } from '../../../redux/toggle/action'
import Pitch from '../../Pitch'
import Popup from '../../Popup'
import { mapIsPitchShown } from '../../../redux/toggle/selector'

const PitchPopup = ({ didMount }) => {
    const
        dispatch = useDispatch(),
        isPitchShown = useSelector(mapIsPitchShown)

    const handleCloseClick = () => {
        dispatch(updateIsPitchShown())
    }

    return didMount && (
        <Popup
            mountOnEnter
            unmountOnExit
            isFullWidth
            isFullHeight
            shrinkAnimate
            displaysInOverlay
            {...{
                popupName: 'PitchPopup',
                isVisible: isPitchShown,
                handleCloseClick
            }}
        >
            <Pitch />
        </Popup>
    )
}

PitchPopup.propTypes = {
    didMount: PropTypes.bool.isRequired
}

export default memo(getDidMountHoc(PitchPopup))
