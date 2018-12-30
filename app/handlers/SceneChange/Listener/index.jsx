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
        isSceneSelectInFlux: PropTypes.bool.isRequired,
        isSceneDonePreparing: PropTypes.bool.isRequired,
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
                isSceneSelectInFlux,
                isSceneDonePreparing
            } = this.props,
            {
                isSceneSelectInFlux: wasSceneSelectInFlux,
                isSceneDonePreparing: wasSceneDonePreparing
            } = prevProps

        // Is still being selected.
        if (isSceneSelectInFlux && !wasSceneSelectInFlux) {
            this._initiateExitTransition()

        // After scene change, slider and scroll transitions are now complete.
        } else if (isSceneDonePreparing && !wasSceneDonePreparing) {
            this._updateState()
        }
    }

    _initiateExitTransition() {
        this.props.updateSceneStore({ canSceneEnter: false })
        this.props.updateRenderStore({ didSceneEnter: false })
    }

    _updateState() {
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
    changeStore: {
        isSceneSelectInFlux,
        isSceneDonePreparing
    },
    selectedStore: {
        selectedSongIndex,
        selectedSceneIndex
    }
}) => ({
    isSceneSelectInFlux,
    isSceneDonePreparing,
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
