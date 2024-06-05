import { getAlbum } from '../../../src/endpoint/builds'
import {
    getAnnotationCountForSong,
    getAnnotationIndices,
} from '../../../src/endpoint/album/annotations'
import {
    getSong,
    getSongsAndLoguesCount,
} from '../../../src/endpoint/album/songs'
import { getArrayOfLength } from '../../../src/helpers/general'
import { REVIEW, REVISE } from '../../containers/Annotations/constants/todos'

export const getHasOverviewTodo = (songIndex, key) => (
    key ?
        getSong(songIndex).todo === key :
        Boolean(getSong(songIndex).todo)
)

export const getAnnotationTodo = (songIndex, annotationIndex) => {
    const { annotationTodos = [] } = getSong(songIndex)
    return annotationTodos[annotationIndex - 1]
}

export const getTotalCount = () => {
    const { todoAnnotationIndicesList } = getAlbum()
    return getSongsAndLoguesCount() + todoAnnotationIndicesList.length
}

const _getOverviewTodosCount = key => (
    getArrayOfLength(getSongsAndLoguesCount()).reduce((count, songIndex) => (
        count + getHasOverviewTodo(songIndex, key)
    ), 0)
)

const _getAnnotationTodosCount = key => {
    const {
        todoAnnotationTodosCount,
        todoAnnotationReviewsCount,
        todoAnnotationRevisionsCount,
    } = getAlbum()
    switch (key) {
        case REVIEW:
            return todoAnnotationReviewsCount
        case REVISE:
            return todoAnnotationRevisionsCount
    }
    return todoAnnotationTodosCount
}

export const getTotalTodosCount = () => (
    _getOverviewTodosCount() + _getAnnotationTodosCount()
)

export const getTotalReviewsCount = () => (
    _getOverviewTodosCount(REVIEW) + _getAnnotationTodosCount(REVIEW)
)

export const getTotalRevisionsCount = () => (
    _getOverviewTodosCount(REVISE) + _getAnnotationTodosCount(REVISE)
)

export const getCountForSong = songIndex => (
    getAnnotationCountForSong(songIndex) + 1
)

const _getAnnotationTodosCountForSong = (songIndex, key) => {
    const { annotationTodos = [] } = getSong(songIndex)
    return annotationTodos.reduce((count, todo) => (
        count + (
            key ?
                todo === key :
                Boolean(todo)
        )
    ), 0)
}

export const getTodosCountForSong = songIndex => (
    getHasOverviewTodo(songIndex) +
    _getAnnotationTodosCountForSong(songIndex)
)

export const getReviewsCountForSong = songIndex => (
    getHasOverviewTodo(songIndex, REVIEW) +
    _getAnnotationTodosCountForSong(songIndex, REVIEW)
)

export const getRevisionsCountForSong = songIndex => (
    getHasOverviewTodo(songIndex, REVISE) +
    _getAnnotationTodosCountForSong(songIndex, REVISE)
)

export const getSongsWithTodosCount = showAll => (
    getArrayOfLength(getSongsAndLoguesCount()).reduce((count, songIndex) => (
        count + (
            showAll ||
            Boolean(getTodosCountForSong(songIndex))
        )
    ), 0)
)

export const getShownAnnotationIndices = ({ songIndex, showAll }) => (
    getAnnotationIndices(songIndex).filter(annotationIndex => (
        // Only show annotations left todo.
        showAll ||
        getAnnotationTodo(songIndex, annotationIndex)
    ))
)
