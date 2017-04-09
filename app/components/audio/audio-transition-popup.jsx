import React from 'react'
import AudioSection from './audio-section'
import TransitionPopup from '../popup/transition-popup'

/*************
 * CONTAINER *
 *************/

const AudioTransitionPopup = ({

    showOverlay,
    handlePopupContainerClick,

...other }) => {

    const isVisible = showOverlay,
        myChild = (
            <AudioSection {...other} />
        )

    return (
        <TransitionPopup
            popupClassName="audio"
            isVisible={isVisible}
            handlePopupContainerClick={handlePopupContainerClick}
            myChild={myChild}
        />
    )
}

export default AudioTransitionPopup
