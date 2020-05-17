import { finalAlbum } from '../../../app/album'
import { getAnnotation } from '../../../app/album/api/annotations'

export const getGlobalAnnotationCount = () => {
    const { globalAnnotationIndicesList } = finalAlbum
    return globalAnnotationIndicesList.length
}

export const getGlobalAnnotationDoneCount = () => {
    const { globalAnnotationDoneCount } = finalAlbum
    return globalAnnotationDoneCount
}

const _getIndicesForGlobalAnnotation = globalIndex => {
    const { globalAnnotationIndicesList } = finalAlbum,
        globalAnnotationIndices = globalAnnotationIndicesList[globalIndex]

    return globalAnnotationIndices || {}
}

const _getTodoForGlobalAnnotation = globalIndex => {
    const { globalAnnotationTodos } = finalAlbum
    return globalAnnotationTodos[globalIndex]
}

const getGlobalAnnotation = globalIndex => {
    const {
        songIndex,
        annotationIndex
    } = _getIndicesForGlobalAnnotation(globalIndex)

    return songIndex && annotationIndex ? getAnnotation(
        songIndex,
        annotationIndex
    ) : null
}

const _getAnnotationIndexForInterval = ({
    intervalIndex,
    count
}) => (
    parseInt(getGlobalAnnotationCount() / count * intervalIndex)
)

export const getNextGlobalAnnotationForInterval = ({
    intervalIndex,
    count
}) => {
    const
        // Start at the initial global index.
        initialGlobalIndex = _getAnnotationIndexForInterval({
            intervalIndex,
            count
        }),

        // Do not go past the initial global index of the next interval.
        nextGlobalIndex = _getAnnotationIndexForInterval({
            intervalIndex: (intervalIndex + 1) % count,
            count
        }),

        /**
         * If it's the last interval, break out of while loop when there are
         * no more annotations.
         */
        isLastIntervalIndex = initialGlobalIndex > nextGlobalIndex

    let globalIndex = initialGlobalIndex

    while (
        isLastIntervalIndex || globalIndex < nextGlobalIndex
    ) {
        const globalAnnotation = getGlobalAnnotation(globalIndex)

        // It's the last interval and there are no more annotations.
        if (!globalAnnotation) {
            return null
        }

        // This is the annotation we want.
        if (_getTodoForGlobalAnnotation(globalIndex)) {
            return {
                ...globalAnnotation,
                globalIndex
            }
        }

        globalIndex += 1
    }

    return null
}
