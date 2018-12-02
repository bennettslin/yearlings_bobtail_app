import { getSongObject } from '../../../../../helpers/data'

export const getVerseDurationForVerseIndex = (songIndex, verseIndex) => {
    const songObject = getSongObject(songIndex),
        { songVerseConfigs } = songObject

    if (songVerseConfigs) {
        const verseConfig = songVerseConfigs[verseIndex]

        if (verseConfig) {
            return songVerseConfigs[verseIndex].verseDuration
        }
    }

    return 0
}
