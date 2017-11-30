// Section to show the stage illustrations.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getSceneObject } from '../../helpers/data-helper'
import { getArrayOfLength } from '../../helpers/general-helper'
import { getFloorPanelCoordinatesForCornerAndElevation } from '../../helpers/stage-helper'

const mapStateToProps = ({
    renderReadySongIndex,
    currentSceneIndex
}) => ({
    renderReadySongIndex,
    currentSceneIndex
})

class StageSceneSection extends Component {

    static propTypes = {
        renderReadySongIndex: PropTypes.number.isRequired,
        currentSceneIndex: PropTypes.number.isRequired
    }

    render() {
        const { renderReadySongIndex,
                currentSceneIndex } = this.props,

            sceneObject = getSceneObject(renderReadySongIndex, currentSceneIndex)

        console.error('sceneObject', sceneObject, renderReadySongIndex);

        return (
            <div className="section stage-scene-section">
                {getArrayOfLength({ length: 7 }).map(y => (
                    getArrayOfLength({ length: 19 }).map(x => {
                        const percentageCoordinates =
                            getFloorPanelCoordinatesForCornerAndElevation(x, y, 0)

                        return (
                            <div
                                key={x + '-' + y}
                                className="test-floor-panel-pixel"
                                style={{
                                    left: percentageCoordinates.xPercentage + '%',
                                    bottom: percentageCoordinates.yPercentage + '%'
                                }}
                            />
                        )
                    })
                ))}
            </div>
        )
    }
}

export default connect(mapStateToProps)(StageSceneSection)
