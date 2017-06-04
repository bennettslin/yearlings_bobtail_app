// Field for title toggle, audio section, and scores and tips section.

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const MenuField = ({

    isTitleInAudio,
    isScoresTipsInMain,
    audioSectionMenuChild,
    scoresTipsSectionChild,
    titleToggleChild

}) => (
    <div className="field menu-field">

        {!isTitleInAudio &&
            <div className="menu-subfield title-menu-subfield">
                {titleToggleChild}
            </div>
        }
        <div className="menu-subfield audio-subfield">
            {audioSectionMenuChild}
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
    audioSectionMenuChild: PropTypes.element.isRequired,
    scoresTipsSectionChild: PropTypes.element.isRequired,
    titleToggleChild: PropTypes.element.isRequired
}

export default connect(({
    isScoresTipsInMain,
    isTitleInAudio
}) => ({
    isScoresTipsInMain,
    isTitleInAudio
}))(MenuField)
