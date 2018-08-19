// Stage elements that change based on the scene.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Layers from './Layers/Layers'
import SceneSky from './SceneSky'
import Wood from 'components/Stage/Wood'

import { getSceneObject } from 'helpers/dataHelper'
// import { getPropsAreShallowEqual } from 'helpers/generalHelper'

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

        // From parent.
        sceneDidRender: PropTypes.func.isRequired
    }

    state = {
        isShown: false,
        waitForShowTimeoutId: '',
        didRenderTimeoutId: ''
    }

    // shouldComponentUpdate(nextProps) {
    //     return !getPropsAreShallowEqual({
    //         props: this.props,
    //         nextProps
    //     })
    // }

    // No shouldComponentUpdate necessary, I think.

    componentDidUpdate(prevProps) {
        const { canSceneRender } = this.props,
            { canSceneRender: couldRender } = prevProps

        if (canSceneRender && !couldRender) {
            logger.warn('Scene rendered.')

            clearTimeout(this.state.waitForShowTimeoutId)
            clearTimeout(this.state.didRenderTimeoutId)

            const
                // Set timeout to prevent children transitions before render.
                waitForShowTimeoutId = setTimeout(
                    this._waitForShowBeforeRender, 50
                ),
                // Wait for parent transition before continuing render sequence.
                didRenderTimeoutId = setTimeout(
                    this.props.sceneDidRender, 100
                )

            this.setState({
                waitForShowTimeoutId,
                didRenderTimeoutId
            })

        } else if (couldRender && !canSceneRender) {

            this.setState({
                isShown: false
            })
        }
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
                { 'parent__shown': canSceneRender && isShown },

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
