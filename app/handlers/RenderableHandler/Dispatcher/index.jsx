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
        songChangeTimeoutId: ''
    }

    componentDidMount() {
        this.props.getRefs({
            dispatchSceneChangeUnrenderable:
                this.dispatchSceneChangeUnrenderable,
            dispatchSongChangeUnrenderable:
                this.dispatchSongChangeUnrenderable
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
            this._dispatchSongChangeRenderable.bind(this, callback), 500
        )

        this.setState({
            songChangeTimeoutId
        })
    }

    _dispatchSceneChangeRenderable = () => {
        this.props.updateRenderableStore({ isSceneChangeRenderable: true })
    }

    _dispatchSongChangeRenderable = (callback) => {
        this.props.updateRenderableStore({ isSongChangeRenderable: true })
        callback()
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
