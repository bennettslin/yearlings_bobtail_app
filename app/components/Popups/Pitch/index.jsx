// Popup container for pitch section.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import getDidMountHoc from '../../DidMountHoc'
import {
    resetPitchSegmentIndex,
    decrementPitchSegmentIndex,
    incrementPitchSegmentIndex
} from '../../../redux/pitch/action'
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
    const handleHomeClick = () => {
        dispatch(resetPitchSegmentIndex())
    }
    const handlePreviousClick = () => {
        dispatch(decrementPitchSegmentIndex())
    }
    const handleNextClick = () => {
        dispatch(incrementPitchSegmentIndex())
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
                handleCloseClick,
                handleHomeClick,
                handlePreviousClick,
                handleNextClick
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
