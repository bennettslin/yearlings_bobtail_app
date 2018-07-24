// For dev purposes. Log object info.
import { getSongObject, getAnnotationObject, getVerseObject } from './dataHelper'
import { LYRIC_TEXT_KEYS } from '../constants/lyrics'
import { WINDOW_STORAGE } from '../constants/state'

export default {

    logStorage() {
        // Global helper's storage object is the default.
        return this._logObject('window storage', WINDOW_STORAGE)
    },

    logWormholeLinks({ wormholeLinks }) {
        return wormholeLinks
    },

    logSong({ props }) {
        const selectedSong = getSongObject(props.selectedSongIndex),
            copiedSong = Object.assign({}, selectedSong)

        // copiedSong.lyricUnits = `lyricUnits: ${copiedSong.lyricUnits.length}`
        copiedSong.annotations = `annotations: ${copiedSong.annotations.length}`
        copiedSong.scenes = `scenes: ${copiedSong.scenes.length}`
        copiedSong.songStanzaConfigs = `songStanzaConfigs: ${copiedSong.songStanzaConfigs.length}`
        copiedSong.songVerseConfigs = `songVerseConfigs: ${copiedSong.songVerseConfigs.length}`
        copiedSong.songSceneConfigs = `songSceneConfigs: ${copiedSong.songSceneConfigs.length}`
        copiedSong.tasks = `tasks: ${copiedSong.tasks.length}`

        return this._logObject('selected song', copiedSong)
    },

    logDrawings({ props }) {
        return this._logObject('drawings', props.drawings)
    },

    logVerse({ props }) {
        const verse = getVerseObject(props.selectedSongIndex, props.selectedVerseIndex)
        return this._logObject('selected verse', verse)
    },

    logAnchorAnnotation({ props }) {
        const annotation = getAnnotationObject(props.selectedSongIndex, props.selectedAnnotationIndex)
        return this._logObject('selected annotation', annotation)
    },

    logAccessedAnnotation({ props }) {
        const { accessedAnnotationIndex,
                accessedAnnotationAnchorIndex } = props
        this._logObject('accessed annotation index', accessedAnnotationIndex)
        return this._logObject('accessed popup anchor index', accessedAnnotationAnchorIndex)
    },

    _logObject(description, object) {
        const formattedString = JSON.stringify(object, null, 3)

        logger.info(`${description}: ${formattedString}`)
        return true
    },

    _getLyricObjectForAnnotationIndex(annotationIndex, entity, returnObject) {
        // For logging purposes.

        if (Array.isArray(entity)) {
            return entity.reduce((previousEntity, childEntity) => {
                return this._getLyricObjectForAnnotationIndex(annotationIndex, childEntity, returnObject) || previousEntity
            }, null)

        } else if (typeof entity === 'object') {

            // If it has an annotation index, return the parent lyric object.
            if (entity.annotationIndex) {
                return entity.annotationIndex === annotationIndex ? returnObject : null
            }

            // Otherwise, keep recursing until we find the object with an annotation index.
            return LYRIC_TEXT_KEYS.reduce((previousEntity, textKey) => {
                const currentLyricObject = (textKey.toLowerCase().indexOf('lyric') > -1) ? entity[textKey] : returnObject

                return this._getLyricObjectForAnnotationIndex(annotationIndex, entity[textKey], currentLyricObject) || previousEntity
            }, null)

        } else {
            return null
        }
    }
}
