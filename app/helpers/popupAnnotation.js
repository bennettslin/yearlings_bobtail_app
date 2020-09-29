export const getIsPopupAnnotationShown = ({
    inMain,
    isSongChangeDone,
    lyricAnnotationIndex,
    isAboutShown,
    isScoreShown,
    isCarouselShown,
    canCarouselNavMount,
    isOverlayingAnnotation,
    isWikiShown

}) => {
    // First determine if *any* popup annotation is shown.
    const isSomePopupAnnotationShown =
        isSongChangeDone &&
        Boolean(lyricAnnotationIndex) &&

        /**
         * If an annotation is selected, always show in popup if it's a phone
         * or lyric is expanded.
         */
        (
            !isCarouselShown ||
            !canCarouselNavMount ||
            isOverlayingAnnotation
        ) &&

        /**
         * These are here because they only hide, not close, the popup
         * annotation.
         */
        !isScoreShown &&
        !isAboutShown &&
        !isWikiShown

    /**
     * Then determine if *this* popup annotation is shown. Popup annotation
     * will be in main, unless lyric column is expanded or heightless.
     */
    return (
        Boolean(inMain) !== isOverlayingAnnotation &&
        isSomePopupAnnotationShown
    )
}
