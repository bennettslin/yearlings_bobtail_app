import { getColumnIndexForAnnotation } from '../../api/album/annotations'
import { getSongIsLogue } from '../../api/album/songs'
import { getStartTimeForVerse } from '../../api/album/time'
import { getSceneIndexForVerse } from '../../api/album/verses'
import { getInitialIndicesFromRoutingOrStorage } from '../../helpers/storage'

export const [
    INITIAL_SONG_INDEX,
    INITIAL_VERSE_INDEX,
    INITIAL_ANNOTATION_INDEX
] = getInitialIndicesFromRoutingOrStorage()

export const IS_INITIAL_LOGUE = getSongIsLogue(INITIAL_SONG_INDEX)

export const INITIAL_SCENE_INDEX = getSceneIndexForVerse(
    INITIAL_SONG_INDEX,
    INITIAL_VERSE_INDEX
)

const INITIAL_TIME = getStartTimeForVerse(
    INITIAL_SONG_INDEX,
    INITIAL_VERSE_INDEX
)

const INITIAL_EAR_COLUMN_INDEX = getColumnIndexForAnnotation(
    INITIAL_SONG_INDEX,
    INITIAL_ANNOTATION_INDEX
)

export const SELECTED_DEFAULTS = {
    selectedSongIndex: INITIAL_SONG_INDEX,
    selectedVerseIndex: INITIAL_VERSE_INDEX,
    selectedAnnotationIndex: INITIAL_ANNOTATION_INDEX,
    selectedSceneIndex: INITIAL_SCENE_INDEX,
    isSelectedLogue: IS_INITIAL_LOGUE,
    selectedTime: INITIAL_TIME,
    earColumnIndex: INITIAL_EAR_COLUMN_INDEX || 0
}
