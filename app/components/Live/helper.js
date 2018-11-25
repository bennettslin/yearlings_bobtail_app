export const getOrganisedHandlersFromProps = (props) => {
    const {
            setLyricRef,
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
            handleCarouselNavToggle,
            handleNavSongSelect,
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
        audioButtonsHandlers = {
            handleAudioPlay,
            handleAudioPreviousSong,
            handleAudioNextSong
        },
        audioHandlers = {
            audioButtonsHandlers
        },

        lyricHandlers = {
            setLyricRef,
            setLyricAnnotationRef,
            setVerseRef,
            setLyricVerseParentRef,
            handleLyricAnnotationSelect,
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

        tipsPopupHandlers = {
            handleTipsToggle
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
                handleNavSongSelect
            }
        },

        menuFieldHandlers = {
            audioHandlers,
            scoresTipsHandlers
        }

    return {
        annotationPopupHandlers,
        lyricHandlers,
        mainColumnHandlers,
        menuFieldHandlers,
        overviewPopupHandlers
    }
}
