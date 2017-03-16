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
    handleOverviewToggle

}) => (
    <div className="overview-toggle-button-container">
        <a
            className="overview-toggle-button enabled"
            onClick={handleOverviewToggle}
        >
            {OVERVIEW_OPTIONS[selectedOverviewIndex]}
        </a>
    </div>
)

export default OverviewToggle
