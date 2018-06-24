// One source of truth for sequence of rendering.

export const canTheatreRender = (state) => {
    return state.isLiveRendered
}

export const canMainRender = (state) => {
    return state.isTheatreRendered
}

export const canSliderRender = (state) => {
    return state.isMainRendered
}

export const canLyricRender = (state) => {
    return state.isSliderRendered
}

export const canCarouselRender = (state) => {
    return state.isLyricRendered
}

export const canSceneRender = (state) => {
    return state.isCarouselRendered
}

export const getOrganisedHandlersFromProps = (props) => {
    const {
        lyricRef,
        scoreRef,
        wikiRef,
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

    titleToggleHandlers = {
        handleTitleToggle
    },

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
        lyricRef,
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
        scoreRef,
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
        wikiRef,
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
        scoresTipsHandlers,
        audioBannerHandlers
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
