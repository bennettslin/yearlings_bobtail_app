// Reducers for viewport size.
import { VIEWPORT_STORE } from '../../constants/store'
import { getViewportStore } from '../../helpers/resize/store'

export const getViewportReducer = ({
    innerHeight,
    innerWidth,
}) => (
    state = getViewportStore(innerHeight, innerWidth),
    { type, payload },
) => {
    switch (type) {
        case VIEWPORT_STORE:
            return {
                ...state,
                ...payload,
            }
        default:
            return state
    }
}

export const getViewportPitchPageReducer = ({
    innerHeight,
    innerWidth,
}) => (
    state = getViewportStore(innerHeight, innerWidth, true),
    { type, payload },
) => {
    switch (type) {
        case VIEWPORT_STORE:
            return {
                ...state,
                ...payload,
            }
        default:
            return state
    }
}
