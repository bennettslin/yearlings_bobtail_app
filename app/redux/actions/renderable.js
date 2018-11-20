// Actions for renderable state.
import { getDefinedOnlyPayload } from './helper'

import { RENDERABLE_STORE } from 'constants/state'
import { RENDERABLE_DEFAULTS } from '../defaultStates'

export const updateRenderableStore = (payload = RENDERABLE_DEFAULTS) => ({
    type: RENDERABLE_STORE,
    payload: getDefinedOnlyPayload(payload)
})
