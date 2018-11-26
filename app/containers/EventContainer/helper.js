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
        handleAnnotationWormholeSelect: me.handleAnnotationWormholeSelect,
        handleAnnotationSelect: me.handleAnnotationSelect,
        togglePlay: me.props.togglePlay,
        selectSong: me.props.selectSong,
        handleLyricVerseSelect: me.handleLyricVerseSelect,
        handleLyricAnnotationSelect: me.handleLyricAnnotationSelect,
        handleLyricAutoScroll: me.handleLyricAutoScroll,
        handleCarouselNavToggle: me.handleCarouselNavToggle,
        handleVerseBarSelect: me.handleVerseBarSelect,
        handleScrollUponLyricRender: me.handleScrollUponLyricRender,
        handleScrollUponCarouselRender: me.handleScrollUponCarouselRender,
        setCarouselAnnotationRef,
        setLyricAnnotationRef,
        setVerseRef,
        setLyricVerseParentRef,
        setCarouselParentRef
    }
}
