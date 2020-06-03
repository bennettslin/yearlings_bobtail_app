import {
    getMainVerseIndicesForUnit,
    getSubVerseIndicesForUnit,
    getSideCardForUnit,
    getSideSubCardForUnit,
    getFormTypeForUnit,
    getSubVerseTypeForUnit,
    getSideCardTypeForUnit,
    getSideSubCardTypeForUnit
} from '../../../api/album/units'
import { getParentOfVerseClassNamesForIndices } from '../../../helpers/stanza'

export const getParentOfVerseClassNamesForUnitCard = ({
    isIndexedVerse,
    isMainVerses,
    lyricSongIndex,
    unitIndex

}) => (
    isIndexedVerse && getParentOfVerseClassNamesForIndices(
        isMainVerses ?
            getMainVerseIndicesForUnit(lyricSongIndex, unitIndex) :
            getSubVerseIndicesForUnit(lyricSongIndex, unitIndex)
    )
)

export const getUnitFormType = ({
    songIndex,
    unitIndex,
    isMainVerses,
    isSubVerse,
    isSideCard,
    isSideSubCard

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
    isSideSubCard

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
    lyricSongIndex,
    unitIndex,
    isMainVerses,
    isSubVerse

}) => (
    Boolean(getSideCardForUnit(lyricSongIndex, unitIndex)) &&
    (isMainVerses || isSubVerse)
)
