import { getColumnIndexForAnnotation } from '../../../api/album/annotations'
import { EAR_COLUMN_KEYS } from '../../../constants/lyrics'

export const getCarouselAnnotationData = ({
    songIndex,
    annotationIndex
}) => {

    const columnIndex = getColumnIndexForAnnotation(
            songIndex,
            annotationIndex
        ),

        columnKey = Number.isFinite(columnIndex) ?
            EAR_COLUMN_KEYS[columnIndex] :
            ''

    return columnKey
}
