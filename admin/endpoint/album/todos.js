import {
    getAnnotationCountForSong,
    getAnnotationIndices,
} from '../../../src/endpoint/album/annotations'
import {
    getSong,
    getSongsAndLoguesCount,
} from '../../../src/endpoint/album/songs'
import { getArrayOfLength } from '../../../src/helpers/general'
import { REDO, REST, REVIEW, REVISE } from '../../containers/Annotations/constants/todos'

export const getOverviewTodo = songIndex => (
    getSong(songIndex).todo
)

export const getHasOverviewTodo = (songIndex, key) => {
    const overviewTodo = getOverviewTodo(songIndex)
    return (
        key ?
            overviewTodo === key :
            Boolean(overviewTodo && overviewTodo !== REST)
    )
}

const _getOverviewTodosCount = key => (
    getArrayOfLength(getSongsAndLoguesCount()).reduce((count, songIndex) => (
        count + getHasOverviewTodo(songIndex, key)
    ), 0)
)

export const getAnnotationTodo = (songIndex, annotationIndex) => {
    const { annotationTodos = [] } = getSong(songIndex)
    return annotationTodos[annotationIndex - 1]
}

export const getIsAnnotationTodoShown = (songIndex, annotationIndex) => {
    const todo = getAnnotationTodo(songIndex, annotationIndex)
    return Boolean(todo) && todo !== REST
}

const _getAnnotationTodosCountForSong = (songIndex, key) => {
    const { annotationTodos = [] } = getSong(songIndex)
    return annotationTodos.reduce((count, todo) => (
        count + (
            key ?
                todo === key :
                Boolean(todo) && todo !== REST
        )
    ), 0)
}

export const getCountForSong = songIndex => (
    getAnnotationCountForSong(songIndex) + 1
)

export const getTodosCountForSong = songIndex => (
    getHasOverviewTodo(songIndex) +
    _getAnnotationTodosCountForSong(songIndex)
)

export const getRestsCountForSong = songIndex => (
    getHasOverviewTodo(songIndex, REST) +
    _getAnnotationTodosCountForSong(songIndex, REST)
)

export const getReviewsCountForSong = songIndex => (
    getHasOverviewTodo(songIndex, REVIEW) +
    _getAnnotationTodosCountForSong(songIndex, REVIEW)
)

export const getRevisionsCountForSong = songIndex => (
    getHasOverviewTodo(songIndex, REVISE) +
    _getAnnotationTodosCountForSong(songIndex, REVISE)
)

export const getRedosCountForSong = songIndex => (
    getHasOverviewTodo(songIndex, REDO) +
    _getAnnotationTodosCountForSong(songIndex, REDO)
)

const _getAnnotationTodosCount = key => (
    getArrayOfLength(getSongsAndLoguesCount()).reduce((count, songIndex) => (
        count + _getAnnotationTodosCountForSong(songIndex, key)
    ), 0)
)

export const getTotalCount = () => (
    getArrayOfLength(getSongsAndLoguesCount()).reduce((count, songIndex) => (
        // Count one overview plus all annotations for each song.
        count + 1 + getAnnotationCountForSong(songIndex)
    ), 0)
)

export const getTotalTodosCount = () => (
    _getOverviewTodosCount() + _getAnnotationTodosCount()
)

export const getTotalRestsCount = () => (
    _getOverviewTodosCount(REST) + _getAnnotationTodosCount(REST)
)

export const getTotalReviewsCount = () => (
    _getOverviewTodosCount(REVIEW) + _getAnnotationTodosCount(REVIEW)
)

export const getTotalRevisionsCount = () => (
    _getOverviewTodosCount(REVISE) + _getAnnotationTodosCount(REVISE)
)

export const getTotalRedosCount = () => (
    _getOverviewTodosCount(REDO) + _getAnnotationTodosCount(REDO)
)

export const getSongsWithTodosCount = areDoneTodosHidden => (
    getArrayOfLength(getSongsAndLoguesCount()).reduce((count, songIndex) => (
        count + (
            !areDoneTodosHidden ||
            Boolean(
                getHasOverviewTodo(songIndex) +
                _getAnnotationTodosCountForSong(songIndex),
            )
        )
    ), 0)
)

export const getShownAnnotationIndices = ({
    songIndex,
    areDoneTodosHidden,
}) => (
    getAnnotationIndices(songIndex).filter(annotationIndex => {
        const annotationTodo = getAnnotationTodo(songIndex, annotationIndex)
        return (
            // Only show annotations left todo.
            !areDoneTodosHidden || (
                annotationTodo && annotationTodo !== REST
            )
        )
    })
)
