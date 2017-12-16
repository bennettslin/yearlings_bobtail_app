// Section to show the stage illustrations.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'

import StageActionField from './stage-action-field'
import StageFloorField from './stage-floor-field'
import StageSkyField from './stage-sky-field'

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
        isHeavyRenderReady: PropTypes.bool.isRequired,
        renderReadySongIndex: PropTypes.number.isRequired,
        currentSceneIndex: PropTypes.number.isRequired
    }

    render() {
        const { isHeavyRenderReady,
                renderReadySongIndex,
                currentSceneIndex } = this.props,

            sceneObject = getSceneObject(renderReadySongIndex, currentSceneIndex),

            { actors, fixtures, walls, sky, floorPanels } = sceneObject

        console.error('sceneObject', sceneObject, renderReadySongIndex, currentSceneIndex)

        return (
            <div className={classnames(
                'section',
                'stage-scene-section',
                isHeavyRenderReady ? 'render-ready' : 'render-unready'
            )}>
                <StageSkyField
                    sky={sky}
                />
                <StageFloorField
                    floorPanels={floorPanels}
                />
                <StageActionField
                    walls={walls}
                    fixtures={fixtures}
                    actors={actors}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(StageSceneSection)
