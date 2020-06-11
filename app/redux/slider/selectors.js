import { createSelector } from "reselect"
import { mapIsActivated } from "../activated/selectors"

export const mapSliderLeft = (
    { sliderStore: { sliderLeft } }
) => sliderLeft

export const mapSliderWidth = (
    { sliderStore: { sliderWidth } }
) => sliderWidth

export const mapIsSliderMoving = (
    { sliderStore: { isSliderMoving } }
) => isSliderMoving

export const mapIsSliderTouched = (
    { sliderStore: { isSliderTouched } }
) => isSliderTouched

export const mapSliderVerseIndex = (
    { sliderStore: { sliderVerseIndex } }
) => sliderVerseIndex

export const mapSliderSceneIndex = (
    { sliderStore: { sliderSceneIndex } }
) => sliderSceneIndex

export const mapSliderTime = (
    { sliderStore: { sliderTime } }
) => sliderTime

export const mapIsLyricsLocked = createSelector(
    mapIsActivated,
    mapIsSliderMoving,
    (
        isActivated,
        isSliderMoving
    ) => isActivated || isSliderMoving
)
