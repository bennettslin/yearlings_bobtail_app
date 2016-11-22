import React from 'react'

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
    selectedVerseIndex,
    isSingleLyricColumn,
    onScreenWidthClick,
    windowWidth,
    windowHeight

}) => (
    <div className="section dev-section">
        <h2>dev</h2>
        <div className="row">
            selected verse index: {selectedVerseIndex}
        </div>
        <div className="row">
            window size: {windowWidth} x {windowHeight}
        </div>
        <a
            className="enabled"
            onClick={onScreenWidthClick}
        >
            {isSingleLyricColumn ? 'widen' : 'narrow'}
        </a>
    </div>
)

export default DevSection
