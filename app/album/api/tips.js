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
