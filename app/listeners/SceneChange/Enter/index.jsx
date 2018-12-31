// Singleton to listen for changes that reset render flow.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateSceneStore } from 'flux/scene/action'

import { getScene } from 'album/api/scenes'

import {
    TIME_ANYTIME,
    SEASON_INDOOR
} from 'scene/sky'

class SceneChangeEnterListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSceneChangeScrollExitDone: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedSceneIndex: PropTypes.number.isRequired,
        updateSceneStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._checkSceneChange(prevProps)
    }

    _checkSceneChange(prevProps) {
        const
            { isSceneChangeScrollExitDone } = this.props,
            { isSceneChangeScrollExitDone: wasExitScrollDone } = prevProps

        /**
         * Scroll has finished exit transition, so now update state to kick off
         * enter transition.
         */
        if (isSceneChangeScrollExitDone && !wasExitScrollDone) {
            this._beginEnterTransitionWithNewState()
        }
    }

    _beginEnterTransitionWithNewState() {
        logEnter('Scene can enter.')

        const
            {
                selectedSongIndex,
                selectedSceneIndex
            } = this.props,
            {
                cubes: sceneCubesKey,
                layers: scenePresenceLayers,
                sky: {
                    time: sceneTime = TIME_ANYTIME,
                    season: sceneSeason = SEASON_INDOOR
                }

            } = getScene(
                selectedSongIndex,
                selectedSceneIndex
            )

        this.props.updateSceneStore({
            canSceneEnter: true,
            sceneCubesKey,
            sceneSongIndex: selectedSongIndex,
            sceneSceneIndex: selectedSceneIndex,
            scenePresenceLayers,
            sceneTime,
            sceneSeason
        })
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    changeStore: { isSceneChangeScrollExitDone },
    selectedStore: {
        selectedSongIndex,
        selectedSceneIndex
    }
}) => ({
    isSceneChangeScrollExitDone,
    selectedSongIndex,
    selectedSceneIndex
})

export default connect(
    mapStateToProps,
    {
        updateSceneStore
    }
)(SceneChangeEnterListener)
