import { getScene } from '../builds'
import { getLayerForScene } from '../album/scenes'
import { ACTOR } from '../../../app/constants/scene'

const {
    actors: ACTOR_ARRANGEMENTS,
    things: THING_ARRANGEMENTS,
    layerPresencesList
} = getScene()

export const getPresencesForLayer = ({
    presenceType,
    actorKey,
    yIndex

}) => {
    const presencesEntity = layerPresencesList[yIndex][presenceType]
    return (
        actorKey ?
            presencesEntity[actorKey] :
            presencesEntity
    ) || []
}

export const getArrangementForPresence = ({
    presenceType,
    actorKey,
    presenceKey

}) => {
    const arrangement = presenceType === ACTOR ?
        ACTOR_ARRANGEMENTS[actorKey][presenceKey] :
        THING_ARRANGEMENTS[presenceType][presenceKey]

    // If no yIndex is given, default to -1.
    if (!Number.isFinite(arrangement.yIndex)) {
        arrangement.yIndex = -1
    }

    return arrangement
}

export const getIsShownInSceneForPresence = ({
    songIndex,
    sceneIndex,
    yIndex,
    presenceType,
    actorKey,
    presenceKey

}) => {
    const
        layer = getLayerForScene(songIndex, sceneIndex, yIndex),
        layerEntity = layer[presenceType] || {}

    return actorKey ?
        layerEntity[actorKey] === presenceKey :
        layerEntity[presenceKey]
}
