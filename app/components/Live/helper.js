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

            handleAnnotationSelect,
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
            handleVerseBarSelect,
            handleVerseBarWheel
        } = props,

        annotationPopupHandlers = {
            handleAnnotationSelect,
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

        mainColumnHandlers = {
            handleCarouselNavToggle,
            annotationPopupHandlers,
            carouselSectionHandlers: {
                setCarouselAnnotationRef,
                setCarouselParentRef,
                handleLyricAnnotationSelect,
                handleAnnotationSelect,
                handleAnnotationWormholeSelect,
                handleScrollUponCarouselRender
            },
            navSectionHandlers: {
                handleNavSongSelect
            }
        },

        menuFieldHandlers = {
            audioHandlers
        }

    return {
        annotationPopupHandlers,
        lyricHandlers,
        mainColumnHandlers,
        menuFieldHandlers
    }
}
