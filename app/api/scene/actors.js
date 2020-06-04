import { scene } from '../imports'

const {
    actors: ACTOR_ARRANGEMENTS
} = scene

export const getActorArrangements = () => (
    ACTOR_ARRANGEMENTS
)

export const getKeysForActor = (actorKey) => (
    Object.keys(ACTOR_ARRANGEMENTS[actorKey])
)
