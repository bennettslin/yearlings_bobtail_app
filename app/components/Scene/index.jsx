// Stage elements that change based on the scene.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateRenderStore } from 'flux/render/action'

import Layers from './Layers'
import Sky from './Sky'
import Wood from '../Stage/Wood'

import { getSceneObject } from 'helpers/data'

import {
    Z_INDICES_MATRIX_NAME,
    HSLA_MATRIX_NAME
} from 'constants/scene'

import {
    getCubesForKey
} from './helper'

import {
    getParentClassNamesForSceneLogic,
    getClassNameForSlantDirection
} from 'helpers/className'

const mapStateToProps = ({
    renderStore: {
        canSceneRender
    },
    renderedStore: {
        renderedSongIndex,
        renderedSceneIndex
    }
}) => ({
    canSceneRender,
    renderedSongIndex,
    renderedSceneIndex
})

class Scene extends Component {

    static propTypes = {
        // Through Redux.
        canSceneRender: PropTypes.bool.isRequired,
        renderedSongIndex: PropTypes.number.isRequired,
        renderedSceneIndex: PropTypes.number.isRequired,
        updateRenderStore: PropTypes.func.isRequired
    }

    state = {
        isShown: false,
        didRenderTimeoutId: '',
        waitForShowTimeoutId: ''
    }

    componentDidUpdate(prevProps) {
        const { canSceneRender } = this.props,
            { canSceneRender: couldRender } = prevProps

        if (canSceneRender && !couldRender) {
            logger.warn('Scene rendered.')

            clearTimeout(this.state.didRenderTimeoutId)
            clearTimeout(this.state.waitForShowTimeoutId)

            const
                // Wait for parent transition before continuing render sequence.
                didRenderTimeoutId = setTimeout(
                    this._sceneDidRender, 200
                ),
                // Set timeout to prevent children transitions before render.
                waitForShowTimeoutId = setTimeout(
                    this._waitForShowBeforeRender, 50
                )

            this.setState({
                didRenderTimeoutId,
                waitForShowTimeoutId
            })

        } else if (couldRender && !canSceneRender) {

            this.setState({
                isShown: false
            })
        }
    }

    _sceneDidRender = () => {
        this.props.updateRenderStore({ didSceneRender: true })
    }

    _waitForShowBeforeRender = () => {
        this.setState({
            isShown: true
        })
    }

    render() {
        const {
                renderedSongIndex,
                renderedSceneIndex,
                canSceneRender
            } = this.props,

            { isShown } = this.state,

            sceneObject = getSceneObject(
                renderedSongIndex,
                renderedSceneIndex
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
                { 'Scene__shown': canSceneRender && isShown },

                zIndexClassNames,
                hslaClassNames,
                slantDirectionClassName
            )}>
                <Sky
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

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateRenderStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(Scene)
