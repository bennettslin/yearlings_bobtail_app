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
    canSceneRender,
    renderableSongIndex,
    currentSceneIndex
}) => ({
    canSceneRender,
    renderableSongIndex,
    currentSceneIndex
})

class Scene extends Component {

    static propTypes = {
        // Through Redux.
        canSceneRender: PropTypes.bool.isRequired,
        renderableSongIndex: PropTypes.number.isRequired,
        currentSceneIndex: PropTypes.number.isRequired,

        // From parent.
        stageWidth: PropTypes.number.isRequired,
        stageHeight: PropTypes.number.isRequired,

        sceneDidRender: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            isShown: false,
            waitForShowTimeoutId: '',
            didRenderTimeoutId: ''
        }

        this._waitForShowBeforeRender = this._waitForShowBeforeRender.bind(this)
    }

    componentDidUpdate(prevProps) {
        const { canSceneRender } = this.props,
            { canSceneRender: couldRender } = prevProps

        if (canSceneRender && !couldRender) {
            console.warn('Scene rendered.')

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

    _waitForShowBeforeRender() {
        this.setState({
            isShown: true
        })
    }

    render() {
        const {
                renderableSongIndex,
                currentSceneIndex,

                stageWidth,
                stageHeight,

                canSceneRender
            } = this.props,

            { isShown } = this.state,

            sceneObject = getSceneObject(
                renderableSongIndex, currentSceneIndex
            ),

            { presences, sky, tiles } = sceneObject

        return (
            <div className={cx(
                'Scene',

                // More specific class, because Scene is a child of Theatre.
                { 'sceneIsShown': canSceneRender && isShown }
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

                <SceneAction
                    presences={presences}
                    tiles={tiles}
                    stageWidth={stageWidth}
                    stageHeight={stageHeight}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Scene)
