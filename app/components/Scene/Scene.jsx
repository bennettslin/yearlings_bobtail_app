// Stage elements that change based on the scene.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import StageActionField from './SceneAction'
import SceneTiling from './SceneTiling'
import SceneSky from './SceneSky'

import { getSceneObject } from '../../helpers/dataHelper'
import { DEFAULT_STAGE_TILES } from '../../constants/stageTiles'

const mapStateToProps = ({
    renderReadySongIndex,
    currentSceneIndex
}) => ({
    renderReadySongIndex,
    currentSceneIndex
})

class Scene extends Component {

    static propTypes = {
        // Through Redux.
        renderReadySongIndex: PropTypes.number.isRequired,
        currentSceneIndex: PropTypes.number.isRequired,

        // From parent.
        stageWidth: PropTypes.number.isRequired,
        stageHeight: PropTypes.number.isRequired
    }

    render() {
        const { renderReadySongIndex,
                currentSceneIndex,

                stageWidth,
                stageHeight } = this.props,

            sceneObject = getSceneObject(
                renderReadySongIndex, currentSceneIndex
            ),

            { actors, fixtures, walls, sky, tiles } = sceneObject,

            { slantDirection = '',
              ceilingZIndices = DEFAULT_STAGE_TILES.ceilingZIndices,
              ceilingColours = DEFAULT_STAGE_TILES.ceilingColours,
              floorZIndices = DEFAULT_STAGE_TILES.floorZIndices,
              floorColours = DEFAULT_STAGE_TILES.floorColours } = tiles

        return (
            <div className={cx(
                'Scene'
            )}>
                <SceneSky
                    sky={sky}
                    stageWidth={stageWidth}
                    stageHeight={stageHeight}
                />

                {/* Ceiling tiles. */}
                <SceneTiling
                    slantDirection={slantDirection}
                    zIndices={ceilingZIndices}
                    colours={ceilingColours}
                    stageWidth={stageWidth}
                    stageHeight={stageHeight}
                />

                {/* Floor tiles. */}
                <SceneTiling
                    isFloor
                    slantDirection={slantDirection}
                    zIndices={floorZIndices}
                    colours={floorColours}
                    stageWidth={stageWidth}
                    stageHeight={stageHeight}
                />

                <StageActionField
                    walls={walls}
                    fixtures={fixtures}
                    actors={actors}
                    sceneIndex={currentSceneIndex}
                    songIndex={renderReadySongIndex}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Scene)
