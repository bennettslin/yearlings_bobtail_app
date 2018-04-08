// Section for dots and overview toggle buttons.

import React from 'react'
import PropTypes from 'prop-types'


import DotsToggle from '../../Dots/DotsToggle'
import OverviewToggle from '../../Overview/OverviewToggle'
import ScoresTips from '../ScoresTips'

const dotsOverviewPropTypes = {
    // From parent.
    handleDotsSectionToggle: PropTypes.func.isRequired,
    handleOverviewToggle: PropTypes.func.isRequired,
    scoresTipsHandlers: PropTypes.object.isRequired
},

DotsOverview = ({

    handleDotsSectionToggle,
    handleOverviewToggle,
    scoresTipsHandlers

}) => (
    <div className="DotsOverview">
        <OverviewToggle
            handleOverviewToggle={handleOverviewToggle}
        />
        <DotsToggle
            handleDotsSectionToggle={handleDotsSectionToggle}
        />
        <ScoresTips {...scoresTipsHandlers}
            inToggleSection
        />
    </div>
)

DotsOverview.propTypes = dotsOverviewPropTypes

export default DotsOverview
