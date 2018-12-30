// Child that knows rules to toggle admin.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateChangeStore } from 'flux/change/action'
import { updateRenderStore } from 'flux/render/action'
import { updateSceneStore } from 'flux/scene/action'

class SceneChangeExitListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSceneIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        updateChangeStore: PropTypes.func.isRequired,
        updateRenderStore: PropTypes.func.isRequired,
        updateSceneStore: PropTypes.func.isRequired
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
            this._beginExitTransition()
        }
    }

    _beginExitTransition = () => {
        this.props.updateChangeStore({ isSceneChangeExitScrollDone: false })
        this.props.updateSceneStore({ canSceneEnter: false })
        this.props.updateRenderStore({ didSceneEnter: false })
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
    {
        updateChangeStore,
        updateRenderStore,
        updateSceneStore
    }
)(SceneChangeExitListener)
