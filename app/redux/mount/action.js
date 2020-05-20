// Actions for whether to mount.
import { getDefinedOnlyPayload } from '../../helpers/action'
import { MOUNT_STORE } from '../../constants/store'

export const updateMountStore = (payload) => ({
    type: MOUNT_STORE,
    payload: getDefinedOnlyPayload(payload)
})
