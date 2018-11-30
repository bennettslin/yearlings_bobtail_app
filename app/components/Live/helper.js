export const getOrganisedHandlersFromProps = (props) => {
    const {
            setLyricRef,
            setCarouselAnnotationRef,
            setLyricAnnotationRef,
            setVerseRef,
            setLyricVerseParentRef,
            setCarouselParentRef,

            handleAnnotationSelect,
            selectSong,
            togglePlay,
            handleCarouselNavToggle,
            handleLyricAnnotationSelect,
            handleLyricWheel,
            handleLyricAutoScroll,
            handleLyricVerseSelect,
            handleScrollToSelectedVerse,
            handleVerseBarWheel
        } = props,

        annotationPopupHandlers = {
            handleAnnotationSelect,
            selectSong
        },
        audioButtonsHandlers = {
            togglePlay,
            selectSong
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
            handleScrollToSelectedVerse,
            handleVerseBarWheel
        },

        mainColumnHandlers = {
            handleCarouselNavToggle,
            annotationPopupHandlers,
            carouselSectionHandlers: {
                setCarouselAnnotationRef,
                setCarouselParentRef,
                handleLyricAnnotationSelect,
                handleAnnotationSelect,
                selectSong
            },
            navSectionHandlers: {
                selectSong
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
