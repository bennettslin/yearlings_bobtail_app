import {
    getMainVerseIndicesForUnit,
    getSubVerseForUnit,
    getSideCardForUnit,
    getSideSubVerseForUnit,
    getFormTypeForUnit,
    getSubVerseTypeForUnit,
    getSideCardTypeForUnit,
    getSideSubVerseTypeForUnit
} from '../../../album/api/units'
import { getVerse } from '../../../album/api/verses'

export const getUnitFormType = ({
    songIndex,
    unitIndex,
    isMainVerses,
    isSubVerse,
    isSideCard,
    isSideSubVerse
}) => {
    if (isMainVerses) {
        return getFormTypeForUnit(songIndex, unitIndex)
    } else if (isSubVerse) {
        return getSubVerseTypeForUnit(songIndex, unitIndex)
    } else if (isSideCard) {
        return getSideCardTypeForUnit(songIndex, unitIndex)
    } else if (isSideSubVerse) {
        return getSideSubVerseTypeForUnit(songIndex, unitIndex)
    }
}

export const getUnitVerses = ({
    songIndex,
    unitIndex,
    isMainVerses,
    isSubVerse,
    isSideCard,
    isSideSubVerse

}) => {
    if (isMainVerses) {
        const verseIndices = getMainVerseIndicesForUnit(songIndex, unitIndex)
        if (!verseIndices.length) {
            return null
        }
        return verseIndices.map(verseIndex => (
            getVerse(songIndex, verseIndex)
        ))
    } else {
        if (isSubVerse) {
            return getSubVerseForUnit(songIndex, unitIndex)
        } else if (isSideCard) {
            return getSideCardForUnit(songIndex, unitIndex)
        } else if (isSideSubVerse) {
            return getSideSubVerseForUnit(songIndex, unitIndex)
        }
    }

    return null
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
