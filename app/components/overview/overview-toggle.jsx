import React from 'react'
import { OVERVIEW_OPTIONS } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const OverviewToggle = (props) => {

    return (
        <OverviewToggleView {...props} />
    )
}

/****************
 * PRESENTATION *
 ****************/

const OverviewToggleView = ({

    // From props.
    selectedOverviewIndex,

    // From controller.
    onOverviewClick

}) => (
    <div className="overview-toggle-button-container">
        <a
            className="overview-toggle-button enabled"
            onClick={e => onOverviewClick(e)}
        >
            {OVERVIEW_OPTIONS[selectedOverviewIndex]}
        </a>
    </div>
)

export default OverviewToggle
