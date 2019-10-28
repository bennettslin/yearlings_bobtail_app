import { getSongIsLogue } from 'album/api/songs'

import {
    CAROUSEL_NAV_BUTTON_KEY,
    LYRIC_SCROLL_BUTTON_KEY,
    NAV_BOOK_BUTTON_KEY,
    NAV_SONG_BUTTON_KEY
} from '../../../constants/buttons'

import { getSharedClassNames } from '../../../helpers/format'

import { BOOK__SHARED } from '../../../scene/shared/paper'
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

    return className ? getSharedClassNames(className) : null
}
