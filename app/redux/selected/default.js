import {
    INITIAL_SONG_INDEX,
    INITIAL_VERSE_INDEX,
    INITIAL_ANNOTATION_INDEX,
    STORED_SCENE_INDEX,
    IS_STORED_LOGUE,
    STORED_TIME,
    STORED_EAR_COLUMN_INDEX
} from '../../constants/storage'

const SELECTED_TRANSITION_DEFAULTS = {
    isSongSelectInFlux: false
}

export const SELECTED_DEFAULTS = {
    ...SELECTED_TRANSITION_DEFAULTS,
    selectedSongIndex: INITIAL_SONG_INDEX,
    selectedVerseIndex: INITIAL_VERSE_INDEX,
    selectedAnnotationIndex: INITIAL_ANNOTATION_INDEX,
    selectedSceneIndex: STORED_SCENE_INDEX,
    isSelectedLogue: IS_STORED_LOGUE,
    selectedTime: STORED_TIME,
    earColumnIndex: STORED_EAR_COLUMN_INDEX || 0
}
