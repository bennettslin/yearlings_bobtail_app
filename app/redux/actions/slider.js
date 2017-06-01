// Actions for slider state.
import { IS_SLIDER_MOVING,
         IS_SLIDER_TOUCHED,
         SLIDER_LEFT,
         SLIDER_RATIO,
         SLIDER_WIDTH,
         SLIDER_VERSE_ELEMENT,
         SLIDER_VERSE_INDEX } from '../../constants/state'

export const setIsSliderMoving = (isSliderMoving = false) => (
    { type: IS_SLIDER_MOVING,
      payload: isSliderMoving }
)

export const setIsSliderTouched = (isSliderTouched = false) => (
    { type: IS_SLIDER_TOUCHED,
      payload: isSliderTouched }
)

export const setSliderLeft = (sliderLeft = 0) => (
    { type: SLIDER_LEFT,
      payload: sliderLeft }
)

export const setSliderRatio = (sliderRatio = 0) => (
    { type: SLIDER_RATIO,
      payload: sliderRatio }
)

export const setSliderWidth = (sliderWidth = 0) => (
    { type: SLIDER_WIDTH,
      payload: sliderWidth }
)

export const setSliderVerseElement = (sliderVerseElement = null) => (
    { type: SLIDER_VERSE_ELEMENT,
      payload: sliderVerseElement }
)

export const setSliderVerseIndex = (sliderVerseIndex = -1) => (
    { type: SLIDER_VERSE_INDEX,
      payload: sliderVerseIndex }
)
