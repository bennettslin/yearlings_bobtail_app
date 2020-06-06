import { createSelector } from 'reselect'
import { getIsShownInSceneForPresence } from '../../api/scene/presences'
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

const mapSceneSongIndex = (
    { sceneStore: { sceneSongIndex } }
) => sceneSongIndex

const mapSceneSceneIndex = (
    { sceneStore: { sceneSceneIndex } }
) => sceneSceneIndex

export const mapIsPresenceShownInScene = ({
    yIndex,
    presenceType,
    actorKey,
    presenceKey

}) => createSelector(
    mapSceneSongIndex,
    mapSceneSceneIndex,
    (
        songIndex,
        sceneIndex
    ) => getIsShownInSceneForPresence({
        songIndex,
        sceneIndex,
        yIndex,
        presenceType,
        actorKey,
        presenceKey
    })
)
