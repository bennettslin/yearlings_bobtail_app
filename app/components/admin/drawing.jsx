import React from 'react'
import DrawingsSection from './drawings/drawings-section'

/*************
 * CONTAINER *
 *************/

const Drawing = (props) => {

    return (
        <DrawingView {...props}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const DrawingView = ({

    // From props.
    drawingCharacters

    // From controller.


}) => (
    <div className="admin-column">
        <div className="admin-field drawing-admin-field">
            <DrawingsSection
                drawingCharacters={drawingCharacters}
            />
        </div>
    </div>
)

export default Drawing
