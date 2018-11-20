// Actions for rendered state.
import { getDefinedOnlyPayload } from './helper'

import { RENDERED_STORE } from 'constants/state'
import { RENDERED_DEFAULTS } from '../defaultStates'

export const updateRenderedStore = (payload = RENDERED_DEFAULTS) => ({
    type: RENDERED_STORE,
    payload: getDefinedOnlyPayload(payload)
})
