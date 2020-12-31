import { getScene } from '../builds'
import { convertPresenceKeyToClassName } from '../../helpers/format'
import { isString } from '../../helpers/general'
import { ALL_ACTOR_SHARED_STYLES } from '../../constants/scene/sharedStyles/actors'

const {
    sharedStyles: {
        actors: ACTOR_SHARED_STYLES,
        things: THING_SHARED_STYLES,
    },
} = getScene()

export const getSharedStyleForActor = ({
    actorKey,
    presenceKey,

}) => {
    const
        actorSharedStyles = ACTOR_SHARED_STYLES[actorKey] || [],
        sharedStyle = actorSharedStyles[presenceKey] || []

    return [
        ...ALL_ACTOR_SHARED_STYLES,
        ...isString(sharedStyle) ? [sharedStyle] : sharedStyle,
    ]
}

export const getSharedStyleForThing = ({
    presenceType,
    presenceKey,

}) => {
    const thingSharedStyles = THING_SHARED_STYLES[presenceType]

    return thingSharedStyles ? thingSharedStyles[
        convertPresenceKeyToClassName(presenceKey)
    ] : null
}
