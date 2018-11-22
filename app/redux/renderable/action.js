// Actions for renderable state.
import { getDefinedOnlyPayload } from '../actionHelper'

import { RENDERABLE_STORE } from '../storeKeys'
import { RENDERABLE_DEFAULTS } from '../defaultStates'

export const updateRenderableStore = (payload = RENDERABLE_DEFAULTS) => ({
    type: RENDERABLE_STORE,
    payload: getDefinedOnlyPayload(payload)
})
