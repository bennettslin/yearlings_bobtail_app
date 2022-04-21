import { createSelector } from 'reselect'
import {
    getCubesKeyForScene,
    getSkyTimeForScene,
    getSeasonForScene,
} from '../../endpoint/album/scenes'
import {
    getIsDarkRoomExtraScene,
    getIsDarkRoomDefaultScene,
    getIsPastSeason,
    getIsFutureSeason,
    getIsMagicSeason,
    getIsNightTime,
    getIsAutumnSeason,
    getIsWinterSeason,
    getIsEveningTime,
} from '../../helpers/scene'
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

export const mapIsEveningTime = createSelector(
    mapSceneSkyTime,
    skyTime => getIsEveningTime(skyTime),
)

export const mapIsNightTime = createSelector(
    mapSceneSkyTime,
    mapSceneSkySeason,
    (skyTime, skySeason) => getIsNightTime(skyTime, skySeason),
)

export const mapIsAutumnSeason = createSelector(
    mapSceneSkySeason,
    skySeason => getIsAutumnSeason(skySeason),
)

export const mapIsWinterSeason = createSelector(
    mapSceneSkySeason,
    skySeason => getIsWinterSeason(skySeason),
)

export const mapIsDarkRoomDefaultScene = createSelector(
    mapSceneCubesKey,
    sceneCubesKey => getIsDarkRoomDefaultScene(sceneCubesKey),
)

export const mapIsDarkRoomExtraScene = createSelector(
    mapSceneCubesKey,
    sceneCubesKey => getIsDarkRoomExtraScene(sceneCubesKey),
)

export const mapIsPastSeason = createSelector(
    mapSceneCubesKey,
    sceneCubesKey => getIsPastSeason(sceneCubesKey),
)

export const mapIsFutureSeason = createSelector(
    mapSceneCubesKey,
    sceneCubesKey => getIsFutureSeason(sceneCubesKey),
)

export const mapIsMagicSeason = createSelector(
    mapSceneCubesKey,
    sceneCubesKey => getIsMagicSeason(sceneCubesKey),
)

export const mapCanStageReset = createSelector(
    mapSceneCubesKey,
    mapIsSongSelectComplete,
    (
        sceneCubesKey,
        isSongSelectComplete,
    ) => sceneCubesKey === DEFAULT_STAGE_KEY && isSongSelectComplete,
)
