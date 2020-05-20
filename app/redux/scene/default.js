import { getCubesForKey } from '../../scene/aggregators/cubes'
import {
    getCubesKeyForScene,
    getLayersForScene,
    getSkyTimeForScene,
    getSkySeasonForScene
} from '../../album/api/scenes'

import {
    STORED_SONG_INDEX,
    STORED_SCENE_INDEX
} from '../../constants/storage'

const SCENE_TRANSITION_DEFAULTS = {
    didSceneScrollExit: true,
    canSceneUpdate: false,
    didSceneUpdate: false,
    canSceneEnter: false,
    didSceneEnter: false
}

const
    sceneCubesKey = getCubesKeyForScene(STORED_SONG_INDEX, STORED_SCENE_INDEX),
    sceneLayers = getLayersForScene(STORED_SONG_INDEX, STORED_SCENE_INDEX),
    sceneSkyTime = getSkyTimeForScene(STORED_SONG_INDEX, STORED_SCENE_INDEX),
    sceneSkySeason = getSkySeasonForScene(STORED_SONG_INDEX, STORED_SCENE_INDEX),
    sceneCubesKeys = getCubesForKey(sceneCubesKey)

export const SCENE_DEFAULTS = {
    ...SCENE_TRANSITION_DEFAULTS,
    sceneCubesKey,
    sceneSkyTime,
    sceneSkySeason,
    sceneSongIndex: STORED_SONG_INDEX,
    sceneSceneIndex: STORED_SCENE_INDEX,
    sceneCubesKeys,

    /**
     * Stored only for dev clarity. Components will retrieve these layers
     * through indices to avoid unnecessary updates.
     */
    sceneLayers
}
