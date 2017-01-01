import React from 'react'
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
        <div
            className={`overview-toggle-button-container${inPopup ? ' in-popup' : ''}`}
        >
            <a
                className="overview-toggle-button enabled"
                onClick={e => onOverviewClick(e)}
            >
                {OVERVIEW_OPTIONS[selectedOverviewIndex]}
            </a>
        </div>
    </div>
)

export default OverviewToggleSection
