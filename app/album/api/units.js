import { getSong } from './songs'

const getUnit = (songIndex, unitIndex) => {
    const { lyricUnits } = getSong(songIndex)

    return lyricUnits ?
        lyricUnits[unitIndex] :
        []
}

export const getDotForUnit = (songIndex, unitIndex) => {
    const unitMap = getUnitMapForUnit(songIndex, unitIndex)
    return unitMap.unitDot
}

export const getLastUnitDotCardIndex = songIndex => {
    const { lastUnitDotIndex } = getSong(songIndex)
    return lastUnitDotIndex || -1
}

// TODO: Put this at top level of song.
export const getUnitMapForUnit = (songIndex, unitIndex) => {
    const unit = getUnit(songIndex, unitIndex)
    return unit.unitMap
}

// TODO: Put this at top level of song
export const getMainVersesForUnit = (songIndex, unitIndex) => {
    const unit = getUnit(songIndex, unitIndex)
    return unit.mainVerses
}

export const getFormTypeForUnit = (songIndex, unitIndex) => {
    const { unitFormTypeIndices } = getSong(songIndex)
    return unitFormTypeIndices[unitIndex]
}

export const getVerseIndicesForUnit = (songIndex, unitIndex) => {
    const { unitVerseIndicesList } = getSong(songIndex)
    return unitVerseIndicesList[unitIndex]
}
