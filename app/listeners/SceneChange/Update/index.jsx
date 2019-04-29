// Singleton to listen for changes that reset render flow.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateSceneStore } from 'flux/scene/action'

import { getScene } from 'album/api/scenes'

import {
    TIME_ANYTIME,
    SEASON_INDOOR
} from 'scene/sky/keys'

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
            dispatchCanSceneUpdate: this.dispatchCanSceneUpdate,
            dispatchCanSceneEnter: this.dispatchCanSceneEnter
        })
    }

    dispatchCanSceneUpdate = () => {
        logTransition('Scene can update.')

        this._dispatchCanScene({
            isUpdate: true,
            sceneIndex: -1
        })
    }

    dispatchCanSceneEnter = ({
        songIndex,
        sceneIndex

    } = {}) => {
        logTransition('Scene can enter.')

        this._dispatchCanScene({
            songIndex,
            sceneIndex
        })
    }

    _dispatchCanScene({
        isUpdate,
        songIndex = this.props.selectedSongIndex,
        sceneIndex = this.props.selectedSceneIndex
    }) {
        const {
            cubes: sceneCubesKey,
            layers: scenePresenceLayers,
            sky: {
                time: sceneTime = TIME_ANYTIME,
                season: sceneSeason = SEASON_INDOOR
            }

        } = getScene(
            songIndex,
            sceneIndex
        )

        this.props.updateSceneStore({
            ...isUpdate ? {
                canSceneUpdate: true
            } : {
                canSceneEnter: true
            },
            sceneCubesKey,
            sceneSongIndex: songIndex,
            sceneSceneIndex: sceneIndex,
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
