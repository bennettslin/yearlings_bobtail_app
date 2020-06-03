import ACTOR_ARRANGEMENTS from '../../scene/aggregators/actors'

export const getActorArrangements = () => (
    ACTOR_ARRANGEMENTS
)

export const getKeysForActor = (actorKey) => (
    Object.keys(ACTOR_ARRANGEMENTS[actorKey])
)
