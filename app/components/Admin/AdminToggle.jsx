/* eslint-disable */

import React from 'react'
import { connect } from 'react-redux'
import { DEVICE_OBJECTS } from '../../constants/responsive'

const AdminToggle = ({

    // From props.
    deviceIndex,
    windowWidth,
    windowHeight,
    isRenderable,
    selectedSongIndex,
    renderableSongIndex,
    selectedAnnotationIndex,
    renderableAnnotationIndex,
    selectedVerseIndex,
    renderableVerseIndex

}) => (
    <div className="AdminToggle">
        <div>
            {DEVICE_OBJECTS[deviceIndex].className}
        </div>
        <div>
            {windowWidth} x {windowHeight}
        </div>
        {/* <div>
            isRenderable: {isRenderable ? 'true' : 'false'}
        </div>
        <div>
            selectedSongIndex: {selectedSongIndex}
        </div>
        <div>
            renderableSongIndex: {renderableSongIndex}
        </div>
        <div>
            selectedAnnotationIndex: {selectedAnnotationIndex}
        </div>
        <div>
            renderableAnnotationIndex: {renderableAnnotationIndex}
        </div>
        <div>
            selectedVerseIndex: {selectedVerseIndex}
        </div>
        <div>
            renderableVerseIndex: {renderableVerseIndex}
        </div> */}
    </div>
)

export default connect(({
    deviceIndex,
    windowWidth,
    windowHeight,
    isRenderable,
    selectedSongIndex,
    renderableSongIndex,
    selectedAnnotationIndex,
    renderableAnnotationIndex,
    selectedVerseIndex,
    renderableVerseIndex
}) => ({
    deviceIndex,
    windowWidth,
    windowHeight,
    isRenderable,
    selectedSongIndex,
    renderableSongIndex,
    selectedAnnotationIndex,
    renderableAnnotationIndex,
    selectedVerseIndex,
    renderableVerseIndex
}))(AdminToggle)
