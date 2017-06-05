// Section for dots and overview toggle buttons.

import React from 'react'
import PropTypes from 'prop-types'
import DotsToggle from '../dots/dots-toggle'
import OverviewToggle from '../overview/overview-toggle'

const DotsOverviewToggleSection = ({

    handleOverviewToggle,
    scoresTipsSectionChild,

...other }) => (

    <div className="section dots-overview-toggle-section">
        <OverviewToggle
            handleOverviewToggle={handleOverviewToggle}
        />
        <DotsToggle {...other} />
        {scoresTipsSectionChild}
    </div>
)

DotsOverviewToggleSection.propTypes = {
    // From parent.
    handleOverviewToggle: PropTypes.func.isRequired,
    scoresTipsSectionChild: PropTypes.element
}

export default DotsOverviewToggleSection
