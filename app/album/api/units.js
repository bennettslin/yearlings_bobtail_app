import { getSong } from './songs'
import { getFormTypeForStanza } from './stanzas'

export const getLastUnitDotCardIndex = songIndex => {
    const { lastUnitDotIndex } = getSong(songIndex)
    return lastUnitDotIndex || -1
}

export const getDotForUnit = (songIndex, unitIndex) => {
    const { withUnitDots } = getSong(songIndex)
    return withUnitDots[unitIndex] || null
}

export const getSideCardForUnit = (songIndex, unitIndex) => {
    const { withUnitSideCards } = getSong(songIndex)
    return Boolean(withUnitSideCards) && withUnitSideCards[unitIndex]
}

export const getSideSubCardForUnit = (songIndex, unitIndex) => {
    const { withUnitSideSubCards } = getSong(songIndex)
    return Boolean(withUnitSideSubCards) && withUnitSideSubCards[unitIndex]
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

export const getSubVerseTypeForUnit = (songIndex, unitIndex) => {
    const { withUnitSubVerseTypes } = getSong(songIndex)
    return Boolean(withUnitSubVerseTypes) && withUnitSubVerseTypes[unitIndex]
}

export const getSideCardTypeForUnit = (songIndex, unitIndex) => {
    const { withUnitSideCardTypes } = getSong(songIndex)
    return Boolean(withUnitSideCardTypes) && withUnitSideCardTypes[unitIndex]
}

export const getSideSubCardTypeForUnit = (songIndex, unitIndex) => {
    const { withUnitSideSubCardTypes } = getSong(songIndex)
    return Boolean(withUnitSideSubCardTypes) && withUnitSideSubCardTypes[unitIndex]
}

export const getSubsequentForUnit = (songIndex, unitIndex) => {
    const { unitSubsequents } = getSong(songIndex)
    return unitSubsequents[unitIndex]
}

export const getVerseIndicesForUnit = (songIndex, unitIndex) => {
    const { unitVerseIndicesList } = getSong(songIndex)
    return unitVerseIndicesList[unitIndex] || []
}

export const getSubVerseIndicesForUnit = (songIndex, unitIndex) => {
    const { withUnitSubVerseIndices } = getSong(songIndex)
    return withUnitSubVerseIndices[unitIndex] || []
}

export const getMainVerseIndicesForUnit = (songIndex, unitIndex) => {
    const
        unitVerseIndices = getVerseIndicesForUnit(songIndex, unitIndex),
        subVerseIndices = getSubVerseIndicesForUnit(songIndex, unitIndex)

    return subVerseIndices ?
        unitVerseIndices.filter(verseIndex => (
            // If this verse index is in the sub verse, it's not a main verse.
            !subVerseIndices.some(subVerseIndex => subVerseIndex === verseIndex)
        )) :
        unitVerseIndices
}

export const getIsSideCardOnBottomForUnit = (songIndex, unitIndex) => {
    const { withUnitBottomSideCard } = getSong(songIndex)
    return Boolean(withUnitBottomSideCard) && withUnitBottomSideCard[unitIndex]
}
