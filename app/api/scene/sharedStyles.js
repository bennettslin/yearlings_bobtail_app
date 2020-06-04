import { scene } from '../imports'
import { convertPresenceKeyToClassName } from '../../helpers/format'
import { isString } from '../../helpers/general'
import {
    ALL_CLOTHING__SHARED,
    ALL_PEOPLE__SHARED
} from '../../constants/scene/sharedStyles/actors'

const {
        sharedStyles: {
            actors: SHARED_ACTOR_STYLES,
            things: SHARED_THING_STYLES
        }
    } = scene,
    ALL_ACTOR_STYLES = [
        ALL_CLOTHING__SHARED,
        ALL_PEOPLE__SHARED
    ]

export const getSharedStyleForActor = ({
    actorKey,
    presenceKey
}) => {
    const sharedStyle = SHARED_ACTOR_STYLES[actorKey][presenceKey]

    if (!sharedStyle) {
        return [...ALL_ACTOR_STYLES]
    }

    if (isString(sharedStyle)) {
        return [...ALL_ACTOR_STYLES, sharedStyle]
    }

    return [...ALL_ACTOR_STYLES, ...sharedStyle]
}

export const getSharedStyleForThing = ({
    presenceType,
    presenceKey
}) => (
    SHARED_THING_STYLES[presenceType][
        convertPresenceKeyToClassName(presenceKey)
    ]
)
