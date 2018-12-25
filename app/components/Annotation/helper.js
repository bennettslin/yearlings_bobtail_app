import { getAnnotationObject } from 'album/api/annotations'

const getAnnotationCardsLength = ({
    songIndex,
    annotationIndex
}) => {

    const { cards } = getAnnotationObject(
        songIndex,
        annotationIndex
    ) || {}

    return cards ? cards.length : 0
}

export {
    getAnnotationCardsLength
}
