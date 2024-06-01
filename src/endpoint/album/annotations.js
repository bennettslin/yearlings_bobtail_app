import {
    getSong,
    getSongIsLogue,
} from './songs'
import { getDotKeysFromBit } from '../../helpers/dot'
import { getArrayOfLength } from '../../helpers/general'

export const getAnnotationIndices = (songIndex = 0) => (
    getSongIsLogue(songIndex) ?
        [] :
        getArrayOfLength(
            // Which annotation array we use is arbitrary.
            getSong(songIndex).annotationDotsBits.length,

            // Annotations start with base 1.
            1,
        )
)

export const getAnnotationCountForSong = songIndex => (
    getAnnotationIndices(songIndex).length
)

export const getIsAnnotationValid = (songIndex, annotationIndex) => {
    const annotationIndicesArray = getAnnotationIndices(songIndex)
    return annotationIndicesArray.some(index => index === annotationIndex)
}

export const getValidAnnotationIndex = (songIndex, annotationIndex) => (
    getIsAnnotationValid(songIndex, annotationIndex) ? annotationIndex : 0
)

export const getDotsBitForAnnotation = (songIndex, annotationIndex) => {
    const { annotationDotsBits } = getSong(songIndex)
    return annotationDotsBits[annotationIndex - 1]
}

export const getDotKeysForAnnotation = (songIndex, annotationIndex) => {
    return getDotKeysFromBit(getDotsBitForAnnotation(
        songIndex,
        annotationIndex,
    ))
}

export const getTitleForAnnotation = (songIndex, annotationIndex) => {
    const { annotationTitles } = getSong(songIndex)
    return annotationTitles[annotationIndex - 1]
}

export const getTodoForAnnotation = (songIndex, annotationIndex) => {
    const { annotationTodos = [] } = getSong(songIndex)
    return annotationTodos[annotationIndex - 1]
}

export const getAnnotationTodoCountForSong = songIndex => {
    const { annotationTodos = [] } = getSong(songIndex)
    return annotationTodos.filter(todo => todo).length
}

export const getVerseIndexForAnnotation = (songIndex, annotationIndex) => {
    const { annotationVerseIndices } = getSong(songIndex),
        annotationVerseIndex = annotationVerseIndices[annotationIndex - 1]

    // If no verse index for annotation, value is -1.
    return annotationVerseIndex >= 0 ? annotationVerseIndex : null
}

export const getColumnIndexForAnnotation = (songIndex, annotationIndex) => {
    const { annotationColumnIndices } = getSong(songIndex)

    if (!annotationColumnIndices) {
        return null
    }

    const columnIndex = annotationColumnIndices[annotationIndex - 1]
    return columnIndex >= 0 ? columnIndex : null
}

export const getWikiWormholesForAnnotation = (songIndex, annotationIndex) => {
    const { annotationWikiWormholes } = getSong(songIndex)
    return annotationWikiWormholes ?
        annotationWikiWormholes[annotationIndex - 1] :
        0
}

export const getWikiWormholeEntity = (
    songIndex,
    annotationIndex,
    wikiWormholeIndex,

) => {
    const annotationWikiWormholes = getWikiWormholesForAnnotation(
        songIndex,
        annotationIndex,
    )

    return annotationWikiWormholes ?
        annotationWikiWormholes[wikiWormholeIndex - 1] :
        null
}
