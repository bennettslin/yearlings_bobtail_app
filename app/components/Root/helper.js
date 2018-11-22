import { LYRIC_COLUMN_KEYS } from 'constants/lyrics'
import {
    getSongIsLogue,
    getSongObject
} from '../../helpers/dataHelper'

export const getSingleShownLyricColumnKey = ({
    showOneOfTwoLyricColumns,
    selectedLyricColumnIndex
}) => {
    return showOneOfTwoLyricColumns
        && selectedLyricColumnIndex >= 0 ?
        LYRIC_COLUMN_KEYS[selectedLyricColumnIndex % 2] : ''
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
