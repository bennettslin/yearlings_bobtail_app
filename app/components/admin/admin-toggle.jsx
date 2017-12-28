import React from 'react'
import { connect } from 'react-redux'
import { DEVICE_OBJECTS } from '../../constants/responsive'

const AdminToggle = ({

    // From props.
    isHeavyRenderReady,
    renderReadySongIndex,
    currentSceneIndex,
    isPlaying,
    selectedTimePlayed,
    updatedTimePlayed,
    deviceIndex,
    windowWidth,
    windowHeight

}) => null && (
    <div className="admin-toggle">
        <div>
            isHeavyRenderReady: {isHeavyRenderReady ? 'true' : 'false'}
        </div>
        <div>
            renderReadySongIndex: {renderReadySongIndex}
        </div>
        <div>
            currentSceneIndex: {currentSceneIndex}
        </div>
        <div>
            now {isPlaying ? 'playing' : 'paused'}
        </div>
        <div>
            selected time: {selectedTimePlayed}
        </div>
        <div>
            updated time: {updatedTimePlayed}
        </div>
        <div>
            {DEVICE_OBJECTS[deviceIndex].className}
        </div>
        <div>
            {windowWidth} x {windowHeight}
        </div>
    </div>
)

export default connect(({
    selectedSongIndex,
    isHeavyRenderReady,
    renderReadySongIndex,
    currentSceneIndex,
    isPlaying,
    selectedTimePlayed,
    updatedTimePlayed,
    deviceIndex,
    windowWidth,
    windowHeight
}) => ({
    selectedSongIndex,
    isHeavyRenderReady,
    renderReadySongIndex,
    currentSceneIndex,
    isPlaying,
    selectedTimePlayed,
    updatedTimePlayed,
    deviceIndex,
    windowWidth,
    windowHeight
}))(AdminToggle)
