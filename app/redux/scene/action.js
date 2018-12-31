// Actions for event values.
import {
    hasKey,
    getDefinedOnlyPayload
} from '../actionHelper'

import { getCubesForKey } from 'scene/cubes'

import { SCENE_STORE } from '../storeKeys'
import {
    SCENE_DEFAULTS,
    SCENE_TRANSITION_DEFAULTS
} from '../defaultStates'

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

export const resetSceneForTransition = () => {
    return ({
        type: SCENE_STORE,
        payload: SCENE_TRANSITION_DEFAULTS
    })
}
