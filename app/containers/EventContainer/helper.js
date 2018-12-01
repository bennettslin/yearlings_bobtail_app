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
        handleVerseSelect: me.handleVerseSelect,
        setCarouselAnnotationRef,
        setLyricAnnotationRef,
        setVerseRef,
        setLyricParentRef,
        setCarouselParentRef
    }
}
