import { getIsPhoneWidth } from 'helpers/responsive'

export const getIsOverlayingAnnotation = ({
    deviceWidthIndex,
    isLyricExpanded
}) => {
    return (
        // Annotation is always in overlay if lyric is expanded...
        isLyricExpanded ||

        // Or if we are in phone.
        getIsPhoneWidth(deviceWidthIndex)
    )
}

export const getIsOverlayShown = ({
    deviceWidthIndex,
    isLyricExpanded,
    lyricAnnotationIndex,
    isScoreShown,
    isAboutShown,
    selectedWikiIndex
}) => {

    const isOverlayingAnnotation = getIsOverlayingAnnotation({
        deviceWidthIndex,
        isLyricExpanded
    })

    return (
        isAboutShown ||
        isScoreShown ||
        Boolean(selectedWikiIndex) ||
        (
            Boolean(lyricAnnotationIndex) &&
            isOverlayingAnnotation
        )
    )
}
