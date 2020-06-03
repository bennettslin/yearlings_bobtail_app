// Actions for event values.
import {
    hasKey,
    getDefinedOnlyPayload
} from '../../helpers/action'
import { getCubesForKey } from '../../api/scene/cubes'
import { SCENE_STORE } from '../../constants/store'

export const updateSceneStore = payload => {
    const { sceneCubesKey } = payload

    if (hasKey(sceneCubesKey)) {
        payload.sceneCubesKeys = getCubesForKey(sceneCubesKey)
    }

    return ({
        type: SCENE_STORE,
        payload: getDefinedOnlyPayload(payload)
    })
}
