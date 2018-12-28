import { getSongVerseConfigs } from 'album/api/verses'

export const getVerseDurationForVerseIndex = (songIndex, verseIndex) => {
    const songVerseConfigs = getSongVerseConfigs(songIndex)

    return songVerseConfigs.length ?
        songVerseConfigs[verseIndex].verseDuration :
        0
}
