export const getHandlers = (me) => {
    const {
        setCarouselAnnotationRef,
        setLyricAnnotationRef,
        setVerseRef,
        setLyricParentRef,
        setCarouselParentRef
    } = me.props

    return {
        togglePlay: me.props.togglePlay,
        selectSong: me.props.selectSong,
        handleLyricVerseSelect: me.handleLyricVerseSelect,
        handleAnnotationIndexSelect: me.handleAnnotationIndexSelect,
        setCarouselAnnotationRef,
        setLyricAnnotationRef,
        setVerseRef,
        setLyricParentRef,
        setCarouselParentRef
    }
}
