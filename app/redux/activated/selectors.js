import { createSelector } from "reselect"

// TODO: Only need activated verse index. The rest can just be createSelectors.
export const mapIsActivated = (
    { activatedStore: { isActivated } }
) => isActivated

export const mapActivatedVerseIndex = (
    { activatedStore: { activatedVerseIndex } }
) => activatedVerseIndex

export const getMapIsVerseActivated = verseIndex => createSelector(
    mapActivatedVerseIndex,
    activatedVerseIndex => verseIndex === activatedVerseIndex
)

export const mapActivatedSceneIndex = (
    { activatedStore: { activatedSceneIndex } }
) => activatedSceneIndex

export const mapActivatedTime = (
    { activatedStore: { activatedTime } }
) => activatedTime
