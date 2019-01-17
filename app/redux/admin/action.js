// Actions for admin values.
import { getDefinedOnlyPayload } from '../actionHelper'

import { ADMIN_STORE } from '../storeKeys'
import { ADMIN_DEFAULTS } from '../defaultStates'

export const updateAdminStore = (payload = ADMIN_DEFAULTS) => ({
    type: ADMIN_STORE,
    payload: getDefinedOnlyPayload(payload)
})
