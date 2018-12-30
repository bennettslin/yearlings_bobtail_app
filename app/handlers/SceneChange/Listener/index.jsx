// Singleton to listen for changes that reset render flow.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateRenderStore } from 'flux/render/action'
import { updateSceneStore } from 'flux/scene/action'

import { getScene } from 'album/api/scenes'

import {
    TIME_ANYTIME,
    SEASON_INDOOR
} from 'scene/sky'

class SceneChangeListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSceneChanging: PropTypes.bool.isRequired,
        isScenePreparing: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedSceneIndex: PropTypes.number.isRequired,

        updateRenderStore: PropTypes.func.isRequired,
        updateSceneStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._checkSceneChange(prevProps)
    }

    _checkSceneChange(prevProps) {
        const
            {
                isSceneChanging,
                isScenePreparing
            } = this.props,
            {
                isSceneChanging: wasSceneChanging,
                isScenePreparing: wasScenePreparing
            } = prevProps

        // Scene is currently being changed.
        if (isSceneChanging && !wasSceneChanging) {
            this._exitTransitionScene()

        // After scene change, slider and scroll transitions are now complete.
        } else if (!isScenePreparing && wasScenePreparing) {
            this._updateSceneState()
        }
    }

    _exitTransitionScene() {
        this.props.updateSceneStore({ canSceneRender: false })
        this.props.updateRenderStore({ didSceneRender: false })
    }

    _updateSceneState() {
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

        logRender('Scene can render.')

        this.props.updateSceneStore({
            canSceneRender: true,
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
    changeStore: {
        isSceneChanging,
        isScenePreparing
    },
    selectedStore: {
        selectedSongIndex,
        selectedSceneIndex
    }
}) => ({
    isSceneChanging,
    isScenePreparing,
    selectedSongIndex,
    selectedSceneIndex
})

export default connect(
    mapStateToProps,
    {
        updateRenderStore,
        updateSceneStore
    }
)(SceneChangeListener)
