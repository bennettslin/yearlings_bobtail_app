// Section for dots and overview toggle buttons.

import React from 'react'
import PropTypes from 'prop-types'


import DotsToggle from '../Dots/DotsToggle'
import OverviewToggle from '../Overview/OverviewToggle'
import ScoresTips from './ScoresTips'

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
    <div className="DotsOverviewToggleSection">
        <OverviewToggle
            handleOverviewToggle={handleOverviewToggle}
        />
        <DotsToggle
            handleDotsSectionToggle={handleDotsSectionToggle}
        />
        <ScoresTips {...scoresTipsSectionHandlers}
            inToggleSection
        />
    </div>
)

DotsOverviewToggleSection.propTypes = dotsOverviewToggleSectionPropTypes

export default DotsOverviewToggleSection
