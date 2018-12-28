// For dev purposes. Log object info.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import album from 'album'

import { getGlobalAnnotationObject } from 'album/api/admin'
import { getSceneObject } from 'album/api/scenes'
import { getSongObject } from 'album/api/songs'
import {
    getSongVerseConfigs,
    getVerseObject
} from 'album/api/verses'

import { WINDOW_STORAGE } from 'constants/state'
import { getAnnotationObject } from 'album/api/annotations'

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
        global.g = this.logGlobalAnnotation
        global.n = this.logAnnotation
        global.z = this.logScene
        global.s = this.logSong
        global.t = this.logStorage
        global.v = this.logVerse

        global.svc = this.logSongVerseConfigs
    }

    logAlbum = () => {
        const copiedAlbum = {
            ...album
        }

        copiedAlbum.songs = `songs: ${copiedAlbum.songs.length}`
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

    logVerse = () => {
        const {
                renderedSongIndex,
                renderedVerseIndex
            } = this.props,

            renderedVerse = getVerseObject(
                renderedSongIndex,
                renderedVerseIndex
            )

        return this._logObject('rendered verse', renderedVerse)
    }

    logGlobalAnnotation = (globalIndex) => {
        return this._logObject(
            'global annotation', getGlobalAnnotationObject(globalIndex)
        )
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
        delete copiedSong.songVerseConfigs
        copiedSong.songSceneConfigs = `songSceneConfigs: ${copiedSong.songSceneConfigs.length}`

        return this._logObject('renderable song', copiedSong)
    }

    logSongVerseConfigs = () => {
        const
            { renderedSongIndex } = this.props,
            songVerseConfigs = getSongVerseConfigs(renderedSongIndex)

        return this._logObject('Song verse configs', songVerseConfigs)
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
