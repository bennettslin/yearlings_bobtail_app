import { getSong } from 'album/api/songs'

import { COLUMN_INDEX } from 'constants/lyrics'

export const getAnnotationsCount = (songIndex) => {
    const { annotations } = getSong(songIndex)
    return annotations ?
        annotations.length :
        0
}

export const getAnnotation = (
    songIndex,
    annotationIndex
) => {
    const { annotations } = getSong(songIndex)
    return annotations ? annotations[annotationIndex - 1] : null
}

export const getVerseIndexForAnnotationIndex = (
    songIndex,
    annotationIndex
) => {
    const annotation = getAnnotation(
        songIndex,
        annotationIndex
    )

    return annotation ? annotation.verseIndex : -1
}

export const getAnnotationColumnIndex = (
    songIndex,
    annotationIndex
) => {
    const annotation = getAnnotation(
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
    const annotationObject = getAnnotation(
        songIndex,
        annotationIndex
    )

    return annotationObject ? annotationObject.cards[cardIndex] : null
}
