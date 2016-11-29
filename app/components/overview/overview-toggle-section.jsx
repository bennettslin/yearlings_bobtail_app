import React from 'react'
import TextBlock from '../text/text-block'
import { OVERVIEW_OPTIONS } from 'helpers/constants'

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
    inPopup,
    selectedOverviewIndex,

    // From controller.
    onOverviewClick

}) => (
    <div
        className="section overview-toggle-section"
    >
        <a className={`overview-toggle-button enabled${inPopup ? ' in-popup' : ''}`} onClick={onOverviewClick}>{OVERVIEW_OPTIONS[selectedOverviewIndex]}</a>
    </div>
)

export default OverviewToggleSection
