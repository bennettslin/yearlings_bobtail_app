import { PROSCENIUM_STORE } from '../../storeKeys'
import { PROSCENIUM_DEFAULTS } from '../../defaultStates'

export default (
    state = PROSCENIUM_DEFAULTS,
    action
) => {
    switch (action.type) {
        case PROSCENIUM_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
