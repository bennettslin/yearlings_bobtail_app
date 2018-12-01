// Actions for scrolling carousel values.
import { getDefinedOnlyPayload } from '../actionHelper'

import { SCROLL_CAROUSEL_STORE } from '../storeKeys'
import { SCROLL_CAROUSEL_DEFAULTS } from '../defaultStates'

export const updateScrollCarouselStore = (
    payload = SCROLL_CAROUSEL_DEFAULTS

) => {
    return ({
        type: SCROLL_CAROUSEL_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}
