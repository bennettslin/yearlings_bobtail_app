import { createSelector } from 'reselect'
import { getStartTimeForVerse } from '../../api/album/time'
import { getSceneIndexForVerse } from '../../api/album/verses'
import { mapSelectedSongIndex } from '../selected/selector'
import { getFinalActivatedVerseIndex } from '../../helpers/queuedScroll'
import { ACTIVATED_STORE } from '../../constants/store'
import { mapQueuedScrollVerseIndex } from '../scrollLyric/selector'

/**
 * I'm not happy about having a raw and final value, but this allows the UI not
 * to show the activated verse when there is a queued scroll verse index,
 * without forcing a store update.
 */
const mapRawActivatedVerseIndex = (
    { [ACTIVATED_STORE]: { activatedVerseIndex: rawActivatedVerseIndex } }
) => rawActivatedVerseIndex

export const mapActivatedVerseIndex = createSelector(
    mapRawActivatedVerseIndex,
    mapQueuedScrollVerseIndex,
    (
        rawActivatedVerseIndex,
        queuedScrollVerseIndex
    ) => getFinalActivatedVerseIndex({
        rawActivatedVerseIndex,
        queuedScrollVerseIndex
    })
)

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

export const getMapIsSceneActivated = sceneIndex => createSelector(
    mapActivatedSceneIndex,
    activatedSceneIndex => sceneIndex === activatedSceneIndex
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
    )
)
