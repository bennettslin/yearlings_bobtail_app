// For dev purposes. Log object info.

import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getPropsAreShallowEqual } from 'helpers/generalHelper'

import {
    getSongObject,
    getSceneObject,
    getDrawings
} from 'helpers/dataHelper'

import { WINDOW_STORAGE } from 'constants/state'

class LogManager extends Component {

    static propTypes = {
        // Through Redux.
        renderedSongIndex: PropTypes.number.isRequired,
        renderedVerseIndex: PropTypes.number.isRequired,
        renderedAnnotationIndex: PropTypes.number.isRequired,
        renderedSceneIndex: PropTypes.number.isRequired,

        // From parent.
        setRef: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.setRef(this)

        this._assignDebugLogFunctions()
    }

    shouldComponentUpdate(nextProps) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    _assignDebugLogFunctions() {
        global.d = this.logDrawings
        global.z = this.logScene
        global.s = this.logSong
        global.t = this.logStorage
    }

    logDrawings = () => {
        const copiedDrawings = {
            ...getDrawings()
        }

        copiedDrawings.actors = `actors: ${copiedDrawings.actors.length}`

        return this._logObject('admin drawings', copiedDrawings)
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
        // copiedSong.songVerseConfigs = `songVerseConfigs: ${copiedSong.songVerseConfigs.length}`
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
