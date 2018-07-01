// Reducers for slider state.
import { IS_SLIDER_MOVING,
         IS_SLIDER_TOUCHED,
         SLIDER_LEFT,
         SLIDER_RATIO,
         SLIDER_WIDTH,
         SLIDER_VERSE_INDEX } from '../../constants/state'

export const IsSliderMovingReducer = (state = false, action) => {
    switch (action.type) {
        case IS_SLIDER_MOVING:
            return action.payload
        default:
            return state
    }
}

export const IsSliderTouchedReducer = (state = false, action) => {
    switch (action.type) {
        case IS_SLIDER_TOUCHED:
            return action.payload
        default:
            return state
    }
}

export const SliderLeftReducer = (state = 0, action) => {
    switch (action.type) {
        case SLIDER_LEFT:
            return action.payload
        default:
            return state
    }
}

export const SliderRatioReducer = (state = 0, action) => {
    switch (action.type) {
        case SLIDER_RATIO:
            return action.payload
        default:
            return state
    }
}

export const SliderWidthReducer = (state = 0, action) => {
    switch (action.type) {
        case SLIDER_WIDTH:
            return action.payload
        default:
            return state
    }
}

export const SliderVerseIndexReducer = (state = -1, action) => {
    switch (action.type) {
        case SLIDER_VERSE_INDEX:
            return action.payload
        default:
            return state
    }
}
