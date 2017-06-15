// Field for title toggle, audio section, and scores and tips section.

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AudioSection from '../audio/audio-section'
import TitleToggle from '../title/title-toggle'

const MenuField = ({

    isTitleInAudio,
    isScoresTipsInMain,
    audioSectionHandlers,
    scoresTipsSectionChild,
    titleToggleHandlers

}) => (
    <div className="field menu-field">

        {!isTitleInAudio &&
            <div className="menu-subfield title-menu-subfield">
                <TitleToggle {...titleToggleHandlers} />
            </div>
        }
        <div className="menu-subfield audio-subfield">
            <AudioSection {...audioSectionHandlers} />
        </div>
        {!isScoresTipsInMain &&
            <div className="menu-subfield scores-tips-menu-subfield">
                {scoresTipsSectionChild}
            </div>
        }
    </div>
)

MenuField.propTypes = {
    // Through Redux.
    isTitleInAudio: PropTypes.bool.isRequired,
    isScoresTipsInMain: PropTypes.bool.isRequired,

    // From parent.
    audioSectionHandlers: PropTypes.object.isRequired,
    scoresTipsSectionChild: PropTypes.element.isRequired,
    titleToggleHandlers: PropTypes.object.isRequired
}

export default connect(({
    isScoresTipsInMain,
    isTitleInAudio
}) => ({
    isScoresTipsInMain,
    isTitleInAudio
}))(MenuField)
