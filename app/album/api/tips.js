import { getSong } from './songs'
import {
    LYRIC_EXPAND,
    CAROUSEL,
    ACCESS,
    SLIDER,
    NAV
} from '../../constants/tips'

const getSongTip = songIndex => {
    return getSong(songIndex).tip || null
}

export const getSongTipText = songIndex => {
    const tip = getSongTip(songIndex)
    return tip ? tip.description : null
}

export const getSongTipType = songIndex => {
    const tip = getSongTip(songIndex)
    return tip ? tip.type : null
}

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
