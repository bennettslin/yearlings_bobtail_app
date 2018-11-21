import { LYRIC_COLUMN_KEYS } from 'constants/lyrics'
import { getIsOverlayingAnnotation } from 'helpers/responsiveHelper'

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
    renderedAnnotationIndex,
    isScoreShown,
    selectedTitleIndex,
    selectedWikiIndex
}) => {

    const isOverlayingAnnotation = getIsOverlayingAnnotation({
        deviceIndex,
        isLyricExpanded
    })

    return (
        Boolean(selectedTitleIndex) ||
        isScoreShown ||
        Boolean(selectedWikiIndex) ||
        (
            Boolean(renderedAnnotationIndex) &&
            isOverlayingAnnotation
        )
    )
}
