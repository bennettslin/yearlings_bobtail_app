import {
    getMainVerseIndicesForUnit,
    getSubVerseIndicesForUnit,
    getSideCardForUnit,
    getSideSubCardForUnit,
    getFormTypeForUnit,
    getSubVerseTypeForUnit,
    getSideCardTypeForUnit,
    getSideSubCardTypeForUnit
} from '../../../album/api/units'
import { getVerse } from '../../../album/api/verses'

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

export const getUnitVerses = ({
    songIndex,
    unitIndex,
    isMainVerses,
    isSubVerse,
    isSideCard,
    isSideSubCard

}) => {
    if (isMainVerses || isSubVerse) {
        const verseIndices = isMainVerses ?
            getMainVerseIndicesForUnit(songIndex, unitIndex) :
            getSubVerseIndicesForUnit(songIndex, unitIndex)

        if (!verseIndices.length) {
            return null
        }
        return verseIndices.map(verseIndex => (
            getVerse(songIndex, verseIndex)
        ))
    } else {
        if (isSideCard) {
            return getSideCardForUnit(songIndex, unitIndex)
        } else if (isSideSubCard) {
            return getSideSubCardForUnit(songIndex, unitIndex)
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
