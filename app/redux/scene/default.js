import {
    getCubesKeyForScene,
    getSkyTimeForScene,
    getSeasonForScene
} from '../../api/album/scenes'

import {
    INITIAL_SONG_INDEX,
    INITIAL_SCENE_INDEX
} from '../selected/default'

export const SCENE_DEFAULTS = {
    sceneCubesKey: getCubesKeyForScene(INITIAL_SONG_INDEX, INITIAL_SCENE_INDEX),
    sceneSkyTime: getSkyTimeForScene(INITIAL_SONG_INDEX, INITIAL_SCENE_INDEX),
    sceneSeason: getSeasonForScene(INITIAL_SONG_INDEX, INITIAL_SCENE_INDEX),
    sceneSongIndex: INITIAL_SONG_INDEX,
    sceneSceneIndex: INITIAL_SCENE_INDEX
}
