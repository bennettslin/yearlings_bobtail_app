import { getSong } from './songs'
import { getSongVerseConfigs } from './verses'

export const getSongStanzaTimes = (songIndex) => {
    const { stanzaTimes } = getSong(songIndex)
    return stanzaTimes || []
}

export const getSongStanzasCount = (songIndex) => {
    const { stanzaTimes } = getSong(songIndex)
    return stanzaTimes ?
        stanzaTimes.length :
        0
}

export const getStanzaTime = (songIndex, stanzaIndex) => {
    const stanzaTimes = getSongStanzaTimes(songIndex)

    return stanzaTimes ?
        stanzaTimes[stanzaIndex] :
        null
}

export const getStanzaVerseConfigs = (songIndex, stanzaIndex) => {
    const { stanzaVerseIndices } = getStanzaTime(songIndex, stanzaIndex),
        songVerseConfigs = getSongVerseConfigs(songIndex)

    return stanzaVerseIndices.map(verseIndex => ({
        ...songVerseConfigs[verseIndex],

        // Let verse know its own verse index.
        verseIndex
    }))
}
