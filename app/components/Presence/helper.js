import ALL_ARRANGEMENTS_ACTORS from 'album/scenes/arrangements'
import ALL_ARRANGEMENTS_THINGS from 'album/scenes/arrangements/things'

import { ACTOR } from 'constants/scene'

export const getArrangementForPresence = ({
    presenceType,
    presenceKey,
    actorKey

}) => {
    return presenceType === ACTOR ?
        ALL_ARRANGEMENTS_ACTORS[actorKey][presenceKey] :
        ALL_ARRANGEMENTS_THINGS[presenceType][presenceKey]
}
