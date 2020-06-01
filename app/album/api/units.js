import { getSong } from './songs'
import { getFormTypeForStanza } from './stanzas'

export const getLastUnitDotCardIndex = songIndex => {
    const { lastUnitDotIndex } = getSong(songIndex)
    return lastUnitDotIndex || -1
}

// TODO: Eventually get rid of this.
export const getMainVersesForUnit = (songIndex, unitIndex) => {
    const { unitMainVerses } = getSong(songIndex)
    return unitMainVerses[unitIndex]
}

export const getDotForUnit = (songIndex, unitIndex) => {
    const { withUnitDots } = getSong(songIndex)
    return withUnitDots[unitIndex] || null
}

export const getSubCardForUnit = (songIndex, unitIndex) => {
    const { withUnitSubCards } = getSong(songIndex)
    return withUnitSubCards[unitIndex] || null
}

export const getSideCardForUnit = (songIndex, unitIndex) => {
    const { withUnitSideCards } = getSong(songIndex)
    return withUnitSideCards[unitIndex] || null
}

export const getSideSubCardForUnit = (songIndex, unitIndex) => {
    const { withUnitSideSubCards } = getSong(songIndex)
    return withUnitSideSubCards[unitIndex] || null
}

export const getFormTypeForUnit = (songIndex, unitIndex) => {
    const { unitStanzaIndices } = getSong(songIndex),
        stanzaIndex = unitStanzaIndices[unitIndex]

    return stanzaIndex > -1 ?
        getFormTypeForStanza(songIndex, stanzaIndex) :
        null
}

export const getFormTypeIndexForUnit = (songIndex, unitIndex) => {
    const { unitFormTypeIndices } = getSong(songIndex)
    return unitFormTypeIndices[unitIndex]
}

export const getSubCardTypeForUnit = (songIndex, unitIndex) => {
    const { withUnitSubCardTypes } = getSong(songIndex)
    return withUnitSubCardTypes[unitIndex] || null
}

export const getSideCardTypeForUnit = (songIndex, unitIndex) => {
    const { withUnitSideCardTypes } = getSong(songIndex)
    return withUnitSideCardTypes[unitIndex] || null
}

export const getSideSubCardTypeForUnit = (songIndex, unitIndex) => {
    const { withUnitSideSubCardTypes } = getSong(songIndex)
    return withUnitSideSubCardTypes[unitIndex] || null
}

export const getSubsequentForUnit = (songIndex, unitIndex) => {
    const { unitSubsequents } = getSong(songIndex)
    return unitSubsequents[unitIndex]
}

export const getVerseIndicesForUnit = (songIndex, unitIndex) => {
    const { unitVerseIndicesList } = getSong(songIndex)
    return unitVerseIndicesList[unitIndex]
}

export const getIsSideCardOnBottomForUnit = (songIndex, unitIndex) => {
    const { withUnitBottomSideCard } = getSong(songIndex)
    return Boolean(withUnitBottomSideCard) && withUnitBottomSideCard[unitIndex]
}
