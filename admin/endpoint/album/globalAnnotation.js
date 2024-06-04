import { getAlbum } from '../../../src/endpoint/builds'

export const getGlobalAnnotationCount = () => {
    const { globalAnnotationIndicesList } = getAlbum()
    return globalAnnotationIndicesList.length
}

export const getGlobalAnnotationTodosCount = () => {
    const { globalAnnotationTodosCount } = getAlbum()
    return globalAnnotationTodosCount
}

const _getMetadataForGlobalAnnotation = globalIndex => {
    const { globalAnnotationIndicesList } = getAlbum(),
        globalAnnotationIndices = globalAnnotationIndicesList[globalIndex]

    return globalAnnotationIndices || null
}

const _getTodoForGlobalAnnotation = globalIndex => {
    const { globalAnnotationTodos } = getAlbum()
    return globalAnnotationTodos[globalIndex]
}

const _getAnnotationIndexForInterval = ({
    intervalIndex,
    count,
}) => (
    parseInt(getGlobalAnnotationCount() / count * intervalIndex)
)

export const getNextGlobalAnnotation = ({
    intervalIndex,
    count,
}) => {
    const
        // Start at the initial global index.
        initialGlobalIndex = _getAnnotationIndexForInterval({
            intervalIndex,
            count,
        }),

        // Do not go past the initial global index of the next interval.
        nextGlobalIndex = _getAnnotationIndexForInterval({
            intervalIndex: (intervalIndex + 1) % count,
            count,
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
        const globalAnnotationMetadata =
            _getMetadataForGlobalAnnotation(globalIndex)

        // It's the last interval and there are no more annotations.
        if (!globalAnnotationMetadata) {
            return {}
        }

        // This is the annotation we want.
        if (_getTodoForGlobalAnnotation(globalIndex)) {
            return {
                ...globalAnnotationMetadata,
                globalIndex,
            }
        }

        globalIndex += 1
    }

    return {}
}
