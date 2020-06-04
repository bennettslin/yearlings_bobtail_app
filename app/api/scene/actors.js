import { isString } from '../../helpers/general'
import ACTOR_ARRANGEMENTS from '../../scene/scenes/actors'
import SHARED_ACTOR_STYLES from '../../scene/sharedStyles/actors'
import {
    ALL_CLOTHING__SHARED,
    ALL_PEOPLE__SHARED
} from '../../constants/scene/sharedStyles/actors'

const ALL_ACTOR_STYLES = [
    ALL_CLOTHING__SHARED,
    ALL_PEOPLE__SHARED
]

export const getActorArrangements = () => (
    ACTOR_ARRANGEMENTS
)

export const getKeysForActor = (actorKey) => (
    Object.keys(ACTOR_ARRANGEMENTS[actorKey])
)

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
