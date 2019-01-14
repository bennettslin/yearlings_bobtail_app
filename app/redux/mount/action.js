// Actions for whether to mount.
import { getDefinedOnlyPayload } from '../actionHelper'

import { MOUNT_STORE } from '../storeKeys'
import { MOUNT_DEFAULTS } from '../defaultStates'

export const updateMountStore = (payload = MOUNT_DEFAULTS) => ({
    type: MOUNT_STORE,
    payload: getDefinedOnlyPayload(payload)
})
