import { getSongObject } from 'album/api/songs'

import { COLUMN_INDEX } from 'constants/lyrics'

export const getAnnotationsCount = (songIndex) => {
    const song = getSongObject(songIndex),
        { annotations } = song

    return annotations ? annotations.length : 0
}

export const getAnnotationObject = (
    songIndex,
    annotationIndex
) => {
    const { annotations } = getSongObject(songIndex)
    return annotations ? annotations[annotationIndex - 1] : null
}

export const getVerseIndexForAnnotationIndex = (
    songIndex,
    annotationIndex
) => {
    const annotationObject = getAnnotationObject(
        songIndex,
        annotationIndex
    )

    return annotationObject ? annotationObject.verseIndex : -1
}

export const getAnnotationColumnIndex = (
    songIndex,
    annotationIndex
) => {
    const annotation = getAnnotationObject(
        songIndex,
        annotationIndex
    )

    // Default to left if it's not explicitly right.
    return annotation ?
        annotation[COLUMN_INDEX] :
        0
}

export const getAnnotationCardObject = ({
    songIndex,
    annotationIndex,
    cardIndex
}) => {
    // Called by annotation card component.
    const annotationObject = getAnnotationObject(
        songIndex,
        annotationIndex
    )

    return annotationObject ? annotationObject.cards[cardIndex] : null
}
