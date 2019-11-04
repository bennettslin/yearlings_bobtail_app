import { getSongIsLogue } from 'album/api/songs'

import {
    CAROUSEL_NAV_BUTTON_KEY,
    LYRIC_SCROLL_BUTTON_KEY,
    NAV_BOOK_BUTTON_KEY,
    NAV_SONG_BUTTON_KEY,
    OVERVIEW_BUTTON_KEY
} from '../../../constants/buttons'

import { getSharedClassNames } from '../../../helpers/format'

import { HEADPHONE__SHARED } from '../../../scene/shared/instruments'
import { BOOK__SHARED } from '../../../scene/shared/paper'
import {
    ALL_PEOPLE__SHARED,
    OLD_BENNETT__SHARED
} from '../../../scene/shared/people'
import { SNOWGLOBE__SHARED } from '../../../scene/shared/props'

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
            OLD_BENNETT__SHARED
        ]
    }

    return className ? getSharedClassNames(className) : null
}
