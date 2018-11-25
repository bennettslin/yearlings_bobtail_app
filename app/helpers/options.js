import {
    SHOWN,
    HIDDEN,
    DISABLED
} from 'constants/options'

const getNextOption = ({
    isToggled,
    prevOption,
    nextOption
}) => {
    // If custom overview option is passed, set it.
    if (nextOption) {
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
