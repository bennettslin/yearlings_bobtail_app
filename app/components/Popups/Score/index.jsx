// Popup container for score section.
import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateIsScoreShown } from '../../../redux/toggle/action'
import Score from '../../Score'
import Popup from '../../Popup'
import { mapIsScoreShown } from '../../../redux/toggle/selector'
import { mapCanScoreMount } from '../../../redux/viewport/selector'

const ScorePopup = () => {
    const
        dispatch = useDispatch(),
        canScoreMount = useSelector(mapCanScoreMount),
        isScoreShown = useSelector(mapIsScoreShown),
        [didMount, setDidMount] = useState(false)

    const handleCloseClick = () => {
        dispatch(updateIsScoreShown())
    }

    useEffect(() => {
        setDidMount(true)
    }, [])

    return didMount && canScoreMount && (
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

export default memo(ScorePopup)
