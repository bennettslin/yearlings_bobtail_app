import qs from 'qs'
import { URL_SONG_NAMES } from '../../constants/paths'

export const getPathForIndices = (songIndex, verseIndex, annotationIndex) => {
    // Path is something like "9_GrasshoppersLieHeavy?v=20&a=22.""
    const
        newPathName = `${songIndex}_${URL_SONG_NAMES[songIndex]}`,
        newQueryStrings = qs.stringify({
            // Default verse is 0.
            ...verseIndex > 0 && { v: verseIndex },

            // Only show if annotation is selected.
            ...annotationIndex > 0 && { a: annotationIndex }
        }, { addQueryPrefix: true })

    return `${newPathName}${newQueryStrings}`
}