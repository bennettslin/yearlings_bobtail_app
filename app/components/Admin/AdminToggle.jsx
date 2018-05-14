/* eslint-disable */

import React from 'react'
import { connect } from 'react-redux'
import { DEVICE_OBJECTS } from '../../constants/responsive'

const AdminToggle = ({

    // From props.
    deviceIndex,
    windowWidth,
    windowHeight,
    isHeavyRenderReady,
    selectedSongIndex,
    renderReadySongIndex,
    selectedAnnotationIndex,
    renderReadyAnnotationIndex,
    selectedVerseIndex,
    renderReadyVerseIndex

}) => (
    <div className="AdminToggle">
        <div>
            {DEVICE_OBJECTS[deviceIndex].className}
        </div>
        <div>
            {windowWidth} x {windowHeight}
        </div>
        {/* <div>
            isHeavyRenderReady: {isHeavyRenderReady ? 'true' : 'false'}
        </div>
        <div>
            selectedSongIndex: {selectedSongIndex}
        </div>
        <div>
            renderReadySongIndex: {renderReadySongIndex}
        </div>
        <div>
            selectedAnnotationIndex: {selectedAnnotationIndex}
        </div>
        <div>
            renderReadyAnnotationIndex: {renderReadyAnnotationIndex}
        </div>
        <div>
            selectedVerseIndex: {selectedVerseIndex}
        </div>
        <div>
            renderReadyVerseIndex: {renderReadyVerseIndex}
        </div> */}
    </div>
)

export default connect(({
    deviceIndex,
    windowWidth,
    windowHeight,
    isHeavyRenderReady,
    selectedSongIndex,
    renderReadySongIndex,
    selectedAnnotationIndex,
    renderReadyAnnotationIndex,
    selectedVerseIndex,
    renderReadyVerseIndex
}) => ({
    deviceIndex,
    windowWidth,
    windowHeight,
    isHeavyRenderReady,
    selectedSongIndex,
    renderReadySongIndex,
    selectedAnnotationIndex,
    renderReadyAnnotationIndex,
    selectedVerseIndex,
    renderReadyVerseIndex
}))(AdminToggle)
