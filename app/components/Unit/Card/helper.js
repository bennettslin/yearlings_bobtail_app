import {
    getMainVerseIndicesForUnit,
    getSubCardForUnit,
    getSideCardForUnit,
    getSideSubCardForUnit,
    getFormTypeForUnit,
    getSubCardTypeForUnit,
    getSideCardTypeForUnit,
    getSideSubCardTypeForUnit
} from '../../../album/api/units'
import { getVerse } from '../../../album/api/verses'

export const getUnitFormType = ({
    songIndex,
    unitIndex,
    isMainVerses,
    isSubCard,
    isSideCard,
    isSideSubCard
}) => {
    if (isMainVerses) {
        return getFormTypeForUnit(songIndex, unitIndex)
    } else if (isSubCard) {
        return getSubCardTypeForUnit(songIndex, unitIndex)
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
    isSubCard,
    isSideCard,
    isSideSubCard

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
        if (isSubCard) {
            return getSubCardForUnit(songIndex, unitIndex)
        } else if (isSideCard) {
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
    isSubCard

}) => (
    Boolean(getSideCardForUnit(lyricSongIndex, unitIndex)) &&
    (isMainVerses || isSubCard)
)
