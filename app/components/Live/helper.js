export const getOrganisedHandlersFromProps = (props) => {
    const {
            setLyricFocusElement,
            togglePlay
        } = props,

        audioButtonsHandlers = {
            togglePlay
        },
        audioHandlers = {
            audioButtonsHandlers
        },

        lyricHandlers = {
            setLyricFocusElement
        },

        menuFieldHandlers = {
            audioHandlers
        }

    return {
        lyricHandlers,
        menuFieldHandlers
    }
}
