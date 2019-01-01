import { getIsPhone } from 'helpers/responsive'

export const getIsOverlayingAnnotation = ({
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

export const getIsOverlayShown = ({
    deviceIndex,
    isLyricExpanded,
    lyricAnnotationIndex,
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
            Boolean(lyricAnnotationIndex) &&
            isOverlayingAnnotation
        )
    )
}
