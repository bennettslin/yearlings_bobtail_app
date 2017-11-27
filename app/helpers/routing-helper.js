// Helper for getting param values from routing.
import {
    getSongObject,
    getVerseObject
} from './data-helper'

const _isValidSongIndex = (songIndex) => {
    return Boolean(getSongObject(songIndex))
}

const _isValidVerseIndexForSongIndex = (songIndex, verseIndex) => {
    return Boolean(getVerseObject(songIndex, verseIndex))
}

export const getValidRoutingIndicesObject = (routingParamString = '') => {

    // Split along hyphen.
    const routingIndicesObject = {},
        routingIndices = routingParamString.split('-')
        .map(param => {

            // Only keep numeric characters.
            return parseInt(param.replace(/\D/g, ''))
        })
        .filter(param => {

            /**
             * Remove non-numbers, and large numbers (to accommodate My
             * 100,000th Dream).
             */
            return !isNaN(param) && param < 1000
        })

    if (routingIndices.length) {
        const routingSongIndex = routingIndices[0]

        // Only set routing song index if valid.
        if (_isValidSongIndex(routingSongIndex)) {
            routingIndicesObject.routingSongIndex = routingSongIndex

            /**
             * If routing song index is set, always set routing verse index.
             * Default to 0.
             */
            let routingVerseIndex

            if (routingIndices.length > 1 &&
                    _isValidVerseIndexForSongIndex(
                        routingSongIndex,
                        routingIndices[1]
            )) {
                routingVerseIndex = routingIndices[1]

            } else {
                routingVerseIndex = 0
            }

            routingIndicesObject.routingVerseIndex = routingVerseIndex
        }
    }

    return routingIndicesObject
}
