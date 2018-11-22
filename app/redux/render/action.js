// Actions for can render state.
import { getDefinedOnlyPayload } from '../actionHelper'

import { RENDER_STORE } from '../storeKeys'
import { RENDER_DEFAULTS } from '../defaultStates'

export const updateRenderStore = (payload = RENDER_DEFAULTS) => ({
    type: RENDER_STORE,
    payload: getDefinedOnlyPayload(payload)
})
