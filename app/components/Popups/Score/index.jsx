// Popup container for score section.
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateToggleStore } from '../../../redux/toggle/action'
import Score from '../../Score'
import Popup from '../../Popup'
import { mapIsScoreShown } from '../../../redux/toggle/selector'

const ScorePopup = () => {
    const
        dispatch = useDispatch(),
        isScoreShown = useSelector(mapIsScoreShown)

    const handleCloseClick = () => {
        dispatch(updateToggleStore({ isScoreShown: false }))
    }

    return (
        <Popup
            isFullWidth
            isFullHeight
            displaysInOverlay
            {...{
                popupName: 'ScorePopup',
                isVisible: isScoreShown,
                handleCloseClick
            }}
        >
            <Score />
        </Popup>
    )
}

export default ScorePopup
