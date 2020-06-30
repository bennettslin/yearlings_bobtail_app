import { ENTRANCE_STORE } from '../../constants/store'
import { ENTRANCE_DEFAULTS } from './default'

export default (
    state = ENTRANCE_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case ENTRANCE_STORE: {
            const
                newState = {
                    ...state,
                    ...payload
                },
                {
                    didCurtainsClose,
                    isSongSelectionComplete,
                    didSceneExit
                } = newState

            return {
                ...newState,
                // The conditions by which song change is done.
                ...didCurtainsClose && isSongSelectionComplete && {
                    isSongChangeDone: true
                },
                // The conditions by which scene change is done.
                ...didSceneExit && {
                    isSceneChangeDone: true
                }
            }
        }
        default:
            return state
    }
}
