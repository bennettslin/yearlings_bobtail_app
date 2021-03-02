import { createSelector } from 'reselect'
import {
    getCubesKeyForScene,
    getSkyTimeForScene,
    getSeasonForScene,
} from '../../api/album/scenes'
import { getIsDarkScene } from '../../helpers/scene'
import { mapIsSongSelectComplete } from '../entrance/selector'
import { DEFAULT_STAGE_KEY } from '../../constants/scene/scenes'
import { SCENE_STORE } from '../../constants/store'

export const mapSceneSongIndex = (
    { [SCENE_STORE]: { sceneSongIndex } },
) => sceneSongIndex

export const mapSceneSceneIndex = (
    { [SCENE_STORE]: { sceneSceneIndex } },
) => sceneSceneIndex

export const mapSceneCubesKey = createSelector(
    mapSceneSongIndex,
    mapSceneSceneIndex,
    (
        sceneSongIndex,
        sceneSceneIndex,
    ) => getCubesKeyForScene(sceneSongIndex, sceneSceneIndex),
)

export const mapSceneSkyTime = createSelector(
    mapSceneSongIndex,
    mapSceneSceneIndex,
    (
        sceneSongIndex,
        sceneSceneIndex,
    ) => getSkyTimeForScene(sceneSongIndex, sceneSceneIndex),
)

export const mapSceneSkySeason = createSelector(
    mapSceneSongIndex,
    mapSceneSceneIndex,
    (
        sceneSongIndex,
        sceneSceneIndex,
    ) => getSeasonForScene(sceneSongIndex, sceneSceneIndex),
)

export const mapIsDarkScene = createSelector(
    mapSceneCubesKey,
    (
        sceneCubesKey,
    ) => getIsDarkScene(sceneCubesKey),
)

export const mapCanStageReset = createSelector(
    mapSceneCubesKey,
    mapIsSongSelectComplete,
    (
        sceneCubesKey,
        isSongSelectComplete,
    ) => sceneCubesKey === DEFAULT_STAGE_KEY && isSongSelectComplete,
)
