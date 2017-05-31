import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AudioSection from './audio-section'
import TransitionPopup from '../popup/transition-popup'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

/*************
 * CONTAINER *
 *************/

class AudioTransitionPopup extends Component {

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
                    'titleInAudio',

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
            <TransitionPopup
                popupClassName="audio"
                isVisible={isVisible}
                handlePopupContainerClick={handlePopupContainerClick}
                myChild={myChild}
            />
        )
    }
}

AudioTransitionPopup.propTypes = {
    // selectedAudioOptionIndex: PropTypes.number.isRequired,
    // selectedSongIndex: PropTypes.number.isRequired,
    isPhone: PropTypes.bool.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    showOverlay: PropTypes.bool.isRequired,
    timerInAudio: PropTypes.bool.isRequired,
    titleInAudio: PropTypes.bool.isRequired,
    handlePopupContainerClick: PropTypes.func.isRequired,
    audioBannerProps: PropTypes.object.isRequired
}

export default AudioTransitionPopup
