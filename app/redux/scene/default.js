import { getCubesForKey } from '../../scene/aggregators/cubes'
import {
    getCubesKeyForScene,
    getLayersForScene,
    getSkyTimeForScene,
    getSkySeasonForScene
} from '../../api/album/scenes'

import {
    INITIAL_SONG_INDEX,
    INITIAL_SCENE_INDEX
} from '../selected/default'

const
    sceneCubesKey = getCubesKeyForScene(INITIAL_SONG_INDEX, INITIAL_SCENE_INDEX),
    sceneLayers = getLayersForScene(INITIAL_SONG_INDEX, INITIAL_SCENE_INDEX),
    sceneSkyTime = getSkyTimeForScene(INITIAL_SONG_INDEX, INITIAL_SCENE_INDEX),
    sceneSkySeason = getSkySeasonForScene(INITIAL_SONG_INDEX, INITIAL_SCENE_INDEX),
    sceneCubesKeys = getCubesForKey(sceneCubesKey)

export const SCENE_DEFAULTS = {
    sceneCubesKey,
    sceneSkyTime,
    sceneSkySeason,
    sceneSongIndex: INITIAL_SONG_INDEX,
    sceneSceneIndex: INITIAL_SCENE_INDEX,
    sceneCubesKeys,

    /**
     * Stored only for dev clarity. Components will retrieve these layers
     * through indices to avoid unnecessary updates.
     */
    sceneLayers
}
