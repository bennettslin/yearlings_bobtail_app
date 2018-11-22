import { getIsOverlayingAnnotation } from 'helpers/responsiveHelper'

export const getShowOverlay = ({
    deviceIndex,
    isLyricExpanded,
    renderedAnnotationIndex,
    isScoreShown,
    isTitleShown,
    selectedWikiIndex
}) => {

    const isOverlayingAnnotation = getIsOverlayingAnnotation({
        deviceIndex,
        isLyricExpanded
    })

    return (
        isTitleShown ||
        isScoreShown ||
        Boolean(selectedWikiIndex) ||
        (
            Boolean(renderedAnnotationIndex) &&
            isOverlayingAnnotation
        )
    )
}
