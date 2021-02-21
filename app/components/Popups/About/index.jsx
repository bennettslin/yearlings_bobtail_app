// Popup container for about section.
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateIsAboutShown } from '../../../redux/toggle/action'
import About from '../../About'
import Popup from '../../Popup'
import { mapIsAboutShown } from '../../../redux/toggle/selector'
import { mapPopupMaxHeight } from '../../../redux/viewport/selector'

const AboutPopup = () => {
    const
        dispatch = useDispatch(),
        isAboutShown = useSelector(mapIsAboutShown),
        popupMaxHeight = useSelector(mapPopupMaxHeight)

    const handleCloseClick = () => {
        dispatch(updateIsAboutShown())
    }

    useEffect(() => {
        logState(
            'About',
            isAboutShown
        )
    }, [isAboutShown])

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
                popupMaxHeight,
                handleCloseClick,
            }}
        >
            <About />
        </Popup>
    )
}

export default AboutPopup
