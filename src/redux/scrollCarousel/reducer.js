// Reducers for scrolling carousel values.
import { SCROLL_CAROUSEL_STORE } from '../../constants/store'
import { SCROLL_CAROUSEL_DEFAULTS } from './default'
import { hasKey } from '../../helpers/action'

export default (
    state = SCROLL_CAROUSEL_DEFAULTS,
    { type, payload },
) => {
    switch (type) {
        case SCROLL_CAROUSEL_STORE: {
            const { scrollCarouselIndex } = payload
            return {
                ...state,
                ...payload,
                // If index is 0, scroll to 1.
                ...hasKey(scrollCarouselIndex) && !scrollCarouselIndex && {
                    scrollCarouselIndex: 1,
                },
            }
        }
        default:
            return state
    }
}
