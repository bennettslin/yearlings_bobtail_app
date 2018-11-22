export const getOrganisedHandlersFromProps = (props) => {
    const {
            setLyricRef,
            setScoreRef,
            setWikiRef,
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
            handleAnnotationWormholeSelect,
            handleAudioPlay,
            handleAudioPreviousSong,
            handleAudioNextSong,
            handleAudioOptionsToggle,
            handleSliderTouchBegin,
            handleCarouselNavToggle,
            handleDotSelect,
            handleNavSongSelect,
            handleNavBookSelect,
            handleLyricColumnSelect,
            handleLyricAnnotationSelect,
            handleLyricWheel,
            handleLyricAutoScroll,
            handleLyricVerseSelect,
            handleOverviewToggle,
            handleTipsToggle,
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
            handleAnnotationWormholeSelect,
            handleAnnotationWikiSelect
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
            handleTipsToggle
        },

        scorePopupHandlers = {
            setScoreRef
        },

        tipsPopupHandlers = {
            handleTipsToggle,
            handlePopupContainerClick
        },

        titlePopupHandlers = {
            handlePopupContainerClick
        },

        wikiPopupHandlers = {
            setWikiRef,
            handleWikiToggle
        },

        mainColumnHandlers = {
            handleCarouselNavToggle,

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
                handleAnnotationWormholeSelect,
                handlePopupContainerClick,
                handleScrollUponCarouselRender
            },
            leftShelfToggleSectionHandlers: {
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
