import { getScene } from '../imports'

const {
    things: THING_ARRANGEMENTS
} = getScene()

export const getThingArrangements = () => THING_ARRANGEMENTS

export const getKeysForThing = (thingKey) => (
    Object.keys(THING_ARRANGEMENTS[thingKey])
)
