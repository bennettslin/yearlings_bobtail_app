// Reducers for viewport size.
import {
    VIEWPORT_STORE,
    PROSCENIUM_STORE,
    THEATRE_STORE
} from '../storeKeys'
import { VIEWPORT_DEFAULTS } from '../defaultStates'

import ProsceniumReducer from './proscenium/reducer'
import TheatreReducer from './theatre/reducer'

export default (
    state = VIEWPORT_DEFAULTS,
    action
) => {
    switch (action.type) {
        case VIEWPORT_STORE:
            return {
                ...state,
                ...action.payload
            }
        case PROSCENIUM_STORE:
            return {
                ...state,
                [PROSCENIUM_STORE]: ProsceniumReducer(
                    state[PROSCENIUM_STORE],
                    action
                )
            }
        case THEATRE_STORE:
            return {
                ...state,
                [THEATRE_STORE]: TheatreReducer(
                    state[THEATRE_STORE],
                    action
                )
            }
        default:
            return state
    }
}
