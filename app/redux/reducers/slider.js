// Reducers for slider state.
import { SLIDER_STORE } from 'constants/state'
import { SLIDER_DEFAULTS } from '../defaultStates'

export const SliderStoreReducer = (
    state = SLIDER_DEFAULTS,
    action
) => {
    switch (action.type) {
        case SLIDER_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
