import album from 'album'

// import { getBookForSongIndex, getSongIsLogue } from './songs'

export const getGlobalAnnotation = (globalIndex) => {
    const { globalAnnotationIndices } = album
    return globalAnnotationIndices[globalIndex]
}

// export const getIsV2 = (songIndex) => {
//     return (
//         getBookForSongIndex(songIndex) === 1 &&
//         !getSongIsLogue(songIndex)
//     )
// }

export const getIsV2 = () => {
    // return songIndex > 9
    return false
}

export const getV2Array = () => {
    return (
        []
        // [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
    )
}
