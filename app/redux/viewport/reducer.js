// Reducers for viewport size.
import {
    VIEWPORT_STORE,
    PROSCENIUM_STORE,
    STAGE_STORE,
    THEATRE_STORE
} from '../../constants/store'
import { VIEWPORT_DEFAULTS } from './default'

import ProsceniumReducer from './proscenium/reducer'
import StageReducer from './stage/reducer'
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
        case STAGE_STORE:
            return {
                ...state,
                [STAGE_STORE]: StageReducer(
                    state[STAGE_STORE],
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
