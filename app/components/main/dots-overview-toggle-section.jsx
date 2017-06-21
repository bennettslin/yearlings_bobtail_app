// Section for dots and overview toggle buttons.

import React from 'react'
import PropTypes from 'prop-types'
import DotsToggle from '../dots/dots-toggle'
import OverviewToggle from '../overview/overview-toggle'
import ScoresTipsSection from './scores-tips-section'

const DotsOverviewToggleSection = ({

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

DotsOverviewToggleSection.propTypes = {
    // From parent.
    handleDotsSectionToggle: PropTypes.func.isRequired,
    handleOverviewToggle: PropTypes.func.isRequired,
    scoresTipsSectionHandlers: PropTypes.object.isRequired
}

export default DotsOverviewToggleSection
