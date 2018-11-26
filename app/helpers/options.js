import {
    SHOWN,
    HIDDEN,
    DISABLED
} from 'constants/options'

const getNextOption = ({
    isToggled,
    toggleShows,
    prevOption,
    nextOption
}) => {

    if (toggleShows) {
        return SHOWN

    // If custom overview option is passed, set it.
    } else if (nextOption) {
        return nextOption

    // Otherwise, rotate through options.
    } else {
        switch (prevOption) {
            case HIDDEN:
                return isToggled ? SHOWN : DISABLED
            case DISABLED:
                return SHOWN
            case SHOWN:
            default:
                return isToggled ? DISABLED : HIDDEN
        }
    }
}

export {
    getNextOption
}
