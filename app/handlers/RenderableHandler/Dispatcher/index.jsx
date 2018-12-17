// Child that knows rules to toggle admin.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateRenderableStore } from 'flux/renderable/action'

class RenderableDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        updateRenderableStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    state = {
        sceneChangeTimeoutId: '',
        songChangeTimeoutId: '',
        windowResizeTimeoutId: ''
    }

    componentDidMount() {
        this.props.getRefs({
            dispatchSceneChangeUnrenderable:
                this.dispatchSceneChangeUnrenderable,
            dispatchSongChangeUnrenderable:
                this.dispatchSongChangeUnrenderable,
            dispatchWindowResizeUnrenderable:
                this.dispatchWindowResizeUnrenderable
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

    dispatchSongChangeUnrenderable = (callback) => {
        this.props.updateRenderableStore({ isSongChangeRenderable: false })

        // Clear previous timeout.
        clearTimeout(this.state.songChangeTimeoutId)

        /**
         * Wait for song selection to finish.
         */
        const songChangeTimeoutId = setTimeout(
            this._dispatchSongChangeRenderable.bind(this, callback), 200
        )

        this.setState({
            songChangeTimeoutId
        })
    }

    dispatchWindowResizeUnrenderable = () => {
        this.props.updateRenderableStore({ isWindowResizeRenderable: false })

        // Clear previous timeout.
        clearTimeout(this.state.windowResizeTimeoutId)

        /**
         * Wait for window resize to finish.
         */
        const windowResizeTimeoutId = setTimeout(
            this._dispatchWindowResizeRenderable, 500
        )

        this.setState({
            windowResizeTimeoutId
        })
    }


    _dispatchSceneChangeRenderable = () => {
        this.props.updateRenderableStore({ isSceneChangeRenderable: true })
    }

    _dispatchSongChangeRenderable = (callback) => {
        this.props.updateRenderableStore({ isSongChangeRenderable: true })
        callback()
    }

    _dispatchWindowResizeRenderable = () => {
        this.props.updateRenderableStore({ isWindowResizeRenderable: true })
    }

    render() {
        return null
    }
}

const mapStateToProps = null

export default connect(
    mapStateToProps,
    { updateRenderableStore }
)(RenderableDispatcher)
