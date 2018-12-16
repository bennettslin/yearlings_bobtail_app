// Stage elements that change based on the scene.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import { getCubesForKey } from '../../../scene/cubes'
import { getClassNameForSlantDirection } from 'helpers/className'
import { getParentClassNamesForSceneLogic } from './helper'
import { getPropsAreShallowEqual } from 'helpers/general'

import { HSLA_MATRIX_NAME } from 'constants/scene'

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
