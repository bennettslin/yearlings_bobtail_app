// Section for dots and overview toggle buttons.

import React from 'react'
import PropTypes from 'prop-types'
import DotsToggle from '../dots/dots-toggle'
import OverviewToggle from '../Overview/overview-toggle'
import ScoresTipsSection from './ScoresTipsSection'

const dotsOverviewToggleSectionPropTypes = {
    // From parent.
    handleDotsSectionToggle: PropTypes.func.isRequired,
    handleOverviewToggle: PropTypes.func.isRequired,
    scoresTipsSectionHandlers: PropTypes.object.isRequired
},

DotsOverviewToggleSection = ({

    handleDotsSectionToggle,
    handleOverviewToggle,
    scoresTipsSectionHandlers

}) => (
    <div className="section dots-overview-toggle-section">
        <OverviewToggle
            handleOverviewToggle={handleOverviewToggle}
        />
        <DotsToggle
            handleDotsSectionToggle={handleDotsSectionToggle}
        />
        <ScoresTipsSection {...scoresTipsSectionHandlers}
            inToggleSection={true}
        />
    </div>
)

DotsOverviewToggleSection.propTypes = dotsOverviewToggleSectionPropTypes

export default DotsOverviewToggleSection
