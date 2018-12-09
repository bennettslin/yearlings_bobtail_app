// Singleton to listen for non-toggle events that require turning off score.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateRenderableStore } from 'flux/renderable/action'

const mapStateToProps = ({
    renderedStore: { renderedSongIndex },
    sceneStore: { currentSceneIndex }
}) => ({
    renderedSongIndex,
    currentSceneIndex
})

class SceneListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        currentSceneIndex: PropTypes.number.isRequired,
        renderedSongIndex: PropTypes.number.isRequired,
        updateRenderableStore: PropTypes.func.isRequired
    }

    state = {
        sceneChangeTimeoutId: ''
    }

    componentDidUpdate(prevProps) {
        this._updateSceneIfNeeded(prevProps)
    }

    _updateSceneIfNeeded(prevProps) {
        const
            {
                currentSceneIndex,
                renderedSongIndex
            } = this.props,
            {
                currentSceneIndex: prevSceneIndex,
                renderedSongIndex: prevSongIndex
            } = prevProps

        if (
            // Only listen for scene change within the same song.
            renderedSongIndex === prevSongIndex &&
            currentSceneIndex !== prevSceneIndex
        ) {
            this._prepareForSceneChange()
        }
    }

    _prepareForSceneChange() {
        this.props.updateRenderableStore({ isSceneChangeRenderable: false })

        // Clear previous timeout.
        clearTimeout(this.state.sceneChangeTimeoutId)

        const sceneChangeTimeoutId = setTimeout(
            this._resolveSceneChange, 200
        )

        this.setState({
            sceneChangeTimeoutId
        })
    }

    _resolveSceneChange = () => {
        this.props.updateRenderableStore({ isSceneChangeRenderable: true })
    }

    render() {
        return null
    }
}

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateRenderableStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(SceneListener)
