import { DEFAULT_STAGE_KEY } from '../../constants/scene/scenes'
import { SCENE_STORE } from '../../constants/store'

export const mapSceneSongIndex = (
    { [SCENE_STORE]: { sceneSongIndex } }
) => sceneSongIndex

export const mapSceneSceneIndex = (
    { [SCENE_STORE]: { sceneSceneIndex } }
) => sceneSceneIndex

export const mapSceneSkyTime = (
    { [SCENE_STORE]: { sceneSkyTime } }
) => sceneSkyTime

export const mapSceneSkySeason = (
    { [SCENE_STORE]: { sceneSeason } }
) => sceneSeason

export const mapSceneCubesKey = (
    { [SCENE_STORE]: { sceneCubesKey } }
) => sceneCubesKey || DEFAULT_STAGE_KEY
