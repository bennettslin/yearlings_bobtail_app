import {
    getCubesKeyForScene,
    getSkyTimeForScene,
    getSkySeasonForScene
} from '../../api/album/scenes'

import {
    INITIAL_SONG_INDEX,
    INITIAL_SCENE_INDEX
} from '../selected/default'

const
    sceneCubesKey = getCubesKeyForScene(INITIAL_SONG_INDEX, INITIAL_SCENE_INDEX),
    sceneSkyTime = getSkyTimeForScene(INITIAL_SONG_INDEX, INITIAL_SCENE_INDEX),
    sceneSkySeason = getSkySeasonForScene(INITIAL_SONG_INDEX, INITIAL_SCENE_INDEX)

export const SCENE_DEFAULTS = {
    sceneCubesKey,
    sceneSkyTime,
    sceneSkySeason,
    sceneSongIndex: INITIAL_SONG_INDEX,
    sceneSceneIndex: INITIAL_SCENE_INDEX
}
