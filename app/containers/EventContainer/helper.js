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
        handleAnnotationAnchorAccess: me.handleAnnotationAnchorAccess,
        handleVerseDirectionAccess: me.handleVerseDirectionAccess,
        handleAnnotationWormholeSelect: me.handleAnnotationWormholeSelect,
        handleAnnotationPrevious: me.handleAnnotationPrevious,
        handleAnnotationNext: me.handleAnnotationNext,
        handleAudioPlay: me.handleAudioPlay,
        handleAudioPreviousSong: me.handleAudioPreviousSong,
        handleAudioNextSong: me.handleAudioNextSong,
        handleLyricColumnSelect: me.handleLyricColumnSelect,
        handleLyricVerseSelect: me.handleLyricVerseSelect,
        handleLyricAnnotationSelect: me.handleLyricAnnotationSelect,
        handleLyricAutoScroll: me.handleLyricAutoScroll,
        handleNavSongSelect: me.handleNavSongSelect,
        handleNavBookSelect: me.handleNavBookSelect,
        handleOverviewToggle: me.handleOverviewToggle,
        handleCarouselNavToggle: me.handleCarouselNavToggle,
        handleSceneDirection: me.handleSceneDirection,
        handleTipsToggle: me.handleTipsToggle,
        handleVerseBarSelect: me.handleVerseBarSelect,
        handleScrollUponLyricRender: me.handleScrollUponLyricRender,
        handleScrollUponCarouselRender: me.handleScrollUponCarouselRender,
        setScoreRef: me.setScoreRef,
        setWikiRef: me.setWikiRef,
        setCarouselAnnotationRef,
        setLyricAnnotationRef,
        setVerseRef,
        setLyricVerseParentRef,
        setCarouselParentRef
    }
}
