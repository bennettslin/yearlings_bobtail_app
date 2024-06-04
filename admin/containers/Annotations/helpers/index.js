import { getAnnotationIndices } from '../../../../src/endpoint/album/annotations'
import {
    getSong,
    getSongsAndLoguesCount,
} from '../../../../src/endpoint/album/songs'
import { getArrayOfLength } from '../../../../src/helpers/general'

export const getHasTodoForSongOverview = songIndex => (
    Boolean(getSong(songIndex).todo)
)

export const getTodosCountForAlbumOverviews = () => (
    getArrayOfLength(getSongsAndLoguesCount()).reduce((count, songIndex) => (
        count + getHasTodoForSongOverview(songIndex)
    ), 0)
)

export const getTodoForAnnotation = (songIndex, annotationIndex) => {
    const { annotationTodos = [] } = getSong(songIndex)
    return annotationTodos[annotationIndex - 1]
}

export const getAnnotationTodoCountForSong = songIndex => {
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
            getHasTodoForSongOverview(songIndex) ||
            Boolean(getShownAnnotationIndices({ songIndex }).length)
        )
    ), 0)
)
