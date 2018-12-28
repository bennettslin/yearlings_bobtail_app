import { EAR_COLUMN_KEYS } from 'constants/lyrics'
import { getSongVerseConfigs } from 'album/api/verses'

export const getSingleShownEarColumnKey = ({
    isEarShown,
    earColumnIndex
}) => {
    return isEarShown
        && earColumnIndex >= 0 ?
        EAR_COLUMN_KEYS[earColumnIndex % 2] : ''
}

export const getStanzaIndexForVerseIndex = (songIndex, verseIndex) => {

    const songVerseConfigs = getSongVerseConfigs(songIndex)
    return songVerseConfigs.length ?
        songVerseConfigs[verseIndex].stanzaIndex :
        0
}
