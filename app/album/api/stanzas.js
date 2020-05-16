import { getFinalSong } from './songs'
import { getSongVerseConfigs } from './verses'
import { getArrayOfLength } from '../../helpers/general'

export const getStanzaIndicesArray = (songIndex) => (
    getArrayOfLength(
        getFinalSong(songIndex).stanzaFormTypes.length
    )
)

export const getStanzaVerseConfigs = (songIndex, stanzaIndex) => {
    const { stanzaVerseIndicesList } = getFinalSong(songIndex)
    const stanzaVerseIndices = stanzaVerseIndicesList[stanzaIndex],
        songVerseConfigs = getSongVerseConfigs(songIndex)

    return stanzaVerseIndices.map(verseIndex => ({
        ...songVerseConfigs[verseIndex],

        // Let verse know its own verse index.
        verseIndex
    }))
}

export const getStanzaFormType = (songIndex, stanzaIndex) => {
    const { stanzaFormTypes } = getFinalSong(songIndex)
    return stanzaFormTypes[stanzaIndex]
}

export const getStanzaUnitIndices = (songIndex, stanzaIndex) => {
    const { stanzaUnitIndicesList } = getFinalSong(songIndex)
    return stanzaUnitIndicesList[stanzaIndex]
}

export const getStanzaEndTime = (songIndex, stanzaIndex) => {
    const { stanzaEndTimes } = getFinalSong(songIndex)
    return stanzaEndTimes[stanzaIndex]
}
