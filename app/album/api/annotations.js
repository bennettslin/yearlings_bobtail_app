import { getFinalSong } from './songs'

import { COLUMN_INDEX } from '../../constants/lyrics'

export const getAnnotationsCount = (songIndex) => {
    const { annotations } = getFinalSong(songIndex)
    return annotations ?
        annotations.length :
        0
}

export const getAnnotation = (
    songIndex,
    annotationIndex
) => {
    const { annotations } = getFinalSong(songIndex)
    return annotations ? annotations[annotationIndex - 1] : null
}

export const getDotKeysForAnnotation = (songIndex, annotationIndex) => {
    const { annotationDotKeysList } = getFinalSong(songIndex)
    return annotationDotKeysList[annotationIndex - 1]
}

export const getTitleForAnnotation = (songIndex, annotationIndex) => {
    const { annotationTitles } = getFinalSong(songIndex)
    return annotationTitles[annotationIndex - 1]
}

export const getTodosForAnnotation = (songIndex, annotationIndex) => {
    const { annotationTodos } = getFinalSong(songIndex)
    return annotationTodos[annotationIndex - 1]
}

export const getWikiWormholesForAnnotation = (songIndex, annotationIndex) => {
    const { annotationWikiWormholes } = getFinalSong(songIndex)
    return annotationWikiWormholes[annotationIndex - 1]
}

export const getVerseIndexForAnnotation = (songIndex, annotationIndex) => {
    const { annotationVerseIndices } = getFinalSong(songIndex),
        annotationVerseIndex = annotationVerseIndices[annotationIndex - 1]

    // If no verse index for annotation, value is -1.
    return annotationVerseIndex >= 0 ? annotationVerseIndex : null
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
