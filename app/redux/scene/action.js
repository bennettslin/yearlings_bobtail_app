// Actions for event values.
import { getDefinedOnlyPayload } from '../actionHelper'

import { SCENE_STORE } from '../storeKeys'
import { SCENE_DEFAULTS } from '../defaultStates'

export const updateSceneStore = (payload = SCENE_DEFAULTS) => {

    return ({
        type: SCENE_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}
