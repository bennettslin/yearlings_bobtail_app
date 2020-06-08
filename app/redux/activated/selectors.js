import { createSelector } from "reselect"

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

// TODO: Only need activated verse index. The rest can just be createSelectors.
export const mapActivatedSceneIndex = (
    { activatedStore: { activatedSceneIndex } }
) => activatedSceneIndex

export const mapActivatedTime = (
    { activatedStore: { activatedTime } }
) => activatedTime
