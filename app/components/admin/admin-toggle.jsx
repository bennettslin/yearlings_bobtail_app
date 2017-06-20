import React from 'react'
import { connect } from 'react-redux'
import { DEVICE_OBJECTS } from '../../constants/responsive'

const AdminToggle = ({

    // From props.
    isPlaying,
    selectedTimePlayed,
    updatedTimePlayed,
    deviceIndex,
    windowWidth,
    windowHeight

}) => (
    <div className="admin-toggle">
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
    isPlaying,
    selectedTimePlayed,
    updatedTimePlayed,
    deviceIndex,
    windowWidth,
    windowHeight
}) => ({
    isPlaying,
    selectedTimePlayed,
    updatedTimePlayed,
    deviceIndex,
    windowWidth,
    windowHeight
}))(AdminToggle)
