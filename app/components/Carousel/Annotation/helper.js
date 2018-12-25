import { getAnnotationObject } from 'album/api/annotations'
import { EAR_COLUMN_KEYS } from 'constants/lyrics'

const getCarouselAnnotationData = ({
    songIndex,
    annotationIndex
}) => {

    const annotationObject = getAnnotationObject(
            songIndex,
            annotationIndex
        ),

        {
            columnIndex,
            dotKeys
        } = annotationObject,

        columnKey = !isNaN(columnIndex) ? EAR_COLUMN_KEYS[columnIndex] : ''

    return {
        columnKey,
        dotKeys
    }
}

export {
    getCarouselAnnotationData
}
