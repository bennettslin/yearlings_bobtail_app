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
                    // 'selectedAudioOptionIndex',
                    // 'selectedSongIndex',
                    'isPhone',
                    'isPlaying',
                    'showOverlay',
                    'timerInAudio',
                    // 'isTitleInAudio',

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
    // selectedAudioOptionIndex: PropTypes.number.isRequired,
    // selectedSongIndex: PropTypes.number.isRequired,
    isPhone: PropTypes.bool.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    showOverlay: PropTypes.bool.isRequired,
    timerInAudio: PropTypes.bool.isRequired,
    // isTitleInAudio: PropTypes.bool.isRequired,
    handlePopupContainerClick: PropTypes.func.isRequired,
    audioBannerProps: PropTypes.object.isRequired
}

export default AudioPopup
