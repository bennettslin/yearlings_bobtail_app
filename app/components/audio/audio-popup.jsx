import React from 'react'
import Popup from '../popup/popup'
import AudioSection from './audio-section'

const defaultProps = {
}

class AudioPopup extends Popup {

    getClassName() {
        return 'audio'
    }

    getContentElement() {
        return this.props.showOverlay && (
            <AudioSection {...this.props} />
        )
    }
}

AudioPopup.defaultProps = defaultProps
export default AudioPopup
