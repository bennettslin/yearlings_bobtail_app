export const getOrganisedHandlersFromProps = (props) => {
    const {
            setLyricRef,
            setCarouselAnnotationRef,
            setLyricAnnotationRef,
            setVerseRef,
            setLyricVerseParentRef,
            setCarouselParentRef,

            handleAnnotationDirectionSelect,
            selectSong,
            togglePlay,
            handleAnnotationIndexSelect,
            handleLyricWheel,
            handleLyricVerseSelect,
            handleVerseBarWheel
        } = props,

        annotationPopupHandlers = {
            handleAnnotationDirectionSelect,
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
            handleAnnotationIndexSelect,
            handleLyricWheel,
            handleLyricVerseSelect,
            handleVerseBarWheel
        },

        mainColumnHandlers = {
            annotationPopupHandlers,
            carouselSectionHandlers: {
                setCarouselAnnotationRef,
                setCarouselParentRef,
                handleAnnotationIndexSelect,
                handleAnnotationDirectionSelect,
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
