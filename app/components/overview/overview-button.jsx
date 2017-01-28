import React from 'react'
import { OVERVIEW_OPTIONS } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const OverviewButton = (props) => {

    return (
        <OverviewButtonView {...props} />
    )
}

/****************
 * PRESENTATION *
 ****************/

const OverviewButtonView = ({

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

export default OverviewButton
