export const getHandlers = (me) => {
    const {
        setCarouselAnnotationRef,
        setLyricAnnotationRef,
        setVerseRef,
        setLyricVerseParentRef,
        setCarouselParentRef
    } = me.props

    return {
        handleVerseDirectionAccess: me.handleVerseDirectionAccess,
        handleAnnotationDirectionSelect: me.handleAnnotationDirectionSelect,
        togglePlay: me.props.togglePlay,
        selectSong: me.props.selectSong,
        handleLyricVerseSelect: me.handleLyricVerseSelect,
        handleAnnotationDirectSelect: me.handleAnnotationDirectSelect,
        setCarouselAnnotationRef,
        setLyricAnnotationRef,
        setVerseRef,
        setLyricVerseParentRef,
        setCarouselParentRef
    }
}
