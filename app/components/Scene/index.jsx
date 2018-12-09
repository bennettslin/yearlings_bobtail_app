// Stage elements that change based on the scene.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateRenderStore } from 'flux/render/action'

import SceneWrapper from './Wrapper'
import Layers from './Layers'
import Sky from './Sky'
import Wood from '../Stage/Wood'

const mapStateToProps = ({
    renderStore: {
        canSceneRender,
        didSceneRender
    }
}) => ({
    canSceneRender,
    didSceneRender
})

class Scene extends PureComponent {

    static propTypes = {
        // Through Redux.
        canSceneRender: PropTypes.bool.isRequired,
        didSceneRender: PropTypes.bool.isRequired,
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
        const { didSceneRender } = this.props

        return (
            <div className={cx(
                'Scene',
                { 'Scene__shown': didSceneRender }
            )}>
                <SceneWrapper>
                    <Sky />
                    <Wood />
                    <Layers />
                </SceneWrapper>
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
