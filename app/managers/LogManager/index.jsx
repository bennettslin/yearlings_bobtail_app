// For dev purposes. Log object info.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import album from 'album'

import {
    getAnnotationObject,
    getGlobalAnnotationObject,
    getSongObject,
    getSceneObject,
    getDrawings
} from 'helpers/data'

import { WINDOW_STORAGE } from 'constants/state'

class LogManager extends PureComponent {

    static propTypes = {
        // Through Redux.
        renderedSongIndex: PropTypes.number.isRequired,
        renderedVerseIndex: PropTypes.number.isRequired,
        renderedAnnotationIndex: PropTypes.number.isRequired,
        renderedSceneIndex: PropTypes.number.isRequired
    }

    componentDidMount() {
        this._assignDebugLogFunctions()
    }

    _assignDebugLogFunctions() {
        global.a = this.logAlbum
        global.d = this.logDrawings
        global.g = this.logGlobalAnnotation
        global.n = this.logAnnotation
        global.i = this.logInstances
        global.z = this.logScene
        global.s = this.logSong
        global.t = this.logStorage
    }

    logAlbum = () => {
        const copiedAlbum = {
            ...album
        }

        copiedAlbum.drawings = `drawings: ${copiedAlbum.drawings.length}`
        copiedAlbum.mp3s = `mp3s: ${copiedAlbum.mp3s.length}`
        copiedAlbum.scenes = `scenes: ${copiedAlbum.scenes.length}`
        copiedAlbum.scores = `scores: ${copiedAlbum.scores.length}`
        copiedAlbum.songs = `songs: ${copiedAlbum.songs.length}`
        copiedAlbum.tasks = `tasks: ${copiedAlbum.tasks.length}`
        copiedAlbum.tips = `tips: ${copiedAlbum.tips.length}`
        copiedAlbum.globalAnnotationIndices = `globalAnnotationIndices: ${copiedAlbum.globalAnnotationIndices.length}`

        return this._logObject('album', copiedAlbum)
    }

    logAnnotation = () => {
        const {
                renderedSongIndex,
                renderedAnnotationIndex
            } = this.props,

            renderedAnnotationObject = getAnnotationObject(
                renderedSongIndex,
                renderedAnnotationIndex
            )

        return this._logObject('rendered annotation', renderedAnnotationObject)
    }

    logDrawings = () => {
        const copiedDrawings = {
            ...getDrawings()
        }

        copiedDrawings.actors = `actors: ${copiedDrawings.actors.length}`

        return this._logObject('admin drawings', copiedDrawings)
    }

    logGlobalAnnotation = (globalIndex) => {
        return this._logObject(
            'global annotation', getGlobalAnnotationObject(globalIndex)
        )
    }

    logInstances = () => {
        const { tempInstanceCount } = album
        return this._logObject('temp instance count', tempInstanceCount)
    }

    logScene = () => {
        const {
                renderedSongIndex,
                renderedSceneIndex
            } = this.props,
            renderableScene = getSceneObject(
                renderedSongIndex,
                renderedSceneIndex
            )

        return this._logObject('renderable scene', renderableScene)
    }

    logSong = () => {
        const
            { renderedSongIndex } = this.props,
            copiedSong = {
                ...getSongObject(renderedSongIndex)
            }

        copiedSong.annotations = `annotations: ${copiedSong.annotations.length}`
        copiedSong.lyricUnits = `lyricUnits: ${copiedSong.lyricUnits.length}`
        copiedSong.songStanzaConfigs = `songStanzaConfigs: ${copiedSong.songStanzaConfigs.length}`
        copiedSong.songVerseConfigs = `songVerseConfigs: ${copiedSong.songVerseConfigs.length}`
        copiedSong.songSceneConfigs = `songSceneConfigs: ${copiedSong.songSceneConfigs.length}`
        copiedSong.tasks = `tasks: ${copiedSong.tasks.length}`

        return this._logObject('renderable song', copiedSong)
    }

    logStorage = () => {
        // Global helper's storage object is the default.
        return this._logObject('window storage', WINDOW_STORAGE)
    }

    _logObject(description, object) {
        const formattedString = JSON.stringify(object, null, 3)
        return `${description}: ${formattedString}`
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    renderedStore: {
        renderedSongIndex,
        renderedVerseIndex,
        renderedAnnotationIndex,
        renderedSceneIndex
    }
}) => ({
    renderedSongIndex,
    renderedVerseIndex,
    renderedAnnotationIndex,
    renderedSceneIndex
})

export default connect(mapStateToProps)(LogManager)
