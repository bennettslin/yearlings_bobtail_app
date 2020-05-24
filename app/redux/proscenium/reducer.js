import { PROSCENIUM_STORE } from '../../constants/store'
import { PROSCENIUM_DEFAULTS } from './default'

export default (
    state = PROSCENIUM_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case PROSCENIUM_STORE:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}
