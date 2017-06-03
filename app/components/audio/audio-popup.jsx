// Popup container for audio section in overlay.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Popup from '../popup/popup'
import AudioSection from './audio-section'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

/*************
 * CONTAINER *
 *************/

class AudioPopup extends Component {

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'showOverlay',
                    'isTimerInAudio'
                ]
            })

        return componentShouldUpdate
    }

    render() {
        const { showOverlay,
                handlePopupContainerClick,
                ...other } = this.props,

            myChild = (
                <AudioSection {...other} />
            )

        return (
            <Popup
                popupClassName="audio"
                isVisible={showOverlay}
                handlePopupContainerClick={handlePopupContainerClick}
                myChild={myChild}
            />
        )
    }
}

AudioPopup.propTypes = {
    // From parent.
    showOverlay: PropTypes.bool.isRequired,
    handlePopupContainerClick: PropTypes.func.isRequired
}

export default AudioPopup
