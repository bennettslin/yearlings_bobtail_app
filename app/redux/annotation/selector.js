import { ANNOTATION_STORE } from '../../constants/store'

export const mapQueuedAnnotationIndex = (
    { [ANNOTATION_STORE]: { queuedAnnotationIndex } },
) => queuedAnnotationIndex

export const mapQueuedAnnotationFromCarousel = (
    { [ANNOTATION_STORE]: { queuedAnnotationFromCarousel } },
) => queuedAnnotationFromCarousel

export const mapQueuedAnnotationFromLyricVerse = (
    { [ANNOTATION_STORE]: { queuedAnnotationFromLyricVerse } },
) => queuedAnnotationFromLyricVerse
