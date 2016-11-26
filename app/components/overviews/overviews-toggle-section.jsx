import React from 'react'
import TextBlock from '../text/text-block'
import { OVERVIEW_SECTION } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const OverviewsToggleSection = (props) => {

    return (
        <OverviewsToggleSectionView {...props} />
    )
}

/****************
 * PRESENTATION *
 ****************/

const OverviewsToggleSectionView = ({

    // From props.
    selectedOverviewIndex,

    // From controller.
    onOverviewClick

}) => (
    <div
        className="section overview-toggle-section"
    >
        <a className="overview-toggle-button enabled" onClick={onOverviewClick}>{selectedOverviewIndex}</a>
    </div>
)

export default OverviewsToggleSection
