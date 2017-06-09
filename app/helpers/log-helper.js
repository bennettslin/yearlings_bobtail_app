// For dev purposes. Log object info.
import { getSongObject, getAnnotationObject, getVerseObject } from './data-helper'
import { LYRIC_TEXT_KEYS } from '../constants/lyrics'
import { WINDOW_STORAGE } from '../constants/state'

export default {

    logStorage() {
        // Global helper's storage object is the default.
        return this._logObject('window storage', WINDOW_STORAGE)
    },

    logPortalLinks({ portalLinks }) {
        return portalLinks
    },

    logSong({ props }) {
        const selectedSong = getSongObject(props.selectedSongIndex),
            copiedSong = Object.assign({}, selectedSong)

        if (!copiedSong.logue) {
            copiedSong.lyrics = `lyrics: ${copiedSong.lyrics.length}`
            copiedSong.annotations = `annotations: ${copiedSong.annotations.length}`
            // copiedSong.times = `times: ${copiedSong.times.length}`
        }

        // copiedSong.stanzaTimes = `stanzaTimes: ${copiedSong.stanzaTimes.length}`
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

    logAccessedAnnotation({ state }) {
        const { accessedAnnotationIndex,
                accessedAnnotationAnchorIndex } = state
        this._logObject('accessed annotation index', accessedAnnotationIndex)
        return this._logObject('accessed popup anchor index', accessedAnnotationAnchorIndex)
    },

    _logObject(description, object) {
        const formattedString = JSON.stringify(object, null, 3)

        console.info(`${description}: ${formattedString}`)
        return true
    },

    _getLyricObjectForAnnotationIndex(annotationIndex, object, returnObject) {
        // For logging purposes.

        if (Array.isArray(object)) {
            return object.reduce((previousObject, element) => {
                return this._getLyricObjectForAnnotationIndex(annotationIndex, element, returnObject) || previousObject
            }, null)

        } else if (typeof object === 'object') {

            // If it has an annotation index, return the parent lyric object.
            if (object.annotationIndex) {
                return object.annotationIndex === annotationIndex ? returnObject : null
            }

            // Otherwise, keep recursing until we find the object with an annotation index.
            return LYRIC_TEXT_KEYS.reduce((previousObject, textKey) => {
                const currentLyricObject = (textKey.toLowerCase().indexOf('lyric') > -1) ? object[textKey] : returnObject

                return this._getLyricObjectForAnnotationIndex(annotationIndex, object[textKey], currentLyricObject) || previousObject
            }, null)

        } else {
            return null
        }
    }
}
