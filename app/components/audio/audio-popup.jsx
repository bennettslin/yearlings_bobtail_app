import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AudioSection from './audio-section'
import Popup from '../popup/popup'
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
                    'isPhone',
                    'isPlaying',
                    'showOverlay',
                    // 'timerInAudio',

                    // Update when banner props are updated.
                    'audioBannerProps'
                ]
            })

        return componentShouldUpdate
    }

    render() {
        const { showOverlay,
                handlePopupContainerClick,
                ...other } = this.props,

            isVisible = showOverlay,
            myChild = (
                <AudioSection {...other} />
            )

        return (
            <Popup
                popupClassName="audio"
                isVisible={isVisible}
                handlePopupContainerClick={handlePopupContainerClick}
                myChild={myChild}
            />
        )
    }
}

AudioPopup.propTypes = {
    isPhone: PropTypes.bool.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    showOverlay: PropTypes.bool.isRequired,
    timerInAudio: PropTypes.bool.isRequired,
    handlePopupContainerClick: PropTypes.func.isRequired,
    audioBannerProps: PropTypes.object.isRequired
}

export default AudioPopup
