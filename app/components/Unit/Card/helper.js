import {
    getMainVerseIndicesForUnit,
    getSubVerseIndicesForUnit,
    getSideCardForUnit,
    getSideSubCardForUnit,
    getFormTypeForUnit,
    getSubVerseTypeForUnit,
    getSideCardTypeForUnit,
    getSideSubCardTypeForUnit,
} from '../../../api/album/units'

export const getUnitFormType = ({
    songIndex,
    unitIndex,
    isMainVerses,
    isSubVerse,
    isSideCard,
    isSideSubCard,

}) => {
    if (isMainVerses) {
        return getFormTypeForUnit(songIndex, unitIndex)
    } else if (isSubVerse) {
        return getSubVerseTypeForUnit(songIndex, unitIndex)
    } else if (isSideCard) {
        return getSideCardTypeForUnit(songIndex, unitIndex)
    } else if (isSideSubCard) {
        return getSideSubCardTypeForUnit(songIndex, unitIndex)
    }
}

export const getUnitCardVerses = ({
    songIndex,
    unitIndex,
    isMainVerses,
    isSubVerse,
    isSideCard,
    isSideSubCard,

}) => {
    let unitCardVerses

    if (isMainVerses) {
        unitCardVerses = getMainVerseIndicesForUnit(songIndex, unitIndex)
    } else if (isSubVerse) {
        unitCardVerses = getSubVerseIndicesForUnit(songIndex, unitIndex)
    } else if (isSideCard) {
        unitCardVerses = getSideCardForUnit(songIndex, unitIndex)
    } else if (isSideSubCard) {
        unitCardVerses = getSideSubCardForUnit(songIndex, unitIndex)
    }

    return unitCardVerses && unitCardVerses.length ?
        unitCardVerses :
        null
}

export const getIsUnitTruncatable = ({
    songIndex,
    unitIndex,
    isMainVerses,
    isSubVerse,

}) => (
    Boolean(getSideCardForUnit(songIndex, unitIndex)) &&
    (isMainVerses || isSubVerse)
)
