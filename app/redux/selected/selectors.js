export const SELECTED_SONG_INDEX_SELECTOR = (
    { selectedStore: { selectedSongIndex } }
) => selectedSongIndex

export const SELECTED_VERSE_INDEX_SELECTOR = (
    { selectedStore: { selectedVerseIndex } }
) => selectedVerseIndex

export const SELECTED_ANNOTATION_INDEX_SELECTOR = (
    { selectedStore: { selectedAnnotationIndex } }
) => selectedAnnotationIndex

export const SELECTED_SCENE_INDEX_SELECTOR = (
    { selectedStore: { selectedSceneIndex } }
) => selectedSceneIndex

export const IS_SELECTED_LOGUE_SELECTOR = (
    { selectedStore: { isSelectedLogue } }
) => isSelectedLogue

export const SELECTED_TIME_SELECTOR = (
    { selectedStore: { selectedTime } }
) => selectedTime

export const EAR_COLUMN_INDEX_SELECTOR = (
    { selectedStore: { earColumnIndex } }
) => earColumnIndex

// import {
//     SELECTED_SONG_INDEX_SELECTOR,
//     SELECTED_VERSE_INDEX_SELECTOR,
//     SELECTED_ANNOTATION_INDEX_SELECTOR,
//     IS_SELECTED_LOGUE_SELECTOR
// } from '../../../redux/selected/selectors'

// selectedSongIndex = SELECTED_SONG_INDEX_SELECTOR(state),
// selectedVerseIndex = SELECTED_VERSE_INDEX_SELECTOR(state),
// selectedAnnotationIndex = SELECTED_ANNOTATION_INDEX_SELECTOR(state),
// isSelectedLogue = IS_SELECTED_LOGUE_SELECTOR(state)

// import { SELECTED_SONG_INDEX_SELECTOR } from '../../../redux/selected/selectors'
// selectedSongIndex = SELECTED_SONG_INDEX_SELECTOR(state)

// import { SELECTED_VERSE_INDEX_SELECTOR } from '../../../redux/selected/selectors'
// selectedVerseIndex = SELECTED_VERSE_INDEX_SELECTOR(state)

// import { SELECTED_ANNOTATION_INDEX_SELECTOR } from '../../../redux/selected/selectors'
// selectedAnnotationIndex = SELECTED_ANNOTATION_INDEX_SELECTOR(state)

// import { IS_SELECTED_LOGUE_SELECTOR } from '../../../redux/selected/selectors'
// isSelectedLogue = IS_SELECTED_LOGUE_SELECTOR(state)
