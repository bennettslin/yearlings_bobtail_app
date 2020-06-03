import THING_ARRANGEMENTS from '../../scene/aggregators/things'

export const getThingArrangements = () => (
    THING_ARRANGEMENTS
)

export const getKeysForThing = (thingKey) => (
    Object.keys(THING_ARRANGEMENTS[thingKey])
)
