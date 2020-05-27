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
