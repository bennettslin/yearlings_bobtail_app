import { createSelector } from 'reselect'
import { mapIsActivated } from '../activated/selectors'
import { SLIDER_STORE } from '../../constants/store'

export const mapSliderLeft = (
    { [SLIDER_STORE]: { sliderLeft } }
) => sliderLeft

export const mapSliderWidth = (
    { [SLIDER_STORE]: { sliderWidth } }
) => sliderWidth

export const mapIsSliderMoving = (
    { [SLIDER_STORE]: { isSliderMoving } }
) => isSliderMoving

export const mapIsSliderTouched = (
    { [SLIDER_STORE]: { isSliderTouched } }
) => isSliderTouched

export const mapSliderVerseIndex = (
    { [SLIDER_STORE]: { sliderVerseIndex } }
) => sliderVerseIndex

export const mapSliderSceneIndex = (
    { [SLIDER_STORE]: { sliderSceneIndex } }
) => sliderSceneIndex

export const getMapIsSceneSlid = sceneIndex => createSelector(
    mapSliderSceneIndex,
    sliderSceneIndex => sceneIndex === sliderSceneIndex
)

export const mapSliderTime = (
    { [SLIDER_STORE]: { sliderTime } }
) => sliderTime

export const mapIsLyricsLocked = createSelector(
    mapIsActivated,
    mapIsSliderMoving,
    (
        isActivated,
        isSliderMoving
    ) => isActivated || isSliderMoving
)
