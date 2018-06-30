export const getOrganisedHandlersFromProps = (props) => {
    const {
        getLyricRef,
        getScoreRef,
        getWikiRef,
        getCarouselAnnotationRef,
        getVerseRef,

        handlePopupContainerClick,
        handleScrollAfterLyricRerender,

        handleAnnotationPrevious,
        handleAnnotationNext,
        handleAnnotationWikiSelect,
        handleAnnotationPortalSelect,
        handleAudioPlay,
        handleAudioPreviousSong,
        handleAudioNextSong,
        handleAudioOptionsToggle,
        handleSliderTouchBegin,
        handleCarouselNavToggle,
        handleDotSelect,
        handleDotsSectionToggle,
        handleNavSongSelect,
        handleNavBookSelect,
        handleLyricColumnSelect,
        handleLyricSectionExpand,
        handleLyricAnnotationSelect,
        handleLyricWheel,
        handleLyricAutoScroll,
        handleLyricPlay,
        handleLyricVerseSelect,
        handleOverviewToggle,
        handleScoreToggle,
        handleTipsToggle,
        handleTitleToggle,
        handleVerseBarSelect,
        handleVerseBarWheel,
        handleSetVerseElement,
        handleVerseInteractivate,
        handleWikiToggle,
        stopPropagation
    } = props,

    annotationPopupHandlers = {
        handleAnnotationPrevious,
        handleAnnotationNext,
        handlePopupContainerClick,
        handleAnnotationPortalSelect,
        handleAnnotationWikiSelect
    },

    audioBannerHandlers = {
        handleSliderTouchBegin
    },
    titleToggleHandlers = {
        handleTitleToggle
    },
    audioHandlers = {
        handleAudioPlay,
        handleAudioPreviousSong,
        handleAudioNextSong,
        handleAudioOptionsToggle,
        handlePopupContainerClick,

        audioBannerHandlers,
        titleToggleHandlers
    },

    lyricColumnHandlers = {
        getLyricRef,
        getVerseRef,
        handleLyricAnnotationSelect,
        handleLyricColumnSelect,
        handleLyricSectionExpand,
        handleLyricWheel,
        handleLyricAutoScroll,
        handleLyricPlay,
        handleLyricVerseSelect,
        handleVerseBarSelect,
        handleVerseBarWheel,
        handleVerseInteractivate,
        handleSetVerseElement,
        handleScrollAfterLyricRerender
    },

    overviewPopupHandlers = {
        handleOverviewToggle,
        handlePopupContainerClick
    },

    scoresTipsHandlers = {
        handleScoreToggle,
        handleTipsToggle
    },

    scorePopupHandlers = {
        getScoreRef,
        handleScoreToggle
    },

    tipsPopupHandlers = {
        handleTipsToggle,
        handlePopupContainerClick
    },

    titlePopupHandlers = {
        handleTitleToggle,
        handlePopupContainerClick
    },

    wikiPopupHandlers = {
        getWikiRef,
        handleWikiToggle
    },

    mainColumnHandlers = {
        handleCarouselNavToggle,
        handleLyricSectionExpand,

        annotationPopupHandlers,
        overviewPopupHandlers,
        scoresTipsHandlers,
        tipsPopupHandlers,

        carouselSectionHandlers: {
            handleLyricAnnotationSelect,
            handleAnnotationPrevious,
            handleAnnotationNext,
            handleAnnotationWikiSelect,
            handleAnnotationPortalSelect,
            handlePopupContainerClick,
            getCarouselAnnotationRef
        },
        leftShelfToggleSectionHandlers: {
            handleDotsSectionToggle,
            handleOverviewToggle
        },
        dotsSectionHandlers: {
            handlePopupContainerClick,
            handleDotSelect,
            stopPropagation
        },
        navSectionHandlers: {
            handleNavSongSelect,
            handleNavBookSelect
        }
    },

    menuFieldHandlers = {
        titleToggleHandlers,
        audioHandlers,
        scoresTipsHandlers
    }

    return {
        annotationPopupHandlers,
        lyricColumnHandlers,
        mainColumnHandlers,
        menuFieldHandlers,
        overviewPopupHandlers,
        scorePopupHandlers,
        titlePopupHandlers,
        wikiPopupHandlers
    }
}
