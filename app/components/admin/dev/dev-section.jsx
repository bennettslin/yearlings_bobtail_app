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
    deviceWidth,
    windowWidth,
    windowHeight,
    selectedVerseIndex,
    showSingleLyricColumn,
    onScreenWidthClick

}) => (
    <div className="section dev-section">
        <h2>dev</h2>
        <div className="row">
            selected verse index: {selectedVerseIndex}
        </div>
        <div className="row">
            window size: {windowWidth} x {windowHeight}
        </div>
        <div className="row">
            device width : {deviceWidth}
        </div>
        <a
            className="enabled"
            onClick={onScreenWidthClick}
        >
            Shown columns: {showSingleLyricColumn ? 'one' : 'two'}
        </a>
    </div>
)

export default DevSection
