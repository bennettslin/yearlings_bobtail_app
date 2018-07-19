export const getOrganisedHandlersFromProps = (props) => {
    const {
        setLyricRef,
        getScoreRef,
        getWikiRef,
        setCarouselAnnotationRef,
        setLyricAnnotationRef,
        setVerseRef,
        setLyricVerseParentRef,
        setCarouselParentRef,

        handlePopupContainerClick,
        handleScrollUponLyricRender,
        handleScrollUponCarouselRender,

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
        handleLyricVerseSelect,
        handleOverviewToggle,
        handleScoreToggle,
        handleTipsToggle,
        handleTitleToggle,
        handleVerseBarSelect,
        handleVerseBarWheel,
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

    titleToggleHandlers = {
        handleTitleToggle
    },
    audioBannerHandlers = {
        handleSliderTouchBegin
    },
    audioButtonsHandlers = {
        handleAudioPlay,
        handleAudioPreviousSong,
        handleAudioNextSong,
        handleAudioOptionsToggle
    },
    audioHandlers = {
        titleToggleHandlers,
        audioBannerHandlers,
        audioButtonsHandlers
    },

    lyricColumnHandlers = {
        setLyricRef,
        setLyricAnnotationRef,
        setVerseRef,
        setLyricVerseParentRef,
        handleLyricAnnotationSelect,
        handleLyricColumnSelect,
        handleLyricSectionExpand,
        handleLyricWheel,
        handleLyricAutoScroll,
        handleLyricVerseSelect,
        handleVerseBarSelect,
        handleVerseBarWheel,
        handleVerseInteractivate,
        handleScrollUponLyricRender
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
            setCarouselAnnotationRef,
            setCarouselParentRef,
            handleLyricAnnotationSelect,
            handleAnnotationPrevious,
            handleAnnotationNext,
            handleAnnotationWikiSelect,
            handleAnnotationPortalSelect,
            handlePopupContainerClick,
            handleScrollUponCarouselRender
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
