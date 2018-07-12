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
    isHeightlessLyricColumn,
    selectedAnnotationIndex,
    selectedScoreIndex,
    selectedTitleIndex,
    selectedWikiIndex
}) => {
    const isOverlayingAnnotation = getIsOverlayingAnnotation({
        deviceIndex,
        isLyricExpanded,
        isHeightlessLyricColumn
    })

    return !!selectedTitleIndex ||
           !!selectedScoreIndex ||
           !!selectedWikiIndex ||
           (!!selectedAnnotationIndex && isOverlayingAnnotation)
}
