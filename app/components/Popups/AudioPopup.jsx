// Popup container for audio section in overlay.

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Popup from '../popup/popup'
import AudioSection from '../Audio/audio-section'
import { getShowOverlay } from '../../helpers/logic-helper'

const mapStateToProps = ({
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
})

/*************
 * CONTAINER *
 *************/

const audioPopupPropTypes = {
    // Through Redux.
    deviceIndex: PropTypes.number.isRequired,
    isLyricExpanded: PropTypes.bool.isRequired,
    selectedAnnotationIndex: PropTypes.number.isRequired,
    selectedScoreIndex: PropTypes.number.isRequired,
    selectedTitleIndex: PropTypes.number.isRequired,
    selectedWikiIndex: PropTypes.number.isRequired,

    // From parent.
    handlePopupContainerClick: PropTypes.func.isRequired
},

AudioPopup = ({

    deviceIndex,
    isLyricExpanded,
    selectedAnnotationIndex,
    selectedScoreIndex,
    selectedTitleIndex,
    selectedWikiIndex,
    handlePopupContainerClick,

...other }) => {

    const showOverlay = getShowOverlay({
            deviceIndex,
            isLyricExpanded,
            selectedAnnotationIndex,
            selectedScoreIndex,
            selectedTitleIndex,
            selectedWikiIndex
        }),

        myChild = (
            <AudioSection {...other}
                inOverlay={true}
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

AudioPopup.propTypes = audioPopupPropTypes

export default connect(mapStateToProps)(AudioPopup)
