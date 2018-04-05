/**
 * Field for title toggle, audio section, and scores and tips section. Knows no
 * state, so should not update.
 */

import React from 'react'
import PropTypes from 'prop-types'
import AudioSection from '../Audio/audio-section'
import ScoresTipsSection from './ScoresTipsSection'
import TitleToggle from '../Title/TitleToggle'

const menuFieldPropTypes = {
    // From parent.
    audioSectionHandlers: PropTypes.object.isRequired,
    scoresTipsSectionHandlers: PropTypes.object.isRequired,
    titleToggleHandlers: PropTypes.object.isRequired
},

MenuField = ({

    audioSectionHandlers,
    scoresTipsSectionHandlers,
    titleToggleHandlers

}) => {
    return (
        <div className="field menu-field">

            <div className="menu-subfield title-menu-subfield">
                <TitleToggle {...titleToggleHandlers}
                    inMenu={true}
                />
            </div>
            <div className="menu-subfield audio-subfield">
                <AudioSection {...audioSectionHandlers} />
            </div>
            <div className="menu-subfield scores-tips-menu-subfield">
                <ScoresTipsSection {...scoresTipsSectionHandlers}
                    inMenu={true}
                />
            </div>
        </div>
    )
}

MenuField.propTypes = menuFieldPropTypes

export default MenuField
