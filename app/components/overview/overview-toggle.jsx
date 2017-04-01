import React from 'react'
import Button from '../button/button'
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
    <div className="overview-toggle-button-container">
        <Button
            buttonName="overview-toggle"
            iconText={OVERVIEW_OPTIONS[selectedOverviewIndex]}
            handleClick={handleOverviewToggle}
        />
    </div>
)

export default OverviewToggle
