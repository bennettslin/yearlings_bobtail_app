import ALL_TIPS from './data'
import { getSongIsLogue } from '../../api/songs'
import {
    LYRIC_EXPAND,
    CAROUSEL,
    ACCESS,
    SLIDER,
    NAV
} from '../../../constants/tips'

const getSongTip = songIndex => {
    const isLogue = getSongIsLogue(songIndex)

    if (isLogue) {
        return {}
    }

    return ALL_TIPS[songIndex - 1]
}

export const getSongTipText = songIndex => (
    getSongTip(songIndex).description
)

export const getSongTipType = songIndex => (
    getSongTip(songIndex).type
)

export const getShowTipForDevice = ({
    songIndex,
    isPhoneWidth,
    isTabletWidth,
    isDesktopWidth

}) => {
    if (isPhoneWidth) {
        return false
    }

    const tipType = getSongTipType(songIndex)

    if (tipType === LYRIC_EXPAND) {
        return !isDesktopWidth
    }
    if (
        tipType === CAROUSEL ||
        tipType === ACCESS ||
        tipType === NAV
    ) {
        return isTabletWidth || isDesktopWidth
    }
    if (tipType === SLIDER) {
        return isDesktopWidth
    }
    return true
}

// Not ideal to hard-code these like this...
export const getShowAnnotationTip = ({
    songIndex,
    unitIndex
}) => (
    songIndex === 1 && unitIndex === 3
)

export const getShowActivatedTip = ({
    songIndex,
    unitIndex
}) => (
    songIndex === 6 && unitIndex === 1
)

export const getShowStanzaTabTip = ({
    songIndex,
    unitIndex
}) => (
    songIndex === 8 && unitIndex === 1
)

export const getShowWormholesTip = ({
    songIndex,
    unitIndex
}) => (
    // TODO: Depend on dot category
    songIndex === 9 && unitIndex === 1
)

export const getShowWikiTip = ({
    songIndex,
    unitIndex
}) => (
    // TODO: Depend on dot category
    songIndex === 10 && unitIndex === 2
)
