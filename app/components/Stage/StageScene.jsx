// Section to show the stage illustrations.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import StageActionField from './StageSceneAction'
import StageSceneTiling from './StageSceneTiling'
import StageSceneSky from './StageSceneSky'

import { getSceneObject } from '../../helpers/dataHelper'
import { DEFAULT_STAGE_TILES } from '../../constants/stageTiles'

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
        // Through Redux.
        isHeavyRenderReady: PropTypes.bool.isRequired,
        renderReadySongIndex: PropTypes.number.isRequired,
        currentSceneIndex: PropTypes.number.isRequired,

        // From parent.
        stageWidth: PropTypes.number.isRequired,
        stageHeight: PropTypes.number.isRequired
    }

    render() {
        const { isHeavyRenderReady,
                renderReadySongIndex,
                currentSceneIndex,

                stageWidth,
                stageHeight } = this.props,

            sceneObject = getSceneObject(renderReadySongIndex, currentSceneIndex),

            { actors, fixtures, walls, sky, tiles } = sceneObject,

            { slantDirection = '',
              ceilingZIndices = DEFAULT_STAGE_TILES.ceilingZIndices,
              ceilingColours = DEFAULT_STAGE_TILES.ceilingColours,
              floorZIndices = DEFAULT_STAGE_TILES.floorZIndices,
              floorColours = DEFAULT_STAGE_TILES.floorColours } = tiles

        return (
            <div className={cx(
                'StageScene',
                isHeavyRenderReady ? 'renderReady' : 'renderUnready'
            )}>
                <StageSceneSky
                    sky={sky}
                    stageWidth={stageWidth}
                    stageHeight={stageHeight}
                />

                {/* Ceiling tiles. */}
                <StageSceneTiling
                    isFloor={false}
                    slantDirection={slantDirection}
                    zIndices={ceilingZIndices}
                    colours={ceilingColours}
                    stageWidth={stageWidth}
                    stageHeight={stageHeight}
                />

                {/* Floor tiles. */}
                <StageSceneTiling
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

export default connect(mapStateToProps)(StageSceneSection)
