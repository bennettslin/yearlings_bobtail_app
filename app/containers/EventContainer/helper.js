export const getHandlers = (me) => {
    const {
        setCarouselAnnotationRef,
        setLyricAnnotationRef,
        setVerseRef,
        setLyricVerseParentRef,
        setCarouselParentRef
    } = me.props

    return {
        togglePlay: me.props.togglePlay,
        selectSong: me.props.selectSong,
        handleLyricVerseSelect: me.handleLyricVerseSelect,
        handleAnnotationIndexSelect: me.handleAnnotationIndexSelect,
        handleAnnotationDirectionSelect: me.handleAnnotationDirectionSelect,
        setCarouselAnnotationRef,
        setLyricAnnotationRef,
        setVerseRef,
        setLyricVerseParentRef,
        setCarouselParentRef
    }
}
