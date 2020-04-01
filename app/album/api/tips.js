import albumTips from '../tips'
import { getSongIsLogue } from './songs'

export const getSongTipText = (songIndex) => {

    const isLogue = getSongIsLogue(songIndex)

    if (isLogue) {
        return null
    }

    return albumTips[songIndex - 1].description
}
