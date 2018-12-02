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

        menuFieldHandlers = {
            audioHandlers
        }

    return {
        setLyricFocusElement,
        menuFieldHandlers
    }
}
