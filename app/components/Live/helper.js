export const getOrganisedHandlersFromProps = (props) => {
    const {
            setLyricFocusElement,
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
            setLyricFocusElement
        },

        mainColumnHandlers = {
            annotationPopupHandlers,
            carouselSectionHandlers: {
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
