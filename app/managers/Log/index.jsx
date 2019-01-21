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
import { getSong } from 'album/api/songs'
import { getSongStanzaConfigs } from 'album/api/stanzas'
import {
    getSongVerseConfigs,
    getVerse
} from 'album/api/verses'

import { getWindowStorage } from '../../utils/window'
import { getAnnotation } from 'album/api/annotations'

class LogManager extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        selectedSceneIndex: PropTypes.number.isRequired
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
        const copiedAlbum = { ...album }

        copiedAlbum.songs = `songs: ${copiedAlbum.songs.length}`
        copiedAlbum.globalAnnotationIndices = `globalAnnotationIndices: ${copiedAlbum.globalAnnotationIndices.length}`

        return this._logObject('album', copiedAlbum)
    }

    logAnnotation = () => {
        const {
                selectedSongIndex,
                selectedAnnotationIndex
            } = this.props,

            selectedAnnotationObject = getAnnotation(
                selectedSongIndex,
                selectedAnnotationIndex
            )

        return this._logObject('selected annotation', selectedAnnotationObject)
    }

    logVerse = () => {
        const {
                selectedSongIndex,
                selectedVerseIndex
            } = this.props,

            selectedVerse = getVerse(
                selectedSongIndex,
                selectedVerseIndex
            )

        return this._logObject('selected verse', selectedVerse)
    }

    logGlobalAnnotation = (globalIndex) => {
        return this._logObject(
            'global annotation', getGlobalAnnotation(globalIndex)
        )
    }

    logScene = () => {
        const {
                selectedSongIndex,
                selectedSceneIndex
            } = this.props,

            renderableScene = getScene(
                selectedSongIndex,
                selectedSceneIndex
            )

        return this._logObject('renderable scene', renderableScene)
    }

    logSong = () => {
        const
            { selectedSongIndex } = this.props,
            copiedSong = {
                ...getSong(selectedSongIndex)
            }

        delete copiedSong.annotations
        copiedSong.lyricUnits = `lyricUnits: ${copiedSong.lyricUnits.length}`
        delete copiedSong.songStanzaConfigs
        delete copiedSong.songVerseConfigs
        delete copiedSong.songSceneConfigs

        return this._logObject('renderable song', copiedSong)
    }

    logSongAnnotations = () => {
        const { selectedSongIndex } = this.props,
            song = getSong(selectedSongIndex)
        return this._logObject('Song annotations', song.annotations)
    }

    logSongStanzaConfigs = () => {
        const { selectedSongIndex } = this.props,
            songStanzaConfigs = getSongStanzaConfigs(selectedSongIndex)
        return this._logObject('Song stanza configs', songStanzaConfigs)
    }

    logSongVerseConfigs = () => {
        const { selectedSongIndex } = this.props,
            songVerseConfigs = getSongVerseConfigs(selectedSongIndex)
        return this._logObject('Song verse configs', songVerseConfigs)
    }

    logSongSceneConfigs = () => {
        const { selectedSongIndex } = this.props,
            songSceneConfigs = getSongSceneConfigs(selectedSongIndex)
        return this._logObject('Song scene configs', songSceneConfigs)
    }

    logStorage = () => {
        // Global helper's storage object is the default.
        return this._logObject('window storage', getWindowStorage())
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
    selectedStore: {
        selectedSongIndex,
        selectedVerseIndex,
        selectedAnnotationIndex,
        selectedSceneIndex
    }
}) => ({
    selectedSongIndex,
    selectedVerseIndex,
    selectedAnnotationIndex,
    selectedSceneIndex
})

export default connect(mapStateToProps)(LogManager)
