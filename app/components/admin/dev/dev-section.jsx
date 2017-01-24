import React from 'react'
// import { DEVICE_OBJECTS } from 'helpers/constants'

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

    // deviceIndex,
    // windowWidth,
    // windowHeight,
    // selectedSongIndex,
    selectedVerseIndex,
    // selectedNavIndex,
    // selectedDotsIndex,
    // showSingleLyricColumn,
    selectedScoreIndex,
    onScreenWidthClick,
    onScoreClick

}) => (
    <div className="section dev-section">
        <h2>dev</h2>
        <div className="row">
            {/* selected song index: {selectedSongIndex} */}
        </div>
        <div className="row">
            selected verse index: {selectedVerseIndex}
        </div>
        <div className="row">
            {/* selected nav index: {selectedNavIndex} */}
        </div>
        <div className="row">
            {/* selected dots index: {selectedDotsIndex} */}
        </div>
        <div className="row">
            {/* window size: {windowWidth} x {windowHeight} */}
        </div>
        <div className="row">
            {/* device width: {DEVICE_OBJECTS[deviceIndex].className} */}
        </div>
        <a
            className="enabled"
            onClick={onScoreClick}
        >
            score: {selectedScoreIndex}
        </a>
        <a
            className="enabled"
            onClick={onScreenWidthClick}
        >
            {/* Shown columns: {showSingleLyricColumn ? 'one' : 'two'} */}
        </a>
    </div>
)

export default DevSection
