// For dev purposes. Log object info.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import album from 'album'

import { getGlobalAnnotation } from 'album/api/admin'
import {
    getSongSceneConfigs,
    getScene
} from 'album/api/scenes'
import { getSongObject } from 'album/api/songs'
import { getSongStanzaConfigs } from 'album/api/stanzas'
import {
    getSongVerseConfigs,
    getVerseObject
} from 'album/api/verses'

import { WINDOW_STORAGE } from 'constants/state'
import { getAnnotation } from 'album/api/annotations'

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

        global.sa = this.logSongAnnotations
        global.ssc = this.logSongStanzaConfigs
        global.svc = this.logSongVerseConfigs
        global.szc = this.logSongSceneConfigs
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

            renderedAnnotationObject = getAnnotation(
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
            'global annotation', getGlobalAnnotation(globalIndex)
        )
    }

    logScene = () => {
        const {
                renderedSongIndex,
                renderedSceneIndex
            } = this.props,
            renderableScene = getScene(
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

        delete copiedSong.annotations
        copiedSong.lyricUnits = `lyricUnits: ${copiedSong.lyricUnits.length}`
        delete copiedSong.songStanzaConfigs
        delete copiedSong.songVerseConfigs
        delete copiedSong.songSceneConfigs

        return this._logObject('renderable song', copiedSong)
    }

    logSongAnnotations = () => {
        const { renderedSongIndex } = this.props,
            song = getSongObject(renderedSongIndex)
        return this._logObject('Song annotations', song.annotations)
    }

    logSongStanzaConfigs = () => {
        const { renderedSongIndex } = this.props,
            songStanzaConfigs = getSongStanzaConfigs(renderedSongIndex)
        return this._logObject('Song stanza configs', songStanzaConfigs)
    }

    logSongVerseConfigs = () => {
        const { renderedSongIndex } = this.props,
            songVerseConfigs = getSongVerseConfigs(renderedSongIndex)
        return this._logObject('Song verse configs', songVerseConfigs)
    }

    logSongSceneConfigs = () => {
        const { renderedSongIndex } = this.props,
            songSceneConfigs = getSongSceneConfigs(renderedSongIndex)
        return this._logObject('Song scene configs', songSceneConfigs)
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
