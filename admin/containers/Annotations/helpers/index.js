import { getAnnotationIndices, getTodoForAnnotation } from '../../../../src/endpoint/album/annotations'

export const getShownAnnotationIndices = ({ songIndex, showAll }) => (
    getAnnotationIndices(songIndex).filter(annotationIndex => (
        // Only show annotations left todo.
        showAll ||
        getTodoForAnnotation(songIndex, annotationIndex)
    ))
)
