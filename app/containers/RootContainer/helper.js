import { EAR_COLUMN_KEYS } from 'constants/lyrics'
import {
    getSongIsLogue,
    getSongObject
} from '../../helpers/dataHelper'

export const getSingleShownEarColumnKey = ({
    isEarShown,
    earColumnIndex
}) => {
    return isEarShown
        && earColumnIndex >= 0 ?
        EAR_COLUMN_KEYS[earColumnIndex % 2] : ''
}

export const getStanzaIndexForVerseIndex = (songIndex, verseIndex) => {

    // Return -1 if logue.
    if (getSongIsLogue(songIndex)) {
        return 0
    }

    const songObject = getSongObject(songIndex),
        { songVerseConfigs } = songObject

    return songVerseConfigs[verseIndex].stanzaIndex
}
