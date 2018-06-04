// Stage elements that change based on the scene.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import ScenePlane from './ScenePlane'
import SceneSky from './SceneSky'

import { getSceneObject } from '../../helpers/dataHelper'
import { DEFAULT_STAGE_TILES } from '../../constants/tiles'

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

            { actions, sky, tiles } = sceneObject,

            // Separate ceiling and floor config values.

            /**
             * FIXME: These safety checks should no longer be needed once all
             * tiles and faces for all scenes are established.
             */
            { ceiling = DEFAULT_STAGE_TILES.ceiling,
              floor = DEFAULT_STAGE_TILES.floor,
              slantDirection } = tiles,

            ceilingZIndices = ceiling.zIndices || DEFAULT_STAGE_TILES.ceiling.zIndices,

            ceilingFaces = ceiling.faces || DEFAULT_STAGE_TILES.ceiling.faces,

            floorZIndices = floor.zIndices || DEFAULT_STAGE_TILES.floor.zIndices,

            floorFaces = floor.faces || DEFAULT_STAGE_TILES.floor.faces

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
                <ScenePlane
                    zIndices={ceilingZIndices}
                    colours={ceilingFaces}
                    slantDirection={slantDirection}
                    stageWidth={stageWidth}
                    stageHeight={stageHeight}
                />

                {/* Floor tiles. */}
                <ScenePlane
                    isFloor
                    actions={actions}
                    zIndices={floorZIndices}
                    colours={floorFaces}
                    slantDirection={slantDirection}
                    stageWidth={stageWidth}
                    stageHeight={stageHeight}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Scene)
