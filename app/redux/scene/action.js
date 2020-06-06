// Actions for event values.
import { getDefinedOnlyPayload } from '../../helpers/action'
import { SCENE_STORE } from '../../constants/store'

export const updateSceneStore = payload => ({
    type: SCENE_STORE,
    payload: getDefinedOnlyPayload(payload)
})
