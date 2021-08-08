// Reducers for viewport size.
import { VIEWPORT_STORE } from '../../constants/store'
import { getViewportStore } from '../../helpers/resize/store'

export const getViewportReducer = ({
    windowHeight,
    windowWidth,
    isPromoPage,
}) => (
    state = getViewportStore({
        windowHeight,
        windowWidth,
        isPromoPage,
    }),
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
