import React from 'react'
import PropTypes from 'prop-types'
import DotsToggle from '../dots/dots-toggle'

/*************
 * CONTAINER *
 *************/

const DotsOverviewToggleSection = (props) => (
    <DotsOverviewToggleSectionView {...props} />
)

DotsOverviewToggleSection.propTypes = {
    overviewButtonChild: PropTypes.element.isRequired,
    scoresTipsSectionChild: PropTypes.element
}

/****************
 * PRESENTATION *
 ****************/

const DotsOverviewToggleSectionView = ({

    // From props.
    overviewButtonChild,
    scoresTipsSectionChild,

    // From controller.

...other }) => (

    <div className="section dots-overview-toggle-section">
        {overviewButtonChild}
        <DotsToggle {...other} />
        {scoresTipsSectionChild}
    </div>
)

export default DotsOverviewToggleSection
