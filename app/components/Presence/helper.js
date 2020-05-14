import ALL_ARRANGEMENTS_ACTORS from '../../scene/aggregators/actors'
import ALL_ARRANGEMENTS_THINGS from '../../scene/aggregators/things'
import isFinite from 'lodash/isFinite'

import { ACTOR } from '../../constants/scene'

export const getArrangementForPresence = ({
    presenceType,
    presenceKey,
    actorKey

}) => {
    const arrangement = presenceType === ACTOR ?
        ALL_ARRANGEMENTS_ACTORS[actorKey][presenceKey] :
        ALL_ARRANGEMENTS_THINGS[presenceType][presenceKey]

    // If no yIndex is given, default to -1.
    if (!isFinite(arrangement.yIndex)) {
        arrangement.yIndex = -1
    }

    return arrangement
}
