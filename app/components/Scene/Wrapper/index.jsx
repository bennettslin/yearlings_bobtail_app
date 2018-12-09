// Stage elements that change based on the scene.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import { getPropsAreShallowEqual } from 'helpers/general'

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
    sceneStore: { sceneCubesKey }
}) => ({
    canSceneRender,
    sceneCubesKey
})

class SceneWrapper extends Component {

    static propTypes = {
        // Through Redux.
        canSceneRender: PropTypes.bool.isRequired,
        sceneCubesKey: PropTypes.string.isRequired,

        // From parent.
        children: PropTypes.any.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canSceneRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    render() {
        const {
                sceneCubesKey,
                children
            } = this.props,

            cubes = getCubesForKey(sceneCubesKey),
            { slantDirection } = cubes,

            zIndexClassNames = getParentClassNamesForSceneLogic(
                cubes,
                Z_INDICES_MATRIX_NAME
            ),

            hslaClassNames = getParentClassNamesForSceneLogic(
                cubes,
                HSLA_MATRIX_NAME
            ),

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
