export const getHandlers = (me) => {
    const {
        setCarouselAnnotationRef,
        setLyricAnnotationRef,
        setVerseRef,
        setLyricVerseParentRef,
        setCarouselParentRef
    } = me.props

    return {
        handleAnnotationAccess: me.handleAnnotationAccess,
        handleVerseDirectionAccess: me.handleVerseDirectionAccess,
        handleAnnotationSelect: me.handleAnnotationSelect,
        togglePlay: me.props.togglePlay,
        selectSong: me.props.selectSong,
        handleLyricVerseSelect: me.handleLyricVerseSelect,
        handleLyricAnnotationSelect: me.handleLyricAnnotationSelect,
        handleLyricAutoScroll: me.handleLyricAutoScroll,
        handleCarouselNavToggle: me.handleCarouselNavToggle,
        handleScrollToSelectedVerse: me.handleScrollToSelectedVerse,
        setCarouselAnnotationRef,
        setLyricAnnotationRef,
        setVerseRef,
        setLyricVerseParentRef,
        setCarouselParentRef
    }
}
