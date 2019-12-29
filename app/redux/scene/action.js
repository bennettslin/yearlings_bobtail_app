// Actions for event values.
import {
    hasKey,
    getDefinedOnlyPayload
} from '../actionHelper'

import { getCubesForKey } from 'scene/arrangements/cubes'

import { SCENE_STORE } from '../storeKeys'
import { SCENE_DEFAULTS } from '../defaultStates'

export const updateSceneStore = (payload = SCENE_DEFAULTS) => {
    const { sceneCubesKey } = payload

    if (hasKey(sceneCubesKey)) {
        payload.sceneCubes = getCubesForKey(sceneCubesKey)
    }

    return ({
        type: SCENE_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}
