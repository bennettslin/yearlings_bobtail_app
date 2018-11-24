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
            handleVerseBarWheel
        } = props,

        annotationPopupHandlers = {
            handleAnnotationPrevious,
            handleAnnotationNext,
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
            handleOverviewToggle
        },

        scoresTipsHandlers = {
            handleTipsToggle
        },

        scorePopupHandlers = {
            setScoreRef
        },

        tipsPopupHandlers = {
            handleTipsToggle
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
                handleScrollUponCarouselRender
            },
            leftShelfToggleSectionHandlers: {
                handleOverviewToggle
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
        wikiPopupHandlers
    }
}
