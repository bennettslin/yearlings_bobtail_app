import { getIsPhone } from 'helpers/responsiveHelper'

const getIsOverlayingAnnotation = ({
    deviceIndex,
    isLyricExpanded
}) => {
    return (
        // Annotation is always in overlay if lyric is expanded...
        isLyricExpanded ||

        // Or if we are in phone.
        getIsPhone(deviceIndex)
    )
}

const getIsOverlayShown = ({
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

export {
    getIsOverlayingAnnotation,
    getIsOverlayShown
}
