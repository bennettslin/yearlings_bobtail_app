import { getSongVerseConfigs } from 'album/api/verses'

export const getStanzaIndexForVerseIndex = (songIndex, verseIndex) => {

    const songVerseConfigs = getSongVerseConfigs(songIndex)
    return songVerseConfigs.length ?
        songVerseConfigs[verseIndex].stanzaIndex :
        0
}
