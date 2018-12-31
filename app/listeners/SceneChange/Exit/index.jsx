// Child that knows rules to toggle admin.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateTransitionStore } from 'flux/transition/action'
import { updateSceneStore } from 'flux/scene/action'

class SceneChangeExitListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSceneIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        updateTransitionStore: PropTypes.func.isRequired,
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
        this.props.updateSceneStore({
            canSceneEnter: false,
            didSceneScrollExit: false
        })
        this.props.updateTransitionStore({ didSceneEnter: false })

        /**
         * Scene change does not need timeout, because in production, changing
         * between multiple scenes quickly isn't possible.
         */
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
        updateTransitionStore,
        updateSceneStore
    }
)(SceneChangeExitListener)
