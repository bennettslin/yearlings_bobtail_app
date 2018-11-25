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
        handleAnnotationPrevious: me.handleAnnotationPrevious,
        handleAnnotationNext: me.handleAnnotationNext,
        handleAudioPlay: me.handleAudioPlay,
        handleAudioPreviousSong: me.handleAudioPreviousSong,
        handleAudioNextSong: me.handleAudioNextSong,
        handleLyricVerseSelect: me.handleLyricVerseSelect,
        handleLyricAnnotationSelect: me.handleLyricAnnotationSelect,
        handleLyricAutoScroll: me.handleLyricAutoScroll,
        handleNavSongSelect: me.handleNavSongSelect,
        handleOverviewToggle: me.handleOverviewToggle,
        handleCarouselNavToggle: me.handleCarouselNavToggle,
        handleTipsToggle: me.handleTipsToggle,
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
