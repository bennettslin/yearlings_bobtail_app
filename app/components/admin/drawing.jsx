import React from 'react'
import DrawingsSection from './drawings/drawings-section'

/*************
 * CONTAINER *
 *************/

const Drawing = (props) => (
    <DrawingView {...props} />
)

/****************
 * PRESENTATION *
 ****************/

const DrawingView = () => (
    <div className="admin-column">
        <div className="admin-field drawing-admin-field">
            <DrawingsSection />
        </div>
    </div>
)

export default Drawing
