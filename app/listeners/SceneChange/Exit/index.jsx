// Child that knows rules to toggle admin.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateEntranceStore } from '../../../redux/entrance/action'
import {
    mapSelectedSongIndex,
    mapSelectedSceneIndex
} from '../../../redux/selected/selector'

const mapStateToProps = state => {
    const
        selectedSongIndex = mapSelectedSongIndex(state),
        selectedSceneIndex = mapSelectedSceneIndex(state)

    return {
        selectedSongIndex,
        selectedSceneIndex
    }
}

class SceneChangeExitListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSceneIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        updateEntranceStore: PropTypes.func.isRequired
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
        logTransition('Begin exit from scene change.')
        this.props.updateEntranceStore({
            didSceneScrollExit: false,

            // Scene change bypasses update part of transition.

            canSceneEnter: false,
            didSceneEnter: false
        })

        /**
         * Scene change does not need timeout, because in production, changing
         * between multiple scenes quickly isn't possible.
         */
    }

    render() {
        return null
    }
}

export default connect(
    mapStateToProps,
    { updateEntranceStore }
)(SceneChangeExitListener)
