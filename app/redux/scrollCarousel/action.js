// Actions for scrolling carousel values.
import {
    hasKey,
    getDefinedOnlyPayload
} from '../../helpers/action'
import { SCROLL_CAROUSEL_STORE } from '../../constants/store'
import { SCROLL_CAROUSEL_DEFAULTS } from './default'

export const updateScrollCarouselStore = (payload = SCROLL_CAROUSEL_DEFAULTS) => {
    const { queuedScrollCarouselIndex } = payload

    if (hasKey(queuedScrollCarouselIndex)) {
        // If given carousel index is 0, scroll instead to 1.
        payload.queuedScrollCarouselIndex = queuedScrollCarouselIndex || 1
    }

    return {
        type: SCROLL_CAROUSEL_STORE,
        payload: getDefinedOnlyPayload(payload)
    }
}
