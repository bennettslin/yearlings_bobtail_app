import {
    STORED_SONG_INDEX,
    STORED_VERSE_INDEX,
    STORED_ANNOTATION_INDEX,
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
    selectedSongIndex: STORED_SONG_INDEX,
    selectedVerseIndex: STORED_VERSE_INDEX,
    selectedAnnotationIndex: STORED_ANNOTATION_INDEX,
    selectedSceneIndex: STORED_SCENE_INDEX,
    isRoutingComplete: false,
    isSelectedLogue: IS_STORED_LOGUE,
    selectedTime: STORED_TIME,
    earColumnIndex: STORED_EAR_COLUMN_INDEX || 0
}
