// Reducers for event values.
import { SCENE_STORE } from '../../constants/store'
import { getSceneDefaults } from './default'

export const getSceneReducer = ({
    initialSongIndex,
    initialVerseIndex,
}) => (
    state = getSceneDefaults({
        initialSongIndex,
        initialVerseIndex,
    }),
    { type, payload },
) => {
    switch (type) {
        case SCENE_STORE:
            return {
                ...state,
                ...payload,
            }
        default:
            return state
    }
}
