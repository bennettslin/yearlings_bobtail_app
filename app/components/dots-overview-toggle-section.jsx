import React from 'react'
import DotsToggle from './dots/dots-toggle'

/*************
 * CONTAINER *
 *************/

const DotsOverviewToggleSection = (props) => {

    return (
        <DotsOverviewToggleSectionView {...props} />
    )
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
