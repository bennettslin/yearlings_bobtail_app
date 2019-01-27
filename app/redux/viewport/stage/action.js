import { getDefinedOnlyPayload } from '../../actionHelper'

import { STAGE_STORE } from '../../storeKeys'
import { STAGE_DEFAULTS } from '../../defaultStates'

export const updateStageStore = (payload = STAGE_DEFAULTS) => ({
    type: STAGE_STORE,
    payload: getDefinedOnlyPayload(payload)
})
