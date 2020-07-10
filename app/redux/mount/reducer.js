import { MOUNT_STORE } from '../../constants/store'
import { MOUNT_DEFAULTS } from './default'

export default (
    state = MOUNT_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case MOUNT_STORE:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}
