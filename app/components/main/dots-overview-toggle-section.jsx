// Section for dots and overview toggle buttons.

import React from 'react'
import PropTypes from 'prop-types'
import DotsToggle from '../dots/dots-toggle'

const DotsOverviewToggleSection = ({

    overviewButtonChild,
    scoresTipsSectionChild,

...other }) => (

    <div className="section dots-overview-toggle-section">
        {overviewButtonChild}
        <DotsToggle {...other} />
        {scoresTipsSectionChild}
    </div>
)

DotsOverviewToggleSection.propTypes = {
    // From parent.
    overviewButtonChild: PropTypes.element.isRequired,
    scoresTipsSectionChild: PropTypes.element
}

export default DotsOverviewToggleSection
