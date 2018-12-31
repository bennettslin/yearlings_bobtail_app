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

class SceneChangeUpdateDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        selectedSceneIndex: PropTypes.number.isRequired,
        updateSceneStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            dispatchCanSceneEnter: this.dispatchCanSceneEnter
        })
    }

    // TODO: Scene can enter in two places. Is this correct?
    dispatchCanSceneEnter = ({
        selectedSongIndex = this.props.selectedSongIndex,
        selectedSceneIndex = this.props.selectedSceneIndex

    } = {}) => {
        logEnter('Scene can enter.')

        const
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
        updateSceneStore
    }
)(SceneChangeUpdateDispatcher)
