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
            handleAnnotationWormholeSelect,
            handleAudioPlay,
            handleAudioPreviousSong,
            handleAudioNextSong,
            handleSliderTouchBegin,
            handleCarouselNavToggle,
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
            stopPropagation
        } = props,

        annotationPopupHandlers = {
            handleAnnotationPrevious,
            handleAnnotationNext,
            handlePopupContainerClick,
            handleAnnotationWormholeSelect
        },

        audioBannerHandlers = {
            handleSliderTouchBegin
        },
        audioButtonsHandlers = {
            handleAudioPlay,
            handleAudioPreviousSong,
            handleAudioNextSong
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
            setWikiRef
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
                handleAnnotationWormholeSelect,
                handlePopupContainerClick,
                handleScrollUponCarouselRender
            },
            leftShelfToggleSectionHandlers: {
                handleOverviewToggle
            },
            dotsSectionHandlers: {
                handlePopupContainerClick,
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
