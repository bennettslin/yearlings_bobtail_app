// Helper for getting param values from routing.
import { getIsSongValid } from '../../album/api/songs'
import { getIsVerseValid } from '../../album/api/verses'
import { getIsAnnotationValid } from '../../album/api/annotations'

import { HYPHENATED_SONG_PATHS } from '../../constants/paths'

const _getIndexForPrefix = (string, prefix = '') => {
    // For example, if prefix is 'a' and string is 'a5', scrubbedString is '5.'

    const underscoreIndex = string.indexOf('_'),

        // Remove anything after underscore in song index.
        rawString = underscoreIndex > -1 ?
            string.substring(0, underscoreIndex) : string,

        // Remove given prefix.
        scrubbedString = rawString.replace(prefix, ''),

        // Remove all non-numeric characters.
        finalStringIndex = scrubbedString.replace(/\D/g, ''),

        // If string lengths are the same, then this is a valid index.
        isValidNumber = scrubbedString.length === finalStringIndex.length

    // Only return a number if valid.
    return isValidNumber ? parseInt(finalStringIndex) : undefined
}

const _getRoutingIndices = (routingParamString = '') => {
    const rawIndicesObject = {
            rawSongIndex: undefined,
            rawVerseIndex: undefined,
            rawAnnotationIndex: undefined
        },

        // Split along hyphen, and only allow three values.
        routingIndices = routingParamString.split('-')

    // Get song from first param.
    if (routingIndices.length) {
        const rawSongIndex = _getIndexForPrefix(routingIndices[0])

        if (Number.isFinite(rawSongIndex)) {
            rawIndicesObject.rawSongIndex = rawSongIndex
        }
    }

    if (routingIndices.length >= 2) {

        let rawVerseIndex,
            rawAnnotationIndex

        // Verse can only be second param.
        if (routingIndices[1].includes('v')) {
            rawVerseIndex = _getIndexForPrefix(routingIndices[1], 'v')

            // If verse is present, annotation can only be third param.
            if (routingIndices.length >= 3) {
                rawAnnotationIndex = _getIndexForPrefix(routingIndices[2], 'a')
            }

        // If verse is absent, annotation can only be second param.
        } else if (routingIndices[1].includes('a')) {
            rawAnnotationIndex = _getIndexForPrefix(routingIndices[1], 'a')
        }

        if (Number.isFinite(rawVerseIndex)) {
            rawIndicesObject.rawVerseIndex = rawVerseIndex
        }
        if (Number.isFinite(rawAnnotationIndex)) {
            rawIndicesObject.rawAnnotationIndex = rawAnnotationIndex
        }
    }

    return rawIndicesObject
}

export const getValidRoutingIndices = ({
    selectedSongIndex,
    selectedVerseIndex,
    selectedAnnotationIndex,
    routingParamString = ''
}) => {
    /**
     * We now have an array of up to three numbers. If they exist, the first is
     * the song index, second is the verse index, third is the annotation index.
     */
    const {
            rawSongIndex,
            rawVerseIndex,
            rawAnnotationIndex
        } = _getRoutingIndices(routingParamString),

        // Default to the selected indices.
        routingIndicesObject = {
            routingSongIndex: selectedSongIndex,
            routingVerseIndex: selectedVerseIndex,
            routingAnnotationIndex: selectedAnnotationIndex
        }

    // Only set routing song index if valid.
    if (getIsSongValid(rawSongIndex)) {

        routingIndicesObject.routingSongIndex = rawSongIndex

        /**
         * If routing song index is valid, then either get verse or annotation
         * indices from routing param as well, or else reset them. But do not
         * keep the selected indices.
         */
        routingIndicesObject.routingVerseIndex = 0
        routingIndicesObject.routingAnnotationIndex = 0

        /**
         * If routing song index is set, always set routing verse index.
         * Default to 0.
         */
        if (getIsVerseValid(rawSongIndex, rawVerseIndex)) {
            routingIndicesObject.routingVerseIndex = rawVerseIndex
        }

        /**
         * Routing annotation index is optional.
         */
        if (getIsAnnotationValid(rawSongIndex, rawAnnotationIndex)) {
            routingIndicesObject.routingAnnotationIndex = rawAnnotationIndex
        }

    }

    return routingIndicesObject
}

export const getPathForIndices = (songIndex, verseIndex, annotationIndex) => {
    const
        // Path is something like "9_GrasshoppersLieHeavy-v20-a22.""
        newPath =
            `${songIndex}_${HYPHENATED_SONG_PATHS[songIndex]}${verseIndex ? '-v' + verseIndex : ''}${annotationIndex ? '-a' + annotationIndex : ''}`

    return newPath
}
