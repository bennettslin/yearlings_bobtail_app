import { finalAlbum } from '../../../app/album'
import { getAnnotation } from '../../../app/album/api/annotations'

const getGlobalAnnotation = (globalIndex) => {
    const { globalAnnotationIndices } = finalAlbum,
        annotationObject = globalAnnotationIndices[globalIndex]

    if (!annotationObject) {
        return null
    }

    const {
        songIndex,
        annotationIndex
    } = annotationObject

    return getAnnotation(
        songIndex,
        annotationIndex
    )
}

const _getAnnotationIndexForInterval = ({
    intervalIndex,
    count
}) => {
    const { globalAnnotationIndices } = finalAlbum
    return parseInt(globalAnnotationIndices.length / count * intervalIndex)
}

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
        if (globalAnnotation.todo) {
            return {
                ...globalAnnotation,
                globalIndex
            }
        }

        globalIndex += 1
    }

    return null
}

export const getGlobalAnnotationsCount = () => {
    const { globalAnnotationIndices } = finalAlbum
    return globalAnnotationIndices.length
}

export const getGlobalAnnotationsDoneCount = () => {
    const { globalAnnotationIndicesDone } = finalAlbum
    return globalAnnotationIndicesDone
}
