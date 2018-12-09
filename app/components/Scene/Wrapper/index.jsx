// Stage elements that change based on the scene.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import { getSceneObject } from 'helpers/data'

import {
    Z_INDICES_MATRIX_NAME,
    HSLA_MATRIX_NAME
} from 'constants/scene'

import { getCubesForKey } from '../../../scene/cubes'

import {
    getParentClassNamesForSceneLogic,
    getClassNameForSlantDirection
} from 'helpers/className'

const mapStateToProps = ({
    renderStore: { canSceneRender },
    renderedStore: { renderedSongIndex },
    sceneStore: { currentSceneIndex }
}) => ({
    canSceneRender,
    renderedSongIndex,
    currentSceneIndex
})

class SceneWrapper extends Component {

    static propTypes = {
        // Through Redux.
        canSceneRender: PropTypes.bool.isRequired,
        renderedSongIndex: PropTypes.number.isRequired,
        currentSceneIndex: PropTypes.number.isRequired,

        // From parent.
        children: PropTypes.any.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canSceneRender
    }

    render() {
        const {
                renderedSongIndex,
                currentSceneIndex,
                children
            } = this.props,

            sceneObject = getSceneObject(
                renderedSongIndex,
                currentSceneIndex
            ),

            { cubes: cubesKey } = sceneObject,

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
            <div
                {...{
                    className: cx(
                        'SceneWrapper',
                        zIndexClassNames,
                        hslaClassNames,
                        slantDirectionClassName
                    )
                }}
            >
                {children}
            </div>
        )
    }
}

export default connect(mapStateToProps)(SceneWrapper)
