import {
    INITIAL_SONG_INDEX,
    INITIAL_VERSE_INDEX,
    INITIAL_ANNOTATION_INDEX,
    INITIAL_SCENE_INDEX,
    IS_INITIAL_LOGUE,
    INITIAL_TIME,
    INITIAL_EAR_COLUMN_INDEX
} from '../../constants/storage'

const SELECTED_TRANSITION_DEFAULTS = {
    isSongSelectInFlux: false
}

export const SELECTED_DEFAULTS = {
    ...SELECTED_TRANSITION_DEFAULTS,
    selectedSongIndex: INITIAL_SONG_INDEX,
    selectedVerseIndex: INITIAL_VERSE_INDEX,
    selectedAnnotationIndex: INITIAL_ANNOTATION_INDEX,
    selectedSceneIndex: INITIAL_SCENE_INDEX,
    isSelectedLogue: IS_INITIAL_LOGUE,
    selectedTime: INITIAL_TIME,
    earColumnIndex: INITIAL_EAR_COLUMN_INDEX || 0
}
