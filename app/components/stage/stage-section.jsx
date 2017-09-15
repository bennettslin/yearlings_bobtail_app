// Section to show the stage illustrations.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import StageSceneSection from './stage-scene-section'

const mapStateToProps = ({
    stageCoordinates
}) => ({
    stageCoordinates
})

class StageSection extends Component {

    static propTypes = {
        stageCoordinates: PropTypes.shape({
            top: PropTypes.number.isRequired,
            left: PropTypes.number.isRequired,
            width: PropTypes.number.isRequired,
            height: PropTypes.number.isRequired
        })
    }

    render() {

        const { stageCoordinates } = this.props,

            { top,
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
                    <StageSceneSection />
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(StageSection)
