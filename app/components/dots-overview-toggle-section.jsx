import React from 'react'

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
    </div>
)

export default DotsOverviewToggleSection
