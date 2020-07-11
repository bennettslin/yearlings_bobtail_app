// Reducers for event values.
import { SCENE_STORE } from '../../constants/store'
import { SCENE_DEFAULTS, getSceneDefaults } from './default'

export default (
    state = SCENE_DEFAULTS,
    { type, payload }
) => {
    switch (type) {
        case SCENE_STORE:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}

/** */

export const getSceneReducer = songIndex => (
    state = getSceneDefaults(songIndex),
    { type, payload }
) => {
    switch (type) {
        case SCENE_STORE:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}
