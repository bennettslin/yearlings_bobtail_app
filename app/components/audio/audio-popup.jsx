// Popup container for audio section in overlay.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Popup from '../popup/popup'
import AudioSection from './audio-section'
import { getComponentShouldUpdate } from '../../helpers/general-helper'
import { getShowOverlay } from '../../helpers/logic-helper'
import { getIsPhone } from '../../helpers/responsive-helper'

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
                    'deviceIndex',
                    'isLyricExpanded',
                    'selectedAnnotationIndex',
                    'selectedScoreIndex',
                    'selectedTitleIndex',
                    'selectedWikiIndex',
                    'isTimerInAudio'
                ]
            })

        return componentShouldUpdate
    }

    render() {
        const { deviceIndex,
                isLyricExpanded,
                selectedAnnotationIndex,
                selectedScoreIndex,
                selectedTitleIndex,
                selectedWikiIndex,
                handlePopupContainerClick,
                ...other } = this.props,

            showOverlay = getShowOverlay({
                deviceIndex,
                isLyricExpanded,
                selectedAnnotationIndex,
                selectedScoreIndex,
                selectedTitleIndex,
                selectedWikiIndex
            }),

            isTimerInAudio = showOverlay && getIsPhone(deviceIndex),

            myChild = (
                <AudioSection {...other}
                    isTimerInAudio={isTimerInAudio}
                />
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
    // Through Redux.
    deviceIndex: PropTypes.number.isRequired,
    isLyricExpanded: PropTypes.bool.isRequired,
    selectedAnnotationIndex: PropTypes.number.isRequired,
    selectedScoreIndex: PropTypes.number.isRequired,
    selectedTitleIndex: PropTypes.number.isRequired,
    selectedWikiIndex: PropTypes.number.isRequired,

    // From parent.
    handlePopupContainerClick: PropTypes.func.isRequired
}

export default connect(({
    deviceIndex,
    isLyricExpanded,
    selectedAnnotationIndex,
    selectedScoreIndex,
    selectedTitleIndex,
    selectedWikiIndex
}) => ({
    deviceIndex,
    isLyricExpanded,
    selectedAnnotationIndex,
    selectedScoreIndex,
    selectedTitleIndex,
    selectedWikiIndex
}))(AudioPopup)
