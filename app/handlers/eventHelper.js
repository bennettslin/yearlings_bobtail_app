export const bindHandlers = (me) => {
    me.focusElementForAccess = me.focusElementForAccess.bind(me)

    me.handleAnnotationAccess = me.handleAnnotationAccess.bind(me)
    me.handleDotAccess = me.handleDotAccess.bind(me)
    me.handleAnnotationAnchorAccess = me.handleAnnotationAnchorAccess.bind(me)
    me.handleSongAccess = me.handleSongAccess.bind(me)
    me.handleVerseDirectionAccess = me.handleVerseDirectionAccess.bind(me)

    me.handleBodyClick = me.handleBodyClick.bind(me)
    me.handleBodyTouchMove = me.handleBodyTouchMove.bind(me)
    me.handleBodyTouchEnd = me.handleBodyTouchEnd.bind(me)
    me.handlePopupContainerClick = me.handlePopupContainerClick.bind(me)
    me.handleAccessToggle = me.handleAccessToggle.bind(me)
    me.handleAdminToggle = me.handleAdminToggle.bind(me)
    me.handleAnnotationPrevious = me.handleAnnotationPrevious.bind(me)
    me.handleAnnotationNext = me.handleAnnotationNext.bind(me)
    me.handleAnnotationWikiSelect = me.handleAnnotationWikiSelect.bind(me)
    me.handleAnnotationPortalSelect = me.handleAnnotationPortalSelect.bind(me)
    me.handleAudioPlay = me.handleAudioPlay.bind(me)
    me.handleAudioPreviousSong = me.handleAudioPreviousSong.bind(me)
    me.handleAudioNextSong = me.handleAudioNextSong.bind(me)
    me.handleAudioOptionsToggle = me.handleAudioOptionsToggle.bind(me)
    me.handleSliderTouchBegin = me.handleSliderTouchBegin.bind(me)

    me.handlePlayerTimeChange = me.handlePlayerTimeChange.bind(me)
    me.handlePlayerNextSong = me.handlePlayerNextSong.bind(me)
    me.handlePlayerTimeReset = me.handlePlayerTimeReset.bind(me)

    me.handleDotSelect = me.handleDotSelect.bind(me)
    me.handleDotsSectionToggle = me.handleDotsSectionToggle.bind(me)
    me.handleLyricSectionExpand = me.handleLyricSectionExpand.bind(me)
    me.handleLyricAutoScroll = me.handleLyricAutoScroll.bind(me)
    me.handleLyricColumnSelect = me.handleLyricColumnSelect.bind(me)
    me.handleLyricAnnotationSelect = me.handleLyricAnnotationSelect.bind(me)
    me.handleLyricVerseSelect = me.handleLyricVerseSelect.bind(me)
    me.handleLyricWheel = me.handleLyricWheel.bind(me)
    me.handleNavSongSelect = me.handleNavSongSelect.bind(me)
    me.handleNavBookSelect = me.handleNavBookSelect.bind(me)
    me.handleOverviewToggle = me.handleOverviewToggle.bind(me)
    me.handleCarouselNavToggle = me.handleCarouselNavToggle.bind(me)
    me.handleSceneDirection = me.handleSceneDirection.bind(me)
    me.handleScoreToggle = me.handleScoreToggle.bind(me)
    me.handleTipsToggle = me.handleTipsToggle.bind(me)
    me.handleTitleToggle = me.handleTitleToggle.bind(me)
    me.handleVerseBarSelect = me.handleVerseBarSelect.bind(me)
    me.handleVerseBarWheel = me.handleVerseBarWheel.bind(me)
    me.handleVerseInteractivate = me.handleVerseInteractivate.bind(me)
    me.handleWikiToggle = me.handleWikiToggle.bind(me)
    me.handleScrollUponLyricRender = me.handleScrollUponLyricRender.bind(me)
    me.handleScrollUponCarouselRender =
        me.handleScrollUponCarouselRender.bind(me)
    me.stopPropagation = me.stopPropagation.bind(me)

    me.setLyricRef = me.setLyricRef.bind(me)
}

export const getHandlers = (me) => {
    const
        getRootRef = node => me.myRootElement = node,
        getScoreRef = node => me.myScoreElement = node,
        getWikiRef = node => me.myWikiElement = node,

        {
            setCarouselAnnotationRef,
            setLyricAnnotationRef,
            setVerseRef,
            setLyricVerseParentRef,
            setCarouselParentRef
        } = me.props

    return {
        focusElementForAccess: me.focusElementForAccess,
        handleAnnotationAccess: me.handleAnnotationAccess,
        handleDotAccess: me.handleDotAccess,
        handleAnnotationAnchorAccess: me.handleAnnotationAnchorAccess,
        handleSongAccess: me.handleSongAccess,
        handleVerseDirectionAccess: me.handleVerseDirectionAccess,
        handleBodyClick: me.handleBodyClick,
        handleBodyTouchMove: me.handleBodyTouchMove,
        handleBodyTouchEnd: me.handleBodyTouchEnd,
        handlePopupContainerClick: me.handlePopupContainerClick,
        handleAccessToggle: me.handleAccessToggle,
        handleAdminToggle: me.handleAdminToggle,
        handleAnnotationWikiSelect: me.handleAnnotationWikiSelect,
        handleAnnotationPortalSelect: me.handleAnnotationPortalSelect,
        handleAnnotationPrevious: me.handleAnnotationPrevious,
        handleAnnotationNext: me.handleAnnotationNext,
        handleAudioPlay: me.handleAudioPlay,
        handleAudioPreviousSong: me.handleAudioPreviousSong,
        handleAudioNextSong: me.handleAudioNextSong,
        handleAudioOptionsToggle: me.handleAudioOptionsToggle,
        handleSliderTouchBegin: me.handleSliderTouchBegin,
        handlePlayerTimeChange: me.handlePlayerTimeChange,
        handlePlayerNextSong: me.handlePlayerNextSong,
        handlePlayerTimeReset: me.handlePlayerTimeReset,
        handleDotSelect: me.handleDotSelect,
        handleDotsSectionToggle: me.handleDotsSectionToggle,
        handleLyricSectionExpand: me.handleLyricSectionExpand,
        handleLyricColumnSelect: me.handleLyricColumnSelect,
        handleLyricVerseSelect: me.handleLyricVerseSelect,
        handleLyricAnnotationSelect: me.handleLyricAnnotationSelect,
        handleLyricWheel: me.handleLyricWheel,
        handleLyricAutoScroll: me.handleLyricAutoScroll,
        handleNavSongSelect: me.handleNavSongSelect,
        handleNavBookSelect: me.handleNavBookSelect,
        handleOverviewToggle: me.handleOverviewToggle,
        handleCarouselNavToggle: me.handleCarouselNavToggle,
        handleSceneDirection: me.handleSceneDirection,
        handleScoreToggle: me.handleScoreToggle,
        handleTipsToggle: me.handleTipsToggle,
        handleTitleToggle: me.handleTitleToggle,
        handleVerseBarSelect: me.handleVerseBarSelect,
        handleVerseBarWheel: me.handleVerseBarWheel,
        handleVerseInteractivate: me.handleVerseInteractivate,
        handleWikiToggle: me.handleWikiToggle,
        handleScrollUponLyricRender: me.handleScrollUponLyricRender,
        handleScrollUponCarouselRender: me.handleScrollUponCarouselRender,
        stopPropagation: me.stopPropagation,

        setLyricRef: me.setLyricRef,

        getRootRef,
        getScoreRef,
        getWikiRef,

        setCarouselAnnotationRef,
        setLyricAnnotationRef,
        setVerseRef,
        setLyricVerseParentRef,
        setCarouselParentRef
    }
}
