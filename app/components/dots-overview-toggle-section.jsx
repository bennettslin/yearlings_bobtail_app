import React from 'react'
import DotsRow from './dots/dots-row'

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
        <DotsRow {...other} />
        {scoresTipsSectionChild}
    </div>
)

export default DotsOverviewToggleSection
