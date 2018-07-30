import { LYRIC_COLUMN_KEYS } from '../constants/lyrics'
import { getIsOverlayingAnnotation } from '../helpers/responsiveHelper'

export const getSingleShownLyricColumnKey = ({
    showOneOfTwoLyricColumns,
    selectedLyricColumnIndex
}) => {
    return showOneOfTwoLyricColumns
        && selectedLyricColumnIndex >= 0 ?
            LYRIC_COLUMN_KEYS[selectedLyricColumnIndex % 2] : ''
}

export const getShowOverlay = ({
    deviceIndex,
    isLyricExpanded,
    renderableAnnotationIndex,
    selectedScoreIndex,
    selectedTitleIndex,
    selectedWikiIndex
}) => {

    const isOverlayingAnnotation = getIsOverlayingAnnotation({
        deviceIndex,
        isLyricExpanded
    })

    return (
        Boolean(selectedTitleIndex) ||
        Boolean(selectedScoreIndex) ||
        Boolean(selectedWikiIndex) ||
        (
            Boolean(renderableAnnotationIndex) &&
            isOverlayingAnnotation
        )
    )
}
