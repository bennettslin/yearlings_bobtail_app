// Popup container for score section.
import React, { memo, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import getDidMountHoc from '../../DidMountHoc'
import { updateIsScoreShown } from '../../../redux/toggle/action'
import Score from '../../Score'
import Popup from '../../Popup'
import { mapIsScoreShown } from '../../../redux/toggle/selector'
import { mapCanScoreMount } from '../../../redux/viewport/selector'

const ScorePopup = ({ didMount }) => {
    const
        dispatch = useDispatch(),
        canScoreMount = useSelector(mapCanScoreMount),
        isScoreShown = useSelector(mapIsScoreShown)

    const handleCloseClick = () => {
        dispatch(updateIsScoreShown())
    }

    useEffect(() => {
        if (isScoreShown) {
            logState('isScoreShown')
        }
    }, [isScoreShown])

    return didMount && canScoreMount && (
        <Popup
            isFullPopup
            displaysInOverlay
            {...{
                popupName: 'ScorePopup',
                isVisible: isScoreShown,
                handleCloseClick,
            }}
        >
            <Score />
        </Popup>
    )
}

ScorePopup.propTypes = {
    didMount: PropTypes.bool.isRequired,
}

export default memo(getDidMountHoc(ScorePopup))
