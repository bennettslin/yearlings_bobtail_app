// Actions for rendered state.
import { getSongIsLogue } from '../../helpers/data'

import {
    hasKey,
    getDefinedOnlyPayload
} from '../actionHelper'

import { RENDERED_STORE } from '../storeKeys'
import { RENDERED_DEFAULTS } from '../defaultStates'

export const updateRenderedStore = (payload = RENDERED_DEFAULTS) => {
    const {
        renderedSongIndex
    } = payload

    if (hasKey(renderedSongIndex)) {
        payload.isRenderedLogue = getSongIsLogue(renderedSongIndex)
    }

    return ({
        type: RENDERED_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}
