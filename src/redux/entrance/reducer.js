import { ENTRANCE_STORE } from '../../constants/store'
import { ENTRANCE_DEFAULTS } from './default'

export default (
    state = ENTRANCE_DEFAULTS,
    { type, payload },
) => {
    switch (type) {
        case ENTRANCE_STORE: {
            const
                newState = {
                    ...state,
                    ...payload,
                },
                {
                    didCurtainsClose,
                    didStageReset,
                    isSongSelectComplete,
                    didSceneExit,
                    isSceneScrollComplete,
                } = newState

            return {
                ...newState,
                ...(
                    // The conditions by which song change is done.
                    didCurtainsClose &&
                    didStageReset &&
                    isSongSelectComplete
                ) && {
                    isSongChangeDone: true,
                },
                ...(
                    // The conditions by which scene change is done.
                    didSceneExit &&
                    isSceneScrollComplete
                ) && {
                    isSceneChangeDone: true,
                },
            }
        }
        default:
            return state
    }
}
