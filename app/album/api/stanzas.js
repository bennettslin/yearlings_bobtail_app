import {
    getSong,
    getSongIsLogue
} from './songs'
import { getArrayOfLength } from '../../helpers/general'

export const getStanzaIndices = (songIndex) => (
    getSongIsLogue(songIndex) ?
        [] :
        getArrayOfLength(
            // Which stanza array we use is arbitrary.
            getSong(songIndex).stanzaFormTypes.length
        )
)

export const getFormTypeForStanza = (songIndex, stanzaIndex) => {
    const { stanzaFormTypes } = getSong(songIndex)
    return stanzaFormTypes[stanzaIndex]
}

export const getUnitIndicesForStanza = (songIndex, stanzaIndex) => {
    const { stanzaUnitIndicesList } = getSong(songIndex)
    return stanzaUnitIndicesList[stanzaIndex]
}

export const getVerseIndicesForStanza = (songIndex, stanzaIndex) => {
    const { stanzaVerseIndicesList } = getSong(songIndex)
    return stanzaVerseIndicesList[stanzaIndex]
}
