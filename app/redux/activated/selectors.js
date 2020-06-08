import { createSelector } from "reselect"
import { getStartTimeForVerse } from '../../api/album/time'
import { getSceneIndexForVerse } from '../../api/album/verses'
import { mapSelectedSongIndex } from "../selected/selectors"

export const mapActivatedVerseIndex = (
    { activatedStore: { activatedVerseIndex } }
) => activatedVerseIndex

export const mapIsActivated = createSelector(
    mapActivatedVerseIndex,
    activatedVerseIndex => activatedVerseIndex > -1
)

export const getMapIsVerseActivated = verseIndex => createSelector(
    mapActivatedVerseIndex,
    activatedVerseIndex => verseIndex === activatedVerseIndex
)

export const mapActivatedSceneIndex = createSelector(
    mapSelectedSongIndex,
    mapActivatedVerseIndex,
    (
        selectedSongIndex,
        activatedVerseIndex
    ) => getSceneIndexForVerse(
        selectedSongIndex,
        activatedVerseIndex
    ) || -1
)

export const mapActivatedTime = createSelector(
    mapSelectedSongIndex,
    mapActivatedVerseIndex,
    (
        selectedSongIndex,
        activatedVerseIndex
    ) => getStartTimeForVerse(
        selectedSongIndex,
        activatedVerseIndex
    ) || 0
)
