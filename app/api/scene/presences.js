import { getScene } from '../builds'
import { ACTOR } from '../../../app/constants/scene'

const {
    actors: ACTOR_ARRANGEMENTS,
    things: THING_ARRANGEMENTS
} = getScene()

export const getPresenceKeys = ({
    actorKey,
    presenceType

}) => (
    actorKey ?
        Object.keys(ACTOR_ARRANGEMENTS[actorKey]) :
        Object.keys(THING_ARRANGEMENTS[presenceType])
)

export const getArrangementForPresence = ({
    presenceType,
    presenceKey,
    actorKey

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
