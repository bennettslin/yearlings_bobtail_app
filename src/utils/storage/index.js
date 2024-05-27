// Helpers for getting and setting state persisted in user's local storage.
import { getValidSongIndex } from '../../endpoint/album/songs'
import { getValidVerseIndex } from '../../endpoint/album/verses'
import { getValidAnnotationIndex } from '../../endpoint/album/annotations'
import { getWindow } from '../browser'
import { INITIAL_DOTS_BIT } from '../../helpers/dot'
import { FULL_DOTS_BIT } from '../../constants/dots'
import {
    SHOWN,
    HIDDEN,
    GENERAL_OPTIONS,
    VOLUME_DEFAULT,
    VOLUME_MIN,
    VOLUME_MAX,
} from '../../constants/options'
import {
    SELECTED_DOTS_BIT,
    SELECTED_SONG_INDEX,
    SELECTED_VERSE_INDEX,
    SELECTED_ANNOTATION_INDEX,
    VOLUME_INDEX,
} from '../../constants/store'

export const getWindowStorage = () => {
    return getWindow().localStorage
}

export const setInStorage = (key, value) => {
    getWindowStorage()[key] = value
}

export const getBoolFromStorage = key => {
    const
        storedValue = getWindowStorage()[key],
        savedValue = storedValue === 'true'

    // This only saves upon initial retrieval.
    setBoolInStorage(key, savedValue)
    return savedValue
}

export const setBoolInStorage = (key, value) => {
    getWindowStorage()[key] = value ? 'true' : 'false'
}

const _getParsedStoredInteger = key => (
    parseInt(getWindowStorage()[key])
)

export const getStoredSongIndex = () => (
    getValidSongIndex(_getParsedStoredInteger(SELECTED_SONG_INDEX))
)

export const getStoredVerseIndex = songIndex => (
    getValidVerseIndex(
        songIndex,
        _getParsedStoredInteger(SELECTED_VERSE_INDEX),
    )
)

export const getStoredAnnotationIndex = songIndex => (
    getValidAnnotationIndex(
        songIndex,
        _getParsedStoredInteger(SELECTED_ANNOTATION_INDEX),
    )
)

export const getStoredVolumeIndex = () => {
    const
        storedVolumeIndex = _getParsedStoredInteger(VOLUME_INDEX),
        savedVolumeIndex =
            Number.isFinite(storedVolumeIndex) &&
            storedVolumeIndex >= VOLUME_MIN &&
            storedVolumeIndex <= VOLUME_MAX ?
                storedVolumeIndex :
                VOLUME_DEFAULT

    // This only saves upon initial retrieval.
    setInStorage(VOLUME_INDEX, savedVolumeIndex)
    return savedVolumeIndex
}

export const getOptionFromStorage = ({
    key,
    initialAnnotationIndex,
}) => {
    const
        storedOption = getWindowStorage()[key],
        savedOption =
            GENERAL_OPTIONS.some(option => option === storedOption) ?
                storedOption :
                SHOWN,
        // If there is an initial annotation index, preemptively hide option.
        finalOption = initialAnnotationIndex && (savedOption === SHOWN) ?
            HIDDEN :
            savedOption

    // This only saves upon initial retrieval.
    setInStorage(key, finalOption)
    return savedOption
}

export const getDotsBitFromStorage = (initialAnnotationIndex) => {
    const storedDotsBit = _getParsedStoredInteger(SELECTED_DOTS_BIT)
    let savedDotsBit = INITIAL_DOTS_BIT

    // If there is an initial annotation index, preemptively select all dots.
    if (initialAnnotationIndex) {
        savedDotsBit = FULL_DOTS_BIT

    // Ensure stored dots bit number is valid.
    } else if (
        Number.isFinite(storedDotsBit) &&
        storedDotsBit >= 0 &&
        storedDotsBit <= FULL_DOTS_BIT
    ) {
        savedDotsBit = storedDotsBit
    }

    // This only saves upon initial retrieval.
    setInStorage(SELECTED_DOTS_BIT, savedDotsBit)
    return savedDotsBit
}
