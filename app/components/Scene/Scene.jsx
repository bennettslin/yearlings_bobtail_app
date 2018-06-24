// Stage elements that change based on the scene.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import SceneAction from './SceneAction'
import SceneSky from './SceneSky'
import SceneWood from './SceneWood'

import { getSceneObject } from '../../helpers/dataHelper'

const mapStateToProps = ({
    renderableSongIndex,
    currentSceneIndex
}) => ({
    renderableSongIndex,
    currentSceneIndex
})

class Scene extends Component {

    static propTypes = {
        // Through Redux.
        renderableSongIndex: PropTypes.number.isRequired,
        currentSceneIndex: PropTypes.number.isRequired,

        // From parent.
        stageWidth: PropTypes.number.isRequired,
        stageHeight: PropTypes.number.isRequired,

        canSceneRender: PropTypes.bool.isRequired,
        sceneDidRender: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        if (this.props.canSceneRender && !prevProps.canSceneRender) {
            console.warn('Scene mounted.')

            setTimeout(
                this.props.sceneDidRender, 0
            )
        }
    }

    render() {
        const {
                renderableSongIndex,
                currentSceneIndex,

                stageWidth,
                stageHeight,

                canSceneRender
            } = this.props,

            sceneObject = getSceneObject(
                renderableSongIndex, currentSceneIndex
            ),

            { presences, sky, tiles } = sceneObject

        return (
            <div className={cx(
                'Scene'
            )}>
                <SceneSky
                    sky={sky}
                    stageWidth={stageWidth}
                    stageHeight={stageHeight}
                />

                {/* Wood is in front of sky, but behind presences and cubes. */}
                <SceneWood
                    stageWidth={stageWidth}
                    stageHeight={stageHeight}
                />

                {canSceneRender && (
                    <SceneAction
                        presences={presences}
                        tiles={tiles}
                        stageWidth={stageWidth}
                        stageHeight={stageHeight}
                    />
                )}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Scene)
