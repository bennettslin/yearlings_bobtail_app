import { getAnnotation } from 'album/api/annotations'

export const getAnnotationCardsLength = ({
    songIndex,
    annotationIndex
}) => {

    const { cards } = getAnnotation(
        songIndex,
        annotationIndex
    ) || {}

    return cards ? cards.length : 0
}
