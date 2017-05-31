// Reducers for state based on window size.
import { IS_CAROUSEL_EXPANDABLE } from '../../constants/state'

export const IsCarouselExpandableReducer = (state = false, action) => {
    switch (action.type) {
        case IS_CAROUSEL_EXPANDABLE:
            return action.payload
        default:
            return state
    }
}
