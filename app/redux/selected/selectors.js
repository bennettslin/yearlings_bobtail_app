import { createSelector } from 'reselect'
import {
    getSongIsPrologue,
    getSongIsEpilogue
} from '../../api/album/songs'
import { SELECTED_STORE } from '../../constants/store'

export const mapSelectedSongIndex = (
    { [SELECTED_STORE]: { selectedSongIndex } }
) => selectedSongIndex

export const getMapIsSongSelected = songIndex => createSelector(
    mapSelectedSongIndex,
    selectedSongIndex => songIndex === selectedSongIndex
)

export const mapIsSelectedLogue = (
    { [SELECTED_STORE]: { isSelectedLogue } }
) => isSelectedLogue

export const mapSelectedVerseIndex = (
    { [SELECTED_STORE]: { selectedVerseIndex } }
) => selectedVerseIndex

export const getMapIsVerseSelected = verseIndex => createSelector(
    mapSelectedVerseIndex,
    selectedVerseIndex => verseIndex === selectedVerseIndex
)

export const getMapVerseSelectedStatus = verseIndex => createSelector(
    mapSelectedVerseIndex,
    selectedVerseIndex => {
        if (verseIndex < selectedVerseIndex) {
            return -1
        } else if (verseIndex > selectedVerseIndex) {
            return 1
        } else {
            return 0
        }
    }
)

export const mapSelectedAnnotationIndex = (
    { [SELECTED_STORE]: { selectedAnnotationIndex } }
) => selectedAnnotationIndex

export const mapIsAnnotationShown = (
    { [SELECTED_STORE]: { selectedAnnotationIndex } }
) => Boolean(selectedAnnotationIndex)

export const mapSelectedSceneIndex = (
    { [SELECTED_STORE]: { selectedSceneIndex } }
) => selectedSceneIndex

export const mapIsSelectedPrologue = createSelector(
    mapSelectedSongIndex,
    selectedSongIndex => getSongIsPrologue(selectedSongIndex)
)

export const mapIsSelectedEpilogue = createSelector(
    mapSelectedSongIndex,
    selectedSongIndex => getSongIsEpilogue(selectedSongIndex)
)

export const mapSelectedTime = (
    { [SELECTED_STORE]: { selectedTime } }
) => selectedTime

// TODO: Move out of selected store.
export const mapEarColumnIndex = (
    { [SELECTED_STORE]: { earColumnIndex } }
) => earColumnIndex
