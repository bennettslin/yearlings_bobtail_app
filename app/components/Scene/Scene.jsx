// Stage elements that change based on the scene.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import cx from 'classnames'

import {
    setCanRenderPresences
} from '../../redux/actions/render'

import Layers from './Layers/Layers'
import SceneSky from './SceneSky'
import Wood from '../Stage/Wood'

import { getSceneObject } from '../../helpers/dataHelper'
import { getPropsAreShallowEqual } from '../../helpers/generalHelper'
import {
    getCubesForKey,
    getZIndexClassNamesForCubes,
    getClassNameForSlantDirection
} from './sceneDataHelper'

const mapStateToProps = ({
    canSceneRender,
    renderableStore
}) => ({
    canSceneRender,
    renderableSongIndex: renderableStore.renderableSongIndex,
    renderableSceneIndex: renderableStore.renderableSceneIndex
})

class Scene extends Component {

    static propTypes = {
        // Through Redux.
        canSceneRender: PropTypes.bool.isRequired,
        renderableSongIndex: PropTypes.number.isRequired,
        renderableSceneIndex: PropTypes.number.isRequired,

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

    shouldComponentUpdate(nextProps, nextState) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        }) || !getPropsAreShallowEqual({
            props: this.state,
            nextState
        })
    }

    componentDidUpdate(prevProps) {
        const {
                canSceneRender
            } = this.props,
            {
                canSceneRender: couldSceneRender
            } = prevProps

        if (
            canSceneRender && !couldSceneRender
        ) {
            logger.warn('Scene rendered.')

            clearTimeout(this.state.waitForShowTimeoutId)
            clearTimeout(this.state.didRenderTimeoutId)

            const
                // Set timeout to prevent children transitions before render.
                waitForShowTimeoutId = setTimeout(
                    this._waitForShowBeforeRender, 0
                ),
                // Wait for parent transition before continuing render sequence.
                didRenderTimeoutId = setTimeout(
                    this.props.sceneDidRender, 0
                )

            this.setState({
                waitForShowTimeoutId,
                didRenderTimeoutId
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
                renderableSceneIndex,
                canSceneRender
            } = this.props,

            {
                isShown
            } = this.state

            const sceneObject = getSceneObject(
                renderableSongIndex, renderableSceneIndex
            ),

            {
                sky: skyObject,
                cubes: cubesKey
            } = sceneObject,

            {
                time: timeKey,
                season: seasonKey
            } = skyObject,

            cubes = getCubesForKey(cubesKey),
            zIndexClassNames = getZIndexClassNamesForCubes(cubes),

            { slantDirection } = cubes,

            slantDirectionClassName = getClassNameForSlantDirection(
                slantDirection
            )

        return (
            <div className={cx(
                'Scene',

                // More specific class, because Scene is a child of Theatre.
                { 'sceneIsShown': canSceneRender && isShown },

                zIndexClassNames,
                slantDirectionClassName
            )}>
                <SceneSky
                    {...{
                        timeKey,
                        seasonKey
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
        setCanRenderPresences
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(Scene)
