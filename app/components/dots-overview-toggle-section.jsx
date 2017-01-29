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
    scoresTipsSectionChild

    // From controller.

}) => (
    <div className="section dots-overview-toggle-section">
        {overviewButtonChild}
        <DotsRow />
        {scoresTipsSectionChild}
    </div>
)

export default DotsOverviewToggleSection
