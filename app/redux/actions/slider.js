// Actions for slider state.

import { is } from './actionsHelper'

import { SLIDER_STORE } from '../../constants/state'
import { SLIDER_DEFAULTS } from '../defaultConstants'

export const updateSliderStore = ({
    isSliderMoving,
    isSliderTouched,
    sliderLeft,
    sliderRatio,
    sliderWidth,
    sliderVerseIndex

} = SLIDER_DEFAULTS) => {

    return {
        type: SLIDER_STORE,
        payload: {
            ...is(isSliderMoving) && { isSliderMoving },
            ...is(isSliderTouched) && { isSliderTouched },
            ...is(sliderLeft) && { sliderLeft },
            ...is(sliderRatio) && { sliderRatio },
            ...is(sliderWidth) && { sliderWidth },
            ...is(sliderVerseIndex) && { sliderVerseIndex }
        }
    }
}
