import { getScene } from '../builds'
import { convertPresenceKeyToClassName } from '../../helpers/format'
import { isString } from '../../helpers/general'
import { ALL_ACTOR_SHARED_STYLES } from '../../constants/scene/sharedStyles/actors'

const {
    sharedStyles: {
        actors: ACTOR_SHARED_STYLES,
        things: THING_SHARED_STYLES
    }
} = getScene()

export const getSharedStyleForActor = ({
    actorKey,
    presenceKey
}) => {
    const sharedStyle = ACTOR_SHARED_STYLES[actorKey][presenceKey]

    if (!sharedStyle) {
        return [...ALL_ACTOR_SHARED_STYLES]
    }

    if (isString(sharedStyle)) {
        return [...ALL_ACTOR_SHARED_STYLES, sharedStyle]
    }

    return [...ALL_ACTOR_SHARED_STYLES, ...sharedStyle]
}

export const getSharedStyleForThing = ({
    presenceType,
    presenceKey
}) => (
    THING_SHARED_STYLES[presenceType][
        convertPresenceKeyToClassName(presenceKey)
    ]
)
