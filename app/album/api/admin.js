import album from 'album'

import { getBookForSongIndex, getSongIsLogue } from './songs'

export const getGlobalAnnotation = (globalIndex) => {
    const { globalAnnotationIndices } = album
    return globalAnnotationIndices[globalIndex]
}

export const getIsV2 = (songIndex) => {
    return (
        getBookForSongIndex(songIndex) === 1 &&
        !getSongIsLogue(songIndex)
    )
}
