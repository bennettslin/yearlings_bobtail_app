// Popup container for tips section.
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import Tips from '../../Tips'
import Popup from '../../Popup'
import { mapIsTipsPopupVisible } from '../../../redux/tips/selector'
import './style'

const TipsPopup = () => {
    const isTipsPopupVisible = useSelector(mapIsTipsPopupVisible)

    return (
        <Popup
            mountOnEnter
            unmountOnExit
            isCardSize
            bounceAnimate
            hasNarrowPadding
            noAbsoluteFull
            {...{
                popupName: 'TipsPopup',
                isVisible: isTipsPopupVisible
            }}
        >
            <Tips />
        </Popup>
    )
}

export default memo(TipsPopup)
