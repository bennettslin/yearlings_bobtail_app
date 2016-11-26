import React from 'react'
import TextBlock from '../text/text-block'
import { OVERVIEW_SECTION } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const OverviewToggleSection = (props) => {

    return (
        <OverviewToggleSectionView {...props} />
    )
}

/****************
 * PRESENTATION *
 ****************/

const OverviewToggleSectionView = ({

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

export default OverviewToggleSection
