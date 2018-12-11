import actorsMap from '../Actor/presenceMap'
import backdropsMap from '../Backdrop/presenceMap'
import bubblesMap from '../Bubble/presenceMap'

import ARRANGEMENTS_ACTORS from 'scene/actors'
import ARRANGEMENTS_THINGS from 'scene/things'

import {
    ACTORS,
    BACKDROPS,
    BUBBLES,
    CUTOUTS,
    FIXTURES,
    FLATS,
    FURNITURES,
    PANELS,
    PUPPETS
} from 'constants/scene'

const PRESENCE_CLASS_NAME_MAP = {
    [ACTORS]: 'Actor',
    [BACKDROPS]: 'Backdrop',
    [BUBBLES]: 'Bubble',
    [CUTOUTS]: 'Cutout',
    [FIXTURES]: 'Fixture',
    [FLATS]: 'Flat',
    [FURNITURES]: 'Furniture',
    [PANELS]: 'Panel',
    [PUPPETS]: 'Puppet'
}

const PRESENCE_TYPE_MAP = {
    [ACTORS]: actorsMap,
    [BACKDROPS]: backdropsMap,
    [BUBBLES]: bubblesMap
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
