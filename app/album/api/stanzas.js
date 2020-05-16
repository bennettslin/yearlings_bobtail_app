import { getSong } from './songs'
import { getSongVerseConfigs } from './verses'

export const getSongStanzaConfigs = (songIndex) => {
    const { songStanzaConfigs } = getSong(songIndex)
    return songStanzaConfigs || []
}

export const getSongStanzasCount = (songIndex) => {
    const { songStanzaConfigs } = getSong(songIndex)
    return songStanzaConfigs ?
        songStanzaConfigs.length :
        0
}

export const getStanzaConfig = (songIndex, stanzaIndex) => {
    const songStanzaConfigs = getSongStanzaConfigs(songIndex)

    return songStanzaConfigs ?
        songStanzaConfigs[stanzaIndex] :
        null
}

export const getStanzaVerseConfigs = (songIndex, stanzaIndex) => {
    const { stanzaVerseIndices } = getStanzaConfig(songIndex, stanzaIndex),
        songVerseConfigs = getSongVerseConfigs(songIndex)

    return stanzaVerseIndices.map(verseIndex => ({
        ...songVerseConfigs[verseIndex],

        // Let verse know its own verse index.
        verseIndex
    }))
}
