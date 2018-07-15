import {
    IS_SLIDER_MOVING,
    IS_SLIDER_TOUCHED,
    SLIDER_LEFT,
    SLIDER_RATIO,
    SLIDER_WIDTH,
    SLIDER_VERSE_INDEX
} from '../constants/state'

export const SLIDER_DEFAULTS = {
    [IS_SLIDER_MOVING]: false,
    [IS_SLIDER_TOUCHED]: false,
    [SLIDER_LEFT]: 0,
    [SLIDER_RATIO]: 0,
    [SLIDER_WIDTH]: 0,
    [SLIDER_VERSE_INDEX]: -1
}
