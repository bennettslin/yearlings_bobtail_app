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
    selectedTimePlayed,
    selectedVerseIndex,
    isNarrowScreen,
    onScreenWidthClick

}) => (
    <div className="section dev-section">
        <h2>dev</h2>
        <div className="row">
            selected time: {getFormattedTime(selectedTimePlayed)}
        </div>
        <div className="row">
            selected verse index: {selectedVerseIndex}
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
