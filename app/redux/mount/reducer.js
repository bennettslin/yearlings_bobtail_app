// Reducers for whether to mount.
import { MOUNT_STORE } from '../../constants/store'
import { MOUNT_DEFAULTS } from './default'

export default (
    state = MOUNT_DEFAULTS,
    action
) => {
    switch (action.type) {
        case MOUNT_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
