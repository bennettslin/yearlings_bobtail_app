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
    selectedTime,
    selectedLineIndex,
    isNarrowScreen,
    onScreenWidthClick

}) => (
    <div className="section dev-section">
        <h2>dev</h2>
        <div className="row">
            selected time: {getFormattedTime(selectedTime)}
        </div>
        <div className="row">
            selected line index: {selectedLineIndex}
        </div>
        <a
            className="enabled"
            onClick={onScreenWidthClick}
        >
            {isNarrowScreen ? 'widen' : 'narrow'}
        </a>
    </div>
)

export default DevSection
