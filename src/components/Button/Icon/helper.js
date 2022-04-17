import {
    DOTS_SLIDE_SELECT_BUTTON_KEY,
    OVERVIEW_BUTTON_KEY,
} from '../../../constants/buttons'
import { OLD_BENNETT } from '../../../constants/scene/actors'
import { ALL_PEOPLE__SHARED } from '../../../constants/scene/sharedStyles/actors'
import { HEADPHONE__SHARED } from '../../../constants/scene/sharedStyles/instruments'
import { getSharedClassNames } from '../../../helpers/format'

export const getShowButtonIcon = buttonName => {
    return buttonName !== DOTS_SLIDE_SELECT_BUTTON_KEY
}

export const getButtonIconClassNames = buttonName => {
    let className

    if (buttonName === OVERVIEW_BUTTON_KEY) {
        className = [
            HEADPHONE__SHARED,
            ALL_PEOPLE__SHARED,
            OLD_BENNETT,
        ]
    }

    return className ? getSharedClassNames(className) : null
}
