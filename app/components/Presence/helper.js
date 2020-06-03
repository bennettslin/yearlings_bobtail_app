import { getActorArrangements } from '../../api/scene/actors'
import { getThingArrangements } from '../../api/scene/things'

import { ACTOR } from '../../constants/scene'

export const getArrangementForPresence = ({
    presenceType,
    presenceKey,
    actorKey

}) => {
    const arrangement = presenceType === ACTOR ?
        getActorArrangements()[actorKey][presenceKey] :
        getThingArrangements()[presenceType][presenceKey]

    // If no yIndex is given, default to -1.
    if (!Number.isFinite(arrangement.yIndex)) {
        arrangement.yIndex = -1
    }

    return arrangement
}
