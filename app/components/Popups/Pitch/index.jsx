// Popup container for pitch section.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import getDidMountHoc from '../../DidMountHoc'
import { updateIsPitchShown } from '../../../redux/toggle/action'
import Popup from '../../Popup'
import Pitch from '../../Pitch'
import PitchNav from '../../PitchNav'
import { mapIsPitchShown } from '../../../redux/toggle/selector'
import './style'

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
            isFullPopup
            shrinkAnimate
            displaysInOverlay
            {...{
                popupName: 'PitchPopup',
                isVisible: isPitchShown,
                handleCloseClick
            }}
        >
            <Pitch />
            <PitchNav />
        </Popup>
    )
}

PitchPopup.propTypes = {
    didMount: PropTypes.bool.isRequired
}

export default memo(getDidMountHoc(PitchPopup))
