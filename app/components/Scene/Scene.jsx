// Stage elements that change based on the scene.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Layers from './Layers/Layers'
import SceneSky from './SceneSky'
import Wood from '../Stage/Wood'

import { getSceneObject } from '../../helpers/dataHelper'
import { getPropsAreShallowEqual } from '../../helpers/generalHelper'

import {
    Z_INDICES_MATRIX_NAME,
    HSLA_MATRIX_NAME
} from './sceneConstants'

import {
    getCubesForKey,
    getParentClassNamesForSceneLogic,
    getClassNameForSlantDirection
} from './sceneHelper'

const mapStateToProps = ({
    renderableStore
}) => ({
    renderableSongIndex: renderableStore.renderableSongIndex,
    renderableSceneIndex: renderableStore.renderableSceneIndex
})

class Scene extends Component {

    static propTypes = {
        // Through Redux.
        renderableSongIndex: PropTypes.number.isRequired,
        renderableSceneIndex: PropTypes.number.isRequired,
    }

    shouldComponentUpdate(nextProps) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    render() {
        const {
                renderableSongIndex,
                renderableSceneIndex,
            } = this.props,

            sceneObject = getSceneObject(
                renderableSongIndex,
                renderableSceneIndex
            ),

            {
                sky: skyConfig,
                cubes: cubesKey
            } = sceneObject,

            cubes = getCubesForKey(cubesKey),

            zIndexClassNames = getParentClassNamesForSceneLogic(
                cubes,
                Z_INDICES_MATRIX_NAME
            ),
            hslaClassNames = getParentClassNamesForSceneLogic(
                cubes,
                HSLA_MATRIX_NAME
            ),

            { slantDirection } = cubes,

            slantDirectionClassName = getClassNameForSlantDirection(
                slantDirection
            )

        return (
            <div className={cx(
                'Scene',

                zIndexClassNames,
                hslaClassNames,
                slantDirectionClassName
            )}>
                <SceneSky
                    {...{
                        skyConfig
                    }}
                />

                {/* Wood is in front of sky, but behind presences and cubes. */}
                <Wood />
                <Layers />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Scene)
