// Actions for rendered state.
import { getSongIsLogue } from '../../helpers/dataHelper'

import {
    hasKey,
    getDefinedOnlyPayload
} from './helper'

import { RENDERED_STORE } from 'constants/state'
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
