export const IS_ACTIVATED_SELECTOR = (
    { activatedStore: { isActivated } }
) => isActivated

export const ACTIVATED_VERSE_INDEX_SELECTOR = (
    { activatedStore: { activatedVerseIndex } }
) => activatedVerseIndex

export const ACTIVATED_SCENE_INDEX_SELECTOR = (
    { activatedStore: { activatedSceneIndex } }
) => activatedSceneIndex

export const ACTIVATED_TIME_SELECTOR = (
    { activatedStore: { activatedTime } }
) => activatedTime
