export const getOrganisedHandlersFromProps = (props) => {
    const {
            setLyricRef,
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
            setLyricRef
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
