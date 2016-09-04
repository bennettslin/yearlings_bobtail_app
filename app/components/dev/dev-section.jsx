import React from 'react'
import { getFormattedTime } from 'helpers/format-helper'

/*************
 * CONTAINER *
 *************/

const DevSection = (props) => (
    <DevSectionView {...props} />
)

/****************
 * PRESENTATION *
 ****************/

const DevSectionView = ({

    // From props.
    selectedTime

}) => (

    <div className="section dev-section">
        <h2>dev</h2>
        <div className="row">
            Selected Time: {getFormattedTime(selectedTime)}
        </div>
    </div>
)

export default DevSection
