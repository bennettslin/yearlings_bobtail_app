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
    overviewButtonChild

    // From controller.

}) => (
    <div className="section dots-overview-toggle-section">
        {overviewButtonChild}
        <DotsRow />
    </div>
)

export default DotsOverviewToggleSection
