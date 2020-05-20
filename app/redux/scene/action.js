// Actions for event values.
import {
    hasKey,
    getDefinedOnlyPayload
} from '../actionHelper'

import { getCubesForKey } from '../../scene/aggregators/cubes'

import { SCENE_STORE } from '../../constants/store/keys'
import { SCENE_DEFAULTS } from '../defaultStates'

export const updateSceneStore = (payload = SCENE_DEFAULTS) => {
    const { sceneCubesKey } = payload

    if (hasKey(sceneCubesKey)) {
        payload.sceneCubesKeys = getCubesForKey(sceneCubesKey)
    }

    return ({
        type: SCENE_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}
