import { getAlbum } from '../../../src/endpoint/builds'
import { getAnnotationIndices } from '../../../src/endpoint/album/annotations'
import {
    getSong,
    getSongsAndLoguesCount,
} from '../../../src/endpoint/album/songs'
import { getArrayOfLength } from '../../../src/helpers/general'
import { REVIEW, REVISE } from '../../containers/Annotations/constants/todos'

export const getAnnotationTodo = (songIndex, annotationIndex) => {
    const { annotationTodos = [] } = getSong(songIndex)
    return annotationTodos[annotationIndex - 1]
}

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

export const getAnnotationTodosCountForSong = songIndex => {
    const { annotationTodos = [] } = getSong(songIndex)
    return annotationTodos.filter(todo => todo).length
}

export const getAnnotationReviewsCountForSong = songIndex => {
    const { annotationTodos = [] } = getSong(songIndex)
    return annotationTodos.filter(todo => todo === REVIEW).length
}

export const getAnnotationRevisionsCountForSong = songIndex => {
    const { annotationTodos = [] } = getSong(songIndex)
    return annotationTodos.filter(todo => todo === REVISE).length
}

export const getOverviewTodo = songIndex => (
    getSong(songIndex).todo
)

export const getHasOverviewTodo = songIndex => (
    Boolean(getOverviewTodo(songIndex))
)

export const getHasOverviewReview = songIndex => (
    getOverviewTodo(songIndex) === REVIEW
)

export const getHasOverviewRevision = songIndex => (
    getOverviewTodo(songIndex) === REVISE
)

export const getOverviewTodosCount = () => (
    getArrayOfLength(getSongsAndLoguesCount()).reduce((count, songIndex) => (
        count + getHasOverviewTodo(songIndex)
    ), 0)
)

export const getOverviewReviewsCount = () => (
    getArrayOfLength(getSongsAndLoguesCount()).reduce((count, songIndex) => (
        count + getHasOverviewReview(songIndex)
    ), 0)
)

export const getOverviewRevisionsCount = () => (
    getArrayOfLength(getSongsAndLoguesCount()).reduce((count, songIndex) => (
        count + getHasOverviewRevision(songIndex)
    ), 0)
)

export const getShownAnnotationIndices = ({ songIndex, showAll }) => (
    getAnnotationIndices(songIndex).filter(annotationIndex => (
        // Only show annotations left todo.
        showAll ||
        getAnnotationTodo(songIndex, annotationIndex)
    ))
)

export const getSongsWithTodosCount = showAll => (
    getArrayOfLength(getSongsAndLoguesCount()).reduce((count, songIndex) => (
        count + (
            showAll ||
            getHasOverviewTodo(songIndex) ||
            Boolean(getShownAnnotationIndices({ songIndex }).length)
        )
    ), 0)
)
