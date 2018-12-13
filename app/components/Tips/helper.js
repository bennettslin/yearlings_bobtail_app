import album from 'album'
import { getSongIsLogue } from '../../helpers/data'

export const getSongTip = (songIndex) => {

    if (songIndex < 0) {
        return null
    }

    const isLogue = getSongIsLogue(songIndex),
        { tips } = album

    if (!isLogue) {
        return tips[songIndex].description
    } else {
        return null
    }
}
