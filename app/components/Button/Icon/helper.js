import { getSongIsLogue } from '../../../api/album/songs'

import {
    CAROUSEL_NAV_BUTTON_KEY,
    LYRIC_SCROLL_BUTTON_KEY,
    NAV_BOOK_BUTTON_KEY,
    NAV_SONG_BUTTON_KEY,
    OVERVIEW_BUTTON_KEY,
} from '../../../constants/buttons'

import { OLD_BENNETT } from '../../../constants/scene/actors'
import { ALL_PEOPLE__SHARED } from '../../../constants/scene/sharedStyles/actors'
import { HEADPHONE__SHARED } from '../../../constants/scene/sharedStyles/instruments'
import { BOOK__SHARED } from '../../../constants/scene/sharedStyles/paper'
import { SNOWGLOBE__SHARED } from '../../../constants/scene/sharedStyles/props'

import { getSharedClassNames } from '../../../helpers/format'

export const getButtonIconClassNames = ({ buttonName, buttonIdentifier }) => {
    let className

    if (
        buttonName === LYRIC_SCROLL_BUTTON_KEY ||
        buttonName === NAV_BOOK_BUTTON_KEY ||
        (
            buttonName === NAV_SONG_BUTTON_KEY &&
            getSongIsLogue(buttonIdentifier)
        )
    ) {
        className = BOOK__SHARED
    }

    if (
        buttonName === CAROUSEL_NAV_BUTTON_KEY ||
        (
            buttonName === NAV_SONG_BUTTON_KEY &&
            !getSongIsLogue(buttonIdentifier)
        )
    ) {
        className = SNOWGLOBE__SHARED
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
