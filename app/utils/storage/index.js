// Helpers for getting and setting state persisted in user's local storage.
import { getValidSongIndex } from '../../api/album/songs'
import { getValidVerseIndex } from '../../api/album/verses'
import { getValidAnnotationIndex } from '../../api/album/annotations'
import { getValidPitchSegmentIndex } from '../../api/pitch/segments'
import { getArrayOfLength } from '../../helpers/general'
import { getWindow } from '../browser'
import {
    INITIAL_DOTS_BIT,
    FULL_DOTS_BIT,
} from '../../constants/dots'
import {
    SHOWN,
    AUDIO_OPTIONS,
    GENERAL_OPTIONS,
} from '../../constants/options'
import {
    PITCH_SEGMENT_INDEX,
    SELECTED_DOTS_BIT,
    SELECTED_SONG_INDEX,
    SELECTED_VERSE_INDEX,
    SELECTED_ANNOTATION_INDEX,
    AUDIO_OPTION_INDEX,
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
        _getParsedStoredInteger(SELECTED_VERSE_INDEX)
    )
)

export const getStoredAnnotationIndex = songIndex => (
    getValidAnnotationIndex(
        songIndex,
        _getParsedStoredInteger(SELECTED_ANNOTATION_INDEX)
    )
)

export const getAudioOptionFromStorage = () => {
    const
        storedOptionIndex =
            _getParsedStoredInteger(AUDIO_OPTION_INDEX),

        savedOptionIndex =
            getArrayOfLength(AUDIO_OPTIONS.length).some(
                index => index === storedOptionIndex
            ) ?
                storedOptionIndex :
                0

    // This only saves upon initial retrieval.
    setInStorage(AUDIO_OPTION_INDEX, savedOptionIndex)
    return savedOptionIndex
}

export const getOptionFromStorage = key => {
    const
        storedOption = getWindowStorage()[key],
        savedOption =
            GENERAL_OPTIONS.some(option => option === storedOption) ?
                storedOption :
                SHOWN

    // This only saves upon initial retrieval.
    setInStorage(key, savedOption)
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

export const getStoredPitchIndex = () => {
    const storedPitchSegmentIndex = getValidPitchSegmentIndex(
        _getParsedStoredInteger(PITCH_SEGMENT_INDEX)
    )

    return storedPitchSegmentIndex
}
