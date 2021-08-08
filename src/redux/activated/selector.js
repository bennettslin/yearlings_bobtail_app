import { createSelector } from 'reselect'
import { getSceneIndexForVerse } from '../../endpoint/album/verses'
import { mapSelectedSongIndex } from '../selected/selector'
import { ACTIVATED_STORE } from '../../constants/store'

export const mapActivatedVerseIndex = (
    { [ACTIVATED_STORE]: { activatedVerseIndex } },
) => activatedVerseIndex

export const mapIsActivated = createSelector(
    mapActivatedVerseIndex,
    activatedVerseIndex => activatedVerseIndex > -1,
)

export const getMapIsVerseActivated = verseIndex => createSelector(
    mapActivatedVerseIndex,
    activatedVerseIndex => verseIndex === activatedVerseIndex,
)

export const mapActivatedSceneIndex = createSelector(
    mapSelectedSongIndex,
    mapActivatedVerseIndex,
    (
        selectedSongIndex,
        activatedVerseIndex,
    ) => getSceneIndexForVerse(
        selectedSongIndex,
        activatedVerseIndex,
    ),
)
