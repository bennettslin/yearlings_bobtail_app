import { createSelector } from 'reselect'
import {
    getCubesKeyForScene,
    getSkyTimeForScene,
    getSeasonForScene
} from '../../api/album/scenes'
import {
    mapDidCurtainsClose,
    mapDidStageReset,
    mapIsSongSelectComplete
} from '../entrance/selector'
import { DEFAULT_STAGE_KEY } from '../../constants/scene/scenes'
import { SCENE_STORE } from '../../constants/store'

export const mapSceneSongIndex = (
    { [SCENE_STORE]: { sceneSongIndex } }
) => sceneSongIndex

export const mapSceneSceneIndex = (
    { [SCENE_STORE]: { sceneSceneIndex } }
) => sceneSceneIndex

export const mapIsStageDefault = createSelector(
    mapDidCurtainsClose,
    mapDidStageReset,
    (
        didCurtainsClose,
        didStageReset
    ) => didCurtainsClose && !didStageReset
)

export const mapSceneCubesKey = createSelector(
    mapSceneSongIndex,
    mapSceneSceneIndex,
    mapIsStageDefault,
    (
        sceneSongIndex,
        sceneSceneIndex,
        isStageDefault
    ) => getCubesKeyForScene(sceneSongIndex, sceneSceneIndex, isStageDefault)
)

export const mapSceneSkyTime = createSelector(
    mapSceneSongIndex,
    mapSceneSceneIndex,
    mapIsStageDefault,
    (
        sceneSongIndex,
        sceneSceneIndex,
        isStageDefault
    ) => getSkyTimeForScene(sceneSongIndex, sceneSceneIndex, isStageDefault)
)

export const mapSceneSkySeason = createSelector(
    mapSceneSongIndex,
    mapSceneSceneIndex,
    mapIsStageDefault,
    (
        sceneSongIndex,
        sceneSceneIndex,
        isStageDefault
    ) => getSeasonForScene(sceneSongIndex, sceneSceneIndex, isStageDefault)
)

export const mapCanStageReset = createSelector(
    mapSceneCubesKey,
    mapIsSongSelectComplete,
    (
        sceneCubesKey,
        isSongSelectComplete
    ) => sceneCubesKey === DEFAULT_STAGE_KEY && isSongSelectComplete
)
