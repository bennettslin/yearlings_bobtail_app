// Reducers for viewport size.
import { VIEWPORT_STORE } from '../../constants/store'
import { getViewportStore } from '../../helpers/resize/store'

export const getViewportReducer = ({
    windowHeight,
    windowWidth,
    isMarketingPage,
}) => (
    state = getViewportStore({
        windowHeight,
        windowWidth,
        isMarketingPage,
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
