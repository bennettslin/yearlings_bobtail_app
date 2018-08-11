import React from 'react'
import { connect } from 'react-redux'
import { DEVICE_OBJECTS } from 'constants/responsive'

const AdminToggle = ({
    // From props.
    isWindowResizeRenderable,
    deviceIndex,
    windowWidth,
    windowHeight

}) => null && (
    <div className="AdminToggle">
        <div>
            {DEVICE_OBJECTS[deviceIndex].className}
        </div>
        <div>
            {windowWidth} x {windowHeight}
        </div>
        <div>
            {`window resizable: ${isWindowResizeRenderable ? 'true' : 'false'}`}
        </div>
    </div>
)

export default connect(({
    isWindowResizeRenderable,
    deviceStore: {
        deviceIndex,
        windowWidth,
        windowHeight
    }
}) => ({
    isWindowResizeRenderable,
    deviceIndex,
    windowWidth,
    windowHeight
}))(AdminToggle)
