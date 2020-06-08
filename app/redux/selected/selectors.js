import { createSelector } from "reselect"
import {
    getSongIsPrologue,
    getSongIsEpilogue,
    getSongIsLogue
} from "../../api/album/songs"

export const mapSelectedSongIndex = (
    { selectedStore: { selectedSongIndex } }
) => selectedSongIndex

export const mapSelectedVerseIndex = (
    { selectedStore: { selectedVerseIndex } }
) => selectedVerseIndex

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
    { selectedStore: { selectedAnnotationIndex } }
) => selectedAnnotationIndex

export const mapIsAnnotationShown = (
    { selectedStore: { selectedAnnotationIndex } }
) => Boolean(selectedAnnotationIndex)

export const mapSelectedSceneIndex = (
    { selectedStore: { selectedSceneIndex } }
) => selectedSceneIndex

export const mapIsSelectedPrologue = createSelector(
    mapSelectedSongIndex,
    selectedSongIndex => getSongIsPrologue(selectedSongIndex)
)

export const mapIsSelectedEpilogue = createSelector(
    mapSelectedSongIndex,
    selectedSongIndex => getSongIsEpilogue(selectedSongIndex)
)

export const mapIsSelectedLogue = createSelector(
    mapSelectedSongIndex,
    selectedSongIndex => getSongIsLogue(selectedSongIndex)
)

export const mapSelectedTime = (
    { selectedStore: { selectedTime } }
) => selectedTime

export const mapEarColumnIndex = (
    { selectedStore: { earColumnIndex } }
) => earColumnIndex
