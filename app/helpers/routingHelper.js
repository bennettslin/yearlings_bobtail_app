// Helper for getting param values from routing.
import {
    getSongIsLogue,
    getSongObject,
    getVerseObject,
    getAnnotationObject
} from './dataHelper'

import { HYPHENATED_SONG_PATHS } from '../constants/paths'

const _getIndexForPrefix = (string, prefix) => {
    // For example, if prefix is 'a' and string is 'a5', rawStringIndex is '5.'

    const rawStringIndex = string.replace(prefix, ''),

        // Remove all non-numeric characters.
        finalStringIndex = rawStringIndex.replace(/\D/g, ''),

        // If string lengths are the same, then this is a valid index.
        isValidNumber = rawStringIndex.length === finalStringIndex.length

    // Only return a number if valid.
    return isValidNumber ? parseInt(finalStringIndex) : undefined
}

const _isValidSongIndex = (songIndex) => {
    return Boolean(getSongObject(songIndex))
}

const _isValidVerseIndexForSongIndex = (songIndex, verseIndex) => {
    return Boolean(getVerseObject(songIndex, verseIndex))
}

const _isValidAnnotationIndexForSongIndex = (songIndex, annotationIndex) => {
    return Boolean(getAnnotationObject(songIndex, annotationIndex))
}

export const getPathForIndices = (songIndex, verseIndex, annotationIndex) => {

    const isLogue = getSongIsLogue(songIndex)

    // Path is something like 9-grasshoppers-lie-heavy-v20-a22.
    return `${songIndex}_${HYPHENATED_SONG_PATHS[songIndex]}${verseIndex && !isLogue ? '-v' + verseIndex : ''}${annotationIndex && !isLogue ? '-a' + annotationIndex : ''}`
}

export const getValidRoutingIndicesObject = (routingParamString = '') => {

    // Split along hyphen.
    const rawIndicesObject = {},
        routingIndicesObject = {},

        routingIndices = routingParamString.split('-')

        routingIndices.forEach(param => {
            const rawSongIndex = _getIndexForPrefix(param, ''),
                rawVerseIndex = _getIndexForPrefix(param, 'v'),
                rawAnnotationIndex = _getIndexForPrefix(param, 'a')

            // If it's a song index, get it.
            if (!isNaN(rawSongIndex)) {
                rawIndicesObject.rawSongIndex = rawSongIndex

            // If it's a verse index, get it.
            } else if (!isNaN(rawVerseIndex)) {
                rawIndicesObject.rawVerseIndex = rawVerseIndex

            // If it's an annotation index, get it.
            } else if (!isNaN(rawAnnotationIndex)) {
                rawIndicesObject.rawAnnotationIndex = rawAnnotationIndex
            }
        })

    /**
     * We now have an array of up to three numbers. If they exist, the first is
     * the song index, second is the verse index, third is the annotation index.
     */

    const { rawSongIndex,
            rawVerseIndex,
            rawAnnotationIndex } = rawIndicesObject

    // Only set routing song index if valid.
    if (_isValidSongIndex(rawSongIndex)) {
        routingIndicesObject.routingSongIndex = rawSongIndex

        /**
         * If routing song index is set, always set routing verse index.
         * Default to 0.
         */
        let routingVerseIndex

        if (!isNaN(rawVerseIndex) &&
                _isValidVerseIndexForSongIndex(
                    rawSongIndex,
                    rawVerseIndex
        )) {
            routingVerseIndex = rawVerseIndex

        } else {
            routingVerseIndex = 0
        }

        routingIndicesObject.routingVerseIndex = routingVerseIndex

        /**
         * Routing annotation index is optional.
         */
        let routingAnnotationIndex

        if (!isNaN(rawAnnotationIndex) &&
                _isValidAnnotationIndexForSongIndex(
                    rawSongIndex,
                    rawAnnotationIndex
        )) {
            routingAnnotationIndex = rawAnnotationIndex

        } else {
            routingVerseIndex = 0
        }

        routingIndicesObject.routingAnnotationIndex = routingAnnotationIndex
    }

    return routingIndicesObject
}
