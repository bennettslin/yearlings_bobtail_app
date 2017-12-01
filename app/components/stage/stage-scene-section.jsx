// Section to show the stage illustrations.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'

import StageActionField from './stage-action-field'
import StageFloorField from './stage-floor-field'

import { getSceneObject } from '../../helpers/data-helper'

const mapStateToProps = ({
    isHeavyRenderReady,
    renderReadySongIndex,
    currentSceneIndex
}) => ({
    isHeavyRenderReady,
    renderReadySongIndex,
    currentSceneIndex
})

class StageSceneSection extends Component {

    static propTypes = {
        renderReadySongIndex: PropTypes.number.isRequired,
        currentSceneIndex: PropTypes.number.isRequired
    }

    render() {
        const { isHeavyRenderReady,
                renderReadySongIndex,
                currentSceneIndex } = this.props,

            sceneObject = getSceneObject(renderReadySongIndex, currentSceneIndex),

            { floorPanels } = sceneObject

        return (
            <div className={classnames(
                'section',
                'stage-scene-section',
                isHeavyRenderReady ? 'render-ready' : 'render-unready'
            )}>
                <StageFloorField
                    floorPanels={floorPanels}
                />
                <StageActionField />
            </div>
        )
    }
}

export default connect(mapStateToProps)(StageSceneSection)
