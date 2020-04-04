import albumTips from '../tips'
import { getSongIsLogue } from './songs'

const getSongTip = songIndex => {
    const isLogue = getSongIsLogue(songIndex)

    if (isLogue) {
        return {}
    }

    return albumTips[songIndex - 1]
}

export const getSongTipText = songIndex => (
    getSongTip(songIndex).description
)

export const getSongTipType = songIndex => (
    getSongTip(songIndex).type
)

// Not ideal to hard-code like this...
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
    songIndex === 10 && unitIndex === 1
)
