import React from 'react'
import AudioSection from './audio-section'
import TransitionPopup from '../popup/transition-popup'

/*************
 * CONTAINER *
 *************/

const AudioTransitionPopup = ({

    handlePopupFocus,
    handlePopupContainerClick,

...other }) => {

    const { showOverlay } = other,
        isVisible = showOverlay,
        myChild = (
            <AudioSection {...other} />
        )

        console.error('showOverlay', showOverlay);

    return (
        <TransitionPopup
            popupClassName="audio"
            isVisible={isVisible}
            handlePopupFocus={handlePopupFocus}
            handlePopupContainerClick={handlePopupContainerClick}
            myChild={myChild}
        />
    )
}

export default AudioTransitionPopup
