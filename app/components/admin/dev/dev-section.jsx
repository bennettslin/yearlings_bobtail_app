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
    isSingleLyricColumn,
    onScreenWidthClick

}) => (
    <div className="admin section dev-section">
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
            Shown columns: {isSingleLyricColumn ? 'one' : 'two'}
        </a>
    </div>
)

export default DevSection
