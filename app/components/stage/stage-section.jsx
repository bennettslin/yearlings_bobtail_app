// Section to show the stage illustrations.

import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({
    stageCoordinates
}) => ({
    stageCoordinates
})

// TODO: prop types

/*************
 * CONTAINER *
 *************/

const StageSection = (props) => (
    <StageSectionView {...props} />
)

/****************
 * PRESENTATION *
 ****************/

const StageSectionView = ({

    stageCoordinates

}) => {

    const { top,
            left,
            width,
            height } = stageCoordinates,

        aspectRatioContainerStyle = {
            top: `${top}px`,
            left: `${left}px`,
            width: `${width}px`,
            height: `${height}px`
        }

    return (
        <div className="section stage-section">
            <div
                className="aspect-ratio-container"
                style={aspectRatioContainerStyle}
            >

            </div>
        </div>
    )
}

export default connect(mapStateToProps)(StageSection)
