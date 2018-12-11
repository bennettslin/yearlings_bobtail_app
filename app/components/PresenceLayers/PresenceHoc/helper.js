import actorsMap from '../Actor/presenceMap'
import backdropsMap from '../Backdrop/presenceMap'

import ARRANGEMENTS_ACTORS from 'scene/actors'
import ARRANGEMENTS_THINGS from 'scene/things'

import {
    ACTORS,
    BACKDROPS
} from 'constants/scene'

const PRESENCE_CLASS_NAME_MAP = {
    [ACTORS]: 'Actor',
    [BACKDROPS]: 'Backdrop'
}

const PRESENCE_TYPE_MAP = {
    [ACTORS]: actorsMap,
    [BACKDROPS]: backdropsMap
}

const getClassNameForPresenceType = (presenceType) => {
    return PRESENCE_CLASS_NAME_MAP[presenceType]
}

const getMapForPresenceType = (presenceType) => {
    return PRESENCE_TYPE_MAP[presenceType]
}

const getArrangementForPresenceType = ({
    presenceType,
    presenceKey,
    presenceValue

}) => {
    if (presenceType === ACTORS) {
        return ARRANGEMENTS_ACTORS[presenceKey][presenceValue]

    } else if (presenceValue === true) {
        return ARRANGEMENTS_THINGS[presenceType][presenceKey]
    }
}

export {
    getClassNameForPresenceType,
    getMapForPresenceType,
    getArrangementForPresenceType
}
