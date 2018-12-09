// Stage elements that change based on the scene.

import React, { PureComponent } from 'react'
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
        canSceneRender,
        didSceneRender
    },
    renderedStore: { renderedSongIndex },
    sceneStore: { currentSceneIndex }
}) => ({
    canSceneRender,
    didSceneRender,
    renderedSongIndex,
    currentSceneIndex
})

class Scene extends PureComponent {

    static propTypes = {
        // Through Redux.
        canSceneRender: PropTypes.bool.isRequired,
        didSceneRender: PropTypes.bool.isRequired,
        renderedSongIndex: PropTypes.number.isRequired,
        currentSceneIndex: PropTypes.number.isRequired,
        updateRenderStore: PropTypes.func.isRequired
    }

    state = { didRenderTimeoutId: '' }

    componentDidUpdate(prevProps) {
        const
            { canSceneRender } = this.props,
            { canSceneRender: couldRender } = prevProps

        if (canSceneRender && !couldRender) {
            clearTimeout(this.state.didRenderTimeoutId)

            // Wait for parent transition before continuing render sequence.
            const didRenderTimeoutId = setTimeout(
                this._sceneDidRender, 300
            )

            this.setState({ didRenderTimeoutId })
        }
    }

    _sceneDidRender = () => {
        this.props.updateRenderStore({ didSceneRender: true })
    }

    render() {
        const {
                renderedSongIndex,
                currentSceneIndex,
                didSceneRender
            } = this.props,

            sceneObject = getSceneObject(
                renderedSongIndex,
                currentSceneIndex
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
                { 'Scene__shown': didSceneRender },

                zIndexClassNames,
                hslaClassNames,
                slantDirectionClassName
            )}>
                <Sky {...{ skyConfig }} />

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
