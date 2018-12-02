export const getOrganisedHandlersFromProps = (props) => {
    const {
            setLyricRef,
            setCarouselAnnotationRef,
            setLyricAnnotationRef,
            setVerseRef,
            setLyricParentRef,
            setCarouselParentRef,
            selectSong,
            togglePlay
        } = props,

        annotationPopupHandlers = {
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
            setLyricParentRef
        },

        mainColumnHandlers = {
            annotationPopupHandlers,
            carouselSectionHandlers: {
                setCarouselAnnotationRef,
                setCarouselParentRef,
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
