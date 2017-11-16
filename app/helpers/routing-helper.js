// Helpers for routing.

import AlbumData from '../album-data'

// Somewhat duplicate code in storage helper.
export const getIsValidSongIndex = (tentativeSongIndex) => {
    return !isNaN(tentativeSongIndex) && tentativeSongIndex < AlbumData.songs.length
}

export const getRoutingIndicesObject = (routingParamString) => {

    // Split along hyphen.
    const routingIndicesObject = {},
        routingIndices = routingParamString.split('-')
        .map(param => {

            // Only keep numeric characters.
            return parseInt(param.replace(/\D/g, ''))
        })
        .filter(param => {

            // Remove non-numbers.
            return !isNaN(param)
        })

    if (routingIndices.length) {
        routingIndicesObject.routingSongIndex = routingIndices[0]
    }

    if (routingIndices.length > 1) {
        routingIndicesObject.routingVerseIndex = routingIndices[1]
    }

    return routingIndicesObject
}
