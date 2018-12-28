import { getAnnotation } from 'album/api/annotations'

const getAnnotationCardsLength = ({
    songIndex,
    annotationIndex
}) => {

    const { cards } = getAnnotation(
        songIndex,
        annotationIndex
    ) || {}

    return cards ? cards.length : 0
}

export {
    getAnnotationCardsLength
}
