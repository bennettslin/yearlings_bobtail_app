// Child that knows rules to toggle admin.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateRenderableStore } from 'flux/renderable/action'

class SceneChangeDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        updateRenderableStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    state = {
        sceneChangeTimeoutId: ''
    }

    componentDidMount() {
        this.props.getRefs({
            dispatchSceneChangeUnrenderable:
                this.dispatchSceneChangeUnrenderable
        })
    }

    dispatchSceneChangeUnrenderable = () => {
        this.props.updateRenderableStore({ isSceneChangeRenderable: false })

        // Clear previous timeout.
        clearTimeout(this.state.sceneChangeTimeoutId)

        /**
         * Wait for scene selection to finish.
         */
        const sceneChangeTimeoutId = setTimeout(
            this._dispatchSceneChangeRenderable, 200
        )

        this.setState({
            sceneChangeTimeoutId
        })
    }

    _dispatchSceneChangeRenderable = () => {
        this.props.updateRenderableStore({ isSceneChangeRenderable: true })
    }

    render() {
        return null
    }
}

const mapStateToProps = null

export default connect(
    mapStateToProps,
    { updateRenderableStore }
)(SceneChangeDispatcher)
