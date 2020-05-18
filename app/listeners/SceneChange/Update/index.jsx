// Singleton to listen for changes that reset render flow.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateSceneStore } from '../../../redux/scene/action'

import {
    getCubesKeyForScene,
    getLayersForScene,
    getSkyTimeForScene,
    getSkySeasonForScene
} from '../../../album/api/scenes'

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

        this._dispatchCanSceneEnterOrUpdate({
            isUpdate: true,
            sceneIndex: -1
        })
    }

    dispatchCanSceneEnter = ({
        songIndex,
        sceneIndex

    } = {}) => {
        logTransition('Scene can enter.')

        this._dispatchCanSceneEnterOrUpdate({
            songIndex,
            sceneIndex
        })
    }

    _dispatchCanSceneEnterOrUpdate({
        isUpdate,
        songIndex = this.props.selectedSongIndex,
        sceneIndex = this.props.selectedSceneIndex
    }) {
        const
            sceneCubesKey = getCubesKeyForScene(songIndex, sceneIndex),
            sceneLayers = getLayersForScene(songIndex, sceneIndex),
            sceneSkyTime = getSkyTimeForScene(songIndex, sceneIndex),
            sceneSkySeason = getSkySeasonForScene(songIndex, sceneIndex)

        this.props.updateSceneStore({
            ...isUpdate ? {
                canSceneUpdate: true
            } : {
                canSceneEnter: true
            },
            sceneCubesKey,
            sceneSongIndex: songIndex,
            sceneSceneIndex: sceneIndex,
            sceneLayers,
            sceneSkyTime,
            sceneSkySeason
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
