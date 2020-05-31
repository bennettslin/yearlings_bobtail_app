import { getSong } from './songs'

export const getUnit = (songIndex, unitIndex) => {
    const { lyricUnits } = getSong(songIndex)

    return lyricUnits ?
        lyricUnits[unitIndex] :
        []
}

export const getLastUnitDotCardIndex = songIndex => {
    const { lastUnitDotIndex } = getSong(songIndex)
    return lastUnitDotIndex || -1
}

export const getFormTypeForUnit = (songIndex, unitIndex) => {
    const { unitFormTypeIndices } = getSong(songIndex)
    return unitFormTypeIndices[unitIndex]
}

export const getVerseIndicesForUnit = (songIndex, unitIndex) => {
    const { unitVerseIndicesList } = getSong(songIndex)
    return unitVerseIndicesList[unitIndex]
}
