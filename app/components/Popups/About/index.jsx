// Popup container for about section.
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateIsAboutShown } from '../../../redux/toggle/action'
import About from '../../About'
import Popup from '../../Popup'
import { mapIsAboutShown } from '../../../redux/toggle/selectors'
import './style'

const AboutPopup = () => {
    const
        dispatch = useDispatch(),
        isAboutShown = useSelector(mapIsAboutShown)

    const handleCloseClick = () => {
        dispatch(updateIsAboutShown())
    }

    return (
        <Popup
            bounceAnimate
            displaysInOverlay
            isCardSize
            canBeFullHeight
            hasWidePadding
            {...{
                popupName: 'AboutPopup',
                isVisible: isAboutShown,
                handleCloseClick
            }}
        >
            <About />
        </Popup>
    )
}

export default AboutPopup
