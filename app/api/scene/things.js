import { convertPresenceKeyToClassName } from '../../helpers/format'
import THING_ARRANGEMENTS from '../../scene/aggregators/things'
import SHARED_THING_STYLES from '../../scene/sharedStyles/things'

export const getThingArrangements = () => (
    THING_ARRANGEMENTS
)

export const getKeysForThing = (thingKey) => (
    Object.keys(THING_ARRANGEMENTS[thingKey])
)

export const getSharedStyleForThing = ({
    presenceType,
    presenceKey
}) => (
    SHARED_THING_STYLES[presenceType][
        convertPresenceKeyToClassName(presenceKey)
    ]
)
