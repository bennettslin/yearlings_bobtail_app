import { getSongIsLogue } from '../../../api/album/songs'
import {
    DOTS_SLIDE_SELECT_BUTTON_KEY,
    LYRIC_SCROLL_BUTTON_KEY,
    NAV_BOOK_BUTTON_KEY,
    NAV_SONG_BUTTON_KEY,
    OVERVIEW_BUTTON_KEY,
} from '../../../constants/buttons'
import { OLD_BENNETT } from '../../../constants/scene/actors'
import { ALL_PEOPLE__SHARED } from '../../../constants/scene/sharedStyles/actors'
import { HEADPHONE__SHARED } from '../../../constants/scene/sharedStyles/instruments'
import { BOOK__SHARED } from '../../../constants/scene/sharedStyles/paper'
import { getSharedClassNames } from '../../../helpers/format'

export const getShowButtonIcon = buttonName => {
    return buttonName !== DOTS_SLIDE_SELECT_BUTTON_KEY
}

export const getButtonIconClassNames = ({ buttonName, buttonOption }) => {
    let className

    if (
        buttonName === LYRIC_SCROLL_BUTTON_KEY ||
        buttonName === NAV_BOOK_BUTTON_KEY ||
        (
            buttonName === NAV_SONG_BUTTON_KEY &&
            getSongIsLogue(buttonOption)
        )
    ) {
        className = BOOK__SHARED
    }

    if (buttonName === OVERVIEW_BUTTON_KEY) {
        className = [
            HEADPHONE__SHARED,
            ALL_PEOPLE__SHARED,
            OLD_BENNETT,
        ]
    }

    return className ? getSharedClassNames(className) : null
}
