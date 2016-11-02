// For dev purposes. Log object info.
import AlbumHelper from 'helpers/album-view-helper'
import { WINDOW_STORAGE, LYRIC_TEXT_KEYS } from './constants'

export default {

    logStorage() {
        // Global helper's storage object is the default.
        return this._logObject('window storage', WINDOW_STORAGE)
    },

    logSong({ props }) {
        const { songs,
                selectedSongIndex } = props,

            selectedSong = AlbumHelper.getSong(selectedSongIndex, songs),
            copiedSong = Object.assign({}, selectedSong)

        copiedSong.lyrics = `lyrics length: ${copiedSong.lyrics.length}`
        copiedSong.annotations = `annotations length: ${copiedSong.annotations.length}`
        copiedSong.tasks = `tasks length: ${copiedSong.tasks.length}`
        copiedSong.times = `times length: ${copiedSong.times.length}`

        return this._logObject('selected song', copiedSong)
},

    logVerse({ props }) {
        const { songs,
                selectedSongIndex,
                selectedVerseIndex } = props,

            selectedSong = AlbumHelper.getSong(selectedSongIndex, songs),
            verse = AlbumHelper.getVerse(selectedVerseIndex, selectedSong)

        return this._logObject('selected verse', verse)
    },

    logAnchorAnnotation({ props }) {
        const { songs,
                selectedSongIndex,
                selectedAnnotationIndex } = props,

            selectedSong = AlbumHelper.getSong(selectedSongIndex, songs),
            annotation = AlbumHelper.getAnnotation(selectedAnnotationIndex, selectedSong)

        return this._logObject('selected annotation', annotation)
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
