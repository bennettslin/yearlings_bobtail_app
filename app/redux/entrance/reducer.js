import { hasKey } from '../../helpers/action'
import {
    ENTRANCE_STORE,
    SELECTED_STORE
} from '../../constants/store'
import {
    getSongChangeDefaults,
    getSceneChangeDefaults,
    ENTRANCE_DEFAULTS
} from './default'

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
                ...didCurtainsClose && isSongSelectionComplete && {
                    isSongChangeDone: true
                },
                ...didSceneExit && {
                    isSceneChangeDone: true
                }
            }
        }
        case SELECTED_STORE: {
            const
                {
                    selectedSongIndex,
                    selectedSceneIndex
                } = payload,
                {
                    isSongChangeDone,
                    isSceneChangeDone
                } = state

            return {
                ...state,

                // Begin song change.
                ...hasKey(selectedSongIndex) && isSongChangeDone &&
                    getSongChangeDefaults(false),

                // Begin scene change.
                ...(
                    hasKey(selectedSongIndex) ||
                    hasKey(selectedSceneIndex)
                ) && isSongChangeDone && isSceneChangeDone &&
                    getSceneChangeDefaults(false)
            }
        }
        default:
            return state
    }
}
