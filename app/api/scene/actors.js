import { getScene } from '../imports'

const {
    actors: ACTOR_ARRANGEMENTS
} = getScene()

export const getActorArrangements = () => (
    ACTOR_ARRANGEMENTS
)

export const getKeysForActor = (actorKey) => (
    Object.keys(ACTOR_ARRANGEMENTS[actorKey])
)
