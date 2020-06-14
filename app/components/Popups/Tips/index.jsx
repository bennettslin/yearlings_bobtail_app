// Popup container for tips section.
import React from 'react'
import { useSelector } from 'react-redux'
import Tips from '../../Tips'
import Popup from '../../Popup'
import { mapIsTipsPopupShown } from '../../../redux/tips/selector'
import './style'

const TipsPopup = () => {
    const isTipsPopupShown = useSelector(mapIsTipsPopupShown)

    return (
        <Popup
            doMountonEnter
            doUnmountOnExit
            isCardSize
            bounceAnimate
            hasNarrowPadding
            noAbsoluteFull
            {...{
                popupName: 'TipsPopup',
                isVisible: isTipsPopupShown
            }}
        >
            <Tips />
        </Popup>
    )
}

export default TipsPopup
