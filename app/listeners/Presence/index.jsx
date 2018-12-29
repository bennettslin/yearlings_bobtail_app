// Singleton to listen for scene change and update presences accordingly.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateSceneStore } from 'flux/scene/action'

import { getScene } from 'album/api/scenes'

import {
    TIME_ANYTIME,
    SEASON_INDOOR
} from 'scene/sky'

class PresenceListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        renderedSongIndex: PropTypes.number.isRequired,
        renderedSceneIndex: PropTypes.number.isRequired,
        updateSceneStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._checkSceneChange(prevProps)
    }

    _checkSceneChange(prevProps) {
        const
            {
                renderedSongIndex,
                renderedSceneIndex
            } = this.props,
            {
                renderedSongIndex: prevSongIndex,
                renderedSceneIndex: prevSceneIndex
            } = prevProps

        if (
            renderedSongIndex !== prevSongIndex ||
            renderedSceneIndex !== prevSceneIndex
        ) {

            const sceneObject = getScene(
                renderedSongIndex,
                renderedSceneIndex
            )

            this._updateScene(sceneObject)
        }
    }

    _updateScene(sceneObject) {
        const {
            cubes: sceneCubesKey,
            layers: scenePresenceLayers,
            sky: {
                time: sceneTime = TIME_ANYTIME,
                season: sceneSeason = SEASON_INDOOR
            }
        } = sceneObject

        this.props.updateSceneStore({
            sceneCubesKey,
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
    renderedStore: {
        renderedSongIndex,
        renderedSceneIndex
    }
}) => ({
    renderedSongIndex,
    renderedSceneIndex
})

export default connect(
    mapStateToProps,
    { updateSceneStore }
)(PresenceListener)
