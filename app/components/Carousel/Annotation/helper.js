import isNumber from 'lodash.isnumber'
import { getAnnotation } from 'album/api/annotations'
import { EAR_COLUMN_KEYS } from 'constants/lyrics'

export const getCarouselAnnotationData = ({
    songIndex,
    annotationIndex
}) => {

    const annotationObject = getAnnotation(
            songIndex,
            annotationIndex
        ),

        {
            columnIndex,
            dotKeys
        } = annotationObject,

        columnKey = isNumber(columnIndex) ? EAR_COLUMN_KEYS[columnIndex] : ''

    return {
        columnKey,
        dotKeys
    }
}
