// Reducers for state based on window size.
import { IS_CAROUSEL_EXPANDABLE,
         IS_HIDDEN_NAV } from '../../constants/state'

export const IsCarouselExpandableReducer = (state = false, action) => {
    switch (action.type) {
        case IS_CAROUSEL_EXPANDABLE:
            return action.payload
        default:
            return state
    }
}

export const IsHiddenNavReducer = (state = false, action) => {
    switch (action.type) {
        case IS_HIDDEN_NAV:
            return action.payload
        default:
            return state
    }
}
