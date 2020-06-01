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

export const getSubVerseForUnit = (songIndex, unitIndex) => {
    const { withUnitSubVerses } = getSong(songIndex)
    return Boolean(withUnitSubVerses) && withUnitSubVerses[unitIndex]
}

export const getSideCardForUnit = (songIndex, unitIndex) => {
    const { withUnitSideCards } = getSong(songIndex)
    return Boolean(withUnitSideCards) && withUnitSideCards[unitIndex]
}

export const getSideSubVerseForUnit = (songIndex, unitIndex) => {
    const { withUnitSideSubVerses } = getSong(songIndex)
    return Boolean(withUnitSideSubVerses) && withUnitSideSubVerses[unitIndex]
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

export const getSideSubVerseTypeForUnit = (songIndex, unitIndex) => {
    const { withUnitSideSubVerseTypes } = getSong(songIndex)
    return Boolean(withUnitSideSubVerseTypes) && withUnitSideSubVerseTypes[unitIndex]
}

export const getSubsequentForUnit = (songIndex, unitIndex) => {
    const { unitSubsequents } = getSong(songIndex)
    return unitSubsequents[unitIndex]
}

export const getVerseIndicesForUnit = (songIndex, unitIndex) => {
    const { unitVerseIndicesList } = getSong(songIndex)
    return unitVerseIndicesList[unitIndex] || []
}

export const getMainVerseIndicesForUnit = (songIndex, unitIndex) => {
    const
        unitVerseIndices = getVerseIndicesForUnit(songIndex, unitIndex),
        subVerse = getSubVerseForUnit(songIndex, unitIndex)

    return subVerse ?
        unitVerseIndices.filter(verseIndex => (
            // If this verse index is in the sub verse, it's not a main verse.
            !subVerse.some(verse => verse.verseIndex === verseIndex)
        )) :
        unitVerseIndices
}

export const getIsSideCardOnBottomForUnit = (songIndex, unitIndex) => {
    const { withUnitBottomSideCard } = getSong(songIndex)
    return Boolean(withUnitBottomSideCard) && withUnitBottomSideCard[unitIndex]
}
