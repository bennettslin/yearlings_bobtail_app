import React from 'react'
import { OVERVIEW_OPTIONS } from '../../helpers/constants'

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
    <div className="overview-toggle-button-container button-animatable">
        <a
            className="overview-toggle-button enabled"
            onClick={e => handleOverviewToggle(e)}
        >
            {OVERVIEW_OPTIONS[selectedOverviewIndex]}
        </a>
    </div>
)

export default OverviewToggle
