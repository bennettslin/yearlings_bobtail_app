import React from 'react'
import DrawingsSection from './drawings-section'

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
    <div className="Admin__column">
        <div className="Admin__field drawing">
            <DrawingsSection />
        </div>
    </div>
)

export default Drawing
