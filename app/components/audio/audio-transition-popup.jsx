import React from 'react'
import PropTypes from 'prop-types'
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

AudioTransitionPopup.propTypes = {
    showOverlay: PropTypes.bool.isRequired,
    handlePopupContainerClick: PropTypes.func.isRequired
}

export default AudioTransitionPopup
