// Section to show the stage illustrations.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const mapStateToProps = ({
    stageCoordinates,
    renderReadySongIndex
}) => ({
    stageCoordinates,
    renderReadySongIndex
})

const stageSectionPropTypes = {
    stageCoordinates: PropTypes.shape({
        top: PropTypes.number.isRequired,
        left: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired
    })
},

StageSection = ({

    stageCoordinates,
    // renderReadySongIndex

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

    // console.error('renderReadySongIndex', renderReadySongIndex);

    return (
        <div className="section stage-section">
            <div
                className="aspect-ratio-container"
                style={aspectRatioContainerStyle}
            >
                <div className="sky" />
            </div>
        </div>
    )
}

StageSection.propTypes = stageSectionPropTypes

export default connect(mapStateToProps)(StageSection)
