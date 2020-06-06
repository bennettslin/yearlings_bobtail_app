import { DEFAULT_STAGE_KEY } from '../../constants/scene/scenes'

export const mapSceneCubesKey = (
    { sceneStore: { sceneCubesKey } }
) => sceneCubesKey || DEFAULT_STAGE_KEY

export const mapSceneSkyTime = (
    { sceneStore: { sceneSkyTime } }
) => sceneSkyTime

export const mapSceneSkySeason = (
    { sceneStore: { sceneSkySeason } }
) => sceneSkySeason

export const mapSceneSongIndex = (
    { sceneStore: { sceneSongIndex } }
) => sceneSongIndex

export const mapSceneSceneIndex = (
    { sceneStore: { sceneSceneIndex } }
) => sceneSceneIndex
