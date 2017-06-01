import React from 'react'
import { connect } from 'react-redux'
import { DEVICE_OBJECTS } from '../../constants/responsive'

const passReduxStateToProps = ({
    isLyricExpanded
}) => ({
// Pass Redux state into component props.
    isLyricExpanded
})

/*************
 * CONTAINER *
 *************/

const AdminToggle = (props) => {

    return (
        <AdminToggleView {...props} />
    )
}

/****************
 * PRESENTATION *
 ****************/

const AdminToggleView = ({

    // From props.
    isLyricExpanded,
    deviceIndex,
    windowWidth,
    windowHeight

}) => (
    <div className="admin-toggle">
        <div>
            {isLyricExpanded ? 'expanded' : 'collapsed'}
        </div>
        <div>
            {DEVICE_OBJECTS[deviceIndex].className}
        </div>
        <div>
            {windowWidth} x {windowHeight}
        </div>
    </div>
)

export default connect(passReduxStateToProps)(AdminToggle)
