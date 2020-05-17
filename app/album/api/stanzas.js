import {
    getFinalSong,
    getSongIsLogue
} from './songs'
import { getArrayOfLength } from '../../helpers/general'

export const getStanzaIndices = (songIndex) => (
    getSongIsLogue(songIndex) ?
        [] :
        getArrayOfLength(
            // Which stanza array we use is arbitrary.
            getFinalSong(songIndex).stanzaFormTypes.length
        )
)

export const getFormTypeForStanza = (songIndex, stanzaIndex) => {
    const { stanzaFormTypes } = getFinalSong(songIndex)
    return stanzaFormTypes[stanzaIndex]
}

export const getUnitIndicesForStanza = (songIndex, stanzaIndex) => {
    const { stanzaUnitIndicesList } = getFinalSong(songIndex)
    return stanzaUnitIndicesList[stanzaIndex]
}

export const getVerseIndicesForStanza = (songIndex, stanzaIndex) => {
    const { stanzaVerseIndicesList } = getFinalSong(songIndex)
    return stanzaVerseIndicesList[stanzaIndex]
}
