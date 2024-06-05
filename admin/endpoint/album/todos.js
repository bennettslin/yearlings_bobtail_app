import { getAlbum } from '../../../src/endpoint/builds'
import { getAnnotationIndices } from '../../../src/endpoint/album/annotations'
import {
    getSong,
    getSongsAndLoguesCount,
} from '../../../src/endpoint/album/songs'
import { getArrayOfLength } from '../../../src/helpers/general'
import { REVIEW, REVISE } from '../../containers/Annotations/constants/todos'

export const getAnnotationsCount = () => {
    const { globalAnnotationIndicesList } = getAlbum()
    return globalAnnotationIndicesList.length
}

export const getAnnotationTodosCount = () => {
    const { globalAnnotationTodosCount } = getAlbum()
    return globalAnnotationTodosCount
}

export const getAnnotationReviewsCount = () => {
    const { globalAnnotationReviewsCount } = getAlbum()
    return globalAnnotationReviewsCount
}

export const getAnnotationRevisionsCount = () => {
    const { globalAnnotationRevisionsCount } = getAlbum()
    return globalAnnotationRevisionsCount
}

export const getSongHasOverviewTodo = songIndex => (
    Boolean(getSong(songIndex).todo)
)

export const getSongHasOverviewReview = songIndex => (
    Boolean(getSong(songIndex).todo === REVIEW)
)

export const getSongHasOverviewRevision = songIndex => (
    Boolean(getSong(songIndex).todo === REVISE)
)

export const getOverviewTodosCount = () => (
    getArrayOfLength(getSongsAndLoguesCount()).reduce((count, songIndex) => (
        count + getSongHasOverviewTodo(songIndex)
    ), 0)
)

export const getOverviewReviewsCount = () => (
    getArrayOfLength(getSongsAndLoguesCount()).reduce((count, songIndex) => (
        count + getSongHasOverviewReview(songIndex)
    ), 0)
)

export const getOverviewRevisionsCount = () => (
    getArrayOfLength(getSongsAndLoguesCount()).reduce((count, songIndex) => (
        count + getSongHasOverviewRevision(songIndex)
    ), 0)
)

export const getTodoForAnnotation = (songIndex, annotationIndex) => {
    const { annotationTodos = [] } = getSong(songIndex)
    return annotationTodos[annotationIndex - 1]
}

export const getAnnotationTodosCountForSong = songIndex => {
    const { annotationTodos = [] } = getSong(songIndex)
    return annotationTodos.filter(todo => todo).length
}

export const getShownAnnotationIndices = ({ songIndex, showAll }) => (
    getAnnotationIndices(songIndex).filter(annotationIndex => (
        // Only show annotations left todo.
        showAll ||
        getTodoForAnnotation(songIndex, annotationIndex)
    ))
)

export const getSongsWithTodosCount = showAll => (
    getArrayOfLength(getSongsAndLoguesCount()).reduce((count, songIndex) => (
        count + (
            showAll ||
            getSongHasOverviewTodo(songIndex) ||
            Boolean(getShownAnnotationIndices({ songIndex }).length)
        )
    ), 0)
)
