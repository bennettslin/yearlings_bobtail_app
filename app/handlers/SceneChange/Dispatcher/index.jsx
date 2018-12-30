// Child that knows rules to toggle admin.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateChangeStore } from 'flux/change/action'

class SceneChangeDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSceneIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        updateChangeStore: PropTypes.func.isRequired
    }

    state = {
        sceneChangeTimeoutId: ''
    }

    componentDidUpdate(prevProps) {
        this._checkSceneChange(prevProps)
    }

    _checkSceneChange(prevProps) {
        const
            {
                selectedSceneIndex,
                selectedSongIndex
            } = this.props,
            {
                selectedSceneIndex: prevSceneIndex,
                selectedSongIndex: prevSongIndex
            } = prevProps

        if (
            // Only listen for scene change within the same song.
            selectedSongIndex === prevSongIndex &&
            selectedSceneIndex !== prevSceneIndex
        ) {
            this._dispatchSceneSelectInFlux()
        }
    }


    _dispatchSceneSelectInFlux = () => {
        this.props.updateChangeStore({
            isSceneSelectInFlux: true,
            isSceneDonePreparing: false
        })

        // Clear previous timeout.
        clearTimeout(this.state.sceneChangeTimeoutId)

        /**
         * Wait for scene selection to finish.
         */
        const sceneChangeTimeoutId = setTimeout(
            this._dispatchSceneSelectComplete, 200
        )

        this.setState({
            sceneChangeTimeoutId
        })
    }

    _dispatchSceneSelectComplete = () => {
        this.props.updateChangeStore({ isSceneSelectInFlux: false })
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    selectedStore: {
        selectedSongIndex,
        selectedSceneIndex
    }
}) => ({
    selectedSongIndex,
    selectedSceneIndex
})

export default connect(
    mapStateToProps,
    { updateChangeStore }
)(SceneChangeDispatcher)
