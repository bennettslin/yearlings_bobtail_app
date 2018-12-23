import albumTips from 'album/tips'
import { getSongIsLogue } from 'album/api/songs'

export const getSongTip = (songIndex) => {

    const isLogue = getSongIsLogue(songIndex)

    if (!isLogue) {
        return albumTips[songIndex].description

    } else {
        return null
    }
}
