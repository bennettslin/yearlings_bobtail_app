import React from 'react'
import { connect } from 'react-redux'
import { DEVICE_OBJECTS } from '../../constants/responsive'

const AdminToggle = ({

    // From props.
    deviceIndex,
    windowWidth,
    windowHeight

}) => (
    <div className="admin-toggle">
        <div>
            {DEVICE_OBJECTS[deviceIndex].className}
        </div>
        <div>
            {windowWidth} x {windowHeight}
        </div>
    </div>
)

export default connect(({
    deviceIndex,
    windowWidth,
    windowHeight
}) => ({
    deviceIndex,
    windowWidth,
    windowHeight
}))(AdminToggle)
