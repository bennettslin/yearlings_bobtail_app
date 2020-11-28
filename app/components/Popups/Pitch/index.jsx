// Popup container for pitch section.
import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import getDidMountHoc from '../../DidMountHoc'
import { updateIsPitchShown } from '../../../redux/toggle/action'
import Popup from '../../Popup'
import Pitch from '../../Pitch'
import PitchNav from '../../PitchNav'
import { mapIsPitchShown } from '../../../redux/toggle/selector'
import './style'

const PitchPopup = forwardRef(({ didMount }, ref) => {
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
            <Pitch {...{ ref }} />
            <PitchNav />
        </Popup>
    )
})

PitchPopup.propTypes = {
    didMount: PropTypes.bool.isRequired
}

export default memo(getDidMountHoc(PitchPopup))
