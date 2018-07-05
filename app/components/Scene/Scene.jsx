// Stage elements that change based on the scene.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import cx from 'classnames'

import {
    setRenderableCubesYIndex,
    setCanRenderPresences,
    setCanRenderPixels
} from '../../redux/actions/render'

import Layers from './Layers/Layers'
import SceneSky from './SceneSky'
import Wood from '../Stage/Wood'

import { getSceneObject } from '../../helpers/dataHelper'

const mapStateToProps = ({
    canSceneRender,
    canPixelsRender,
    renderableSongIndex,
    currentSceneIndex
}) => ({
    canSceneRender,
    canPixelsRender,
    renderableSongIndex,
    currentSceneIndex
})

class Scene extends Component {

    static propTypes = {
        // Through Redux.
        canSceneRender: PropTypes.bool.isRequired,
        canPixelsRender: PropTypes.bool.isRequired,
        renderableSongIndex: PropTypes.number.isRequired,
        currentSceneIndex: PropTypes.number.isRequired,
        setRenderableCubesYIndex: PropTypes.func.isRequired,
        setCanRenderPresences: PropTypes.func.isRequired,
        setCanRenderPixels: PropTypes.func.isRequired,

        // From parent.
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
        const {
                canSceneRender,
                canPixelsRender
            } = this.props,
            {
                canSceneRender: couldSceneRender,
                canPixelsRender: couldPixelsRender
            } = prevProps

        if (
            canPixelsRender && !couldPixelsRender
        ) {
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

        } else if (!canSceneRender && couldSceneRender) {

            // Reset cubes, presences, and pixels.
            this.props.setRenderableCubesYIndex()
            this.props.setCanRenderPresences(false)
            this.props.setCanRenderPixels(false)

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
                />

                {/* Wood is in front of sky, but behind presences and cubes. */}
                <Wood />

                <Layers
                    presences={presences}
                    tiles={tiles}
                />
            </div>
        )
    }
}

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        setRenderableCubesYIndex,
        setCanRenderPresences,
        setCanRenderPixels
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(Scene)
