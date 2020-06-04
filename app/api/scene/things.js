import { scene } from '../imports'

const {
    things: THING_ARRANGEMENTS
} = scene

export const getThingArrangements = () => (
    THING_ARRANGEMENTS
)

export const getKeysForThing = (thingKey) => (
    Object.keys(THING_ARRANGEMENTS[thingKey])
)
