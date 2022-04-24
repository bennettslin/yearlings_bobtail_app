import { createSelector } from 'reselect'
import {
    getSongIsPrologue,
    getSongIsEpilogue,
} from '../../endpoint/album/songs'
import { getSceneIndexForVerse } from '../../endpoint/album/verses'
import { getBeforeOnOrAfter } from '../../helpers/cursor'
import { SELECTED_STORE } from '../../constants/store'

export const mapSelectedSongIndex = (
    { [SELECTED_STORE]: { selectedSongIndex } },
) => selectedSongIndex

export const getMapIsSongSelected = songIndex => createSelector(
    mapSelectedSongIndex,
    selectedSongIndex => songIndex === selectedSongIndex,
)

export const mapIsSelectedLogue = (
    { [SELECTED_STORE]: { isSelectedLogue } },
) => isSelectedLogue

export const mapSelectedVerseIndex = (
    { [SELECTED_STORE]: { selectedVerseIndex } },
) => selectedVerseIndex

export const getMapIsVerseSelected = verseIndex => createSelector(
    mapSelectedVerseIndex,
    selectedVerseIndex => verseIndex === selectedVerseIndex,
)

export const getMapVerseSelectedStatus = verseIndex => createSelector(
    mapSelectedVerseIndex,
    selectedVerseIndex => getBeforeOnOrAfter(
        selectedVerseIndex,
        verseIndex,
    ),
)

export const mapSelectedAnnotationIndex = (
    { [SELECTED_STORE]: { selectedAnnotationIndex } },
) => selectedAnnotationIndex

export const mapIsAnnotationShown = (
    { [SELECTED_STORE]: { selectedAnnotationIndex } },
) => Boolean(selectedAnnotationIndex)

export const mapSelectedSceneIndex = createSelector(
    mapSelectedSongIndex,
    mapSelectedVerseIndex,
    (
        selectedSongIndex,
        selectedVerseIndex,
    ) => getSceneIndexForVerse(
        selectedSongIndex,
        selectedVerseIndex,
    ),
)

export const getMapIsSceneSelected = sceneIndex => createSelector(
    mapSelectedSceneIndex,
    selectedSceneIndex => sceneIndex === selectedSceneIndex,
)

export const mapIsSelectedPrologue = createSelector(
    mapSelectedSongIndex,
    selectedSongIndex => getSongIsPrologue(selectedSongIndex),
)

export const mapIsSelectedEpilogue = createSelector(
    mapSelectedSongIndex,
    selectedSongIndex => getSongIsEpilogue(selectedSongIndex),
)

export const mapDoBrowserBypassNavigation = (
    { [SELECTED_STORE]: { doBrowserBypassNavigation } },
) => doBrowserBypassNavigation
