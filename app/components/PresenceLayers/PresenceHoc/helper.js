import actorsMap from '../Actor/presenceMap'
import backdropsMap from '../Backdrop/presenceMap'
import bubblesMap from '../Bubble/presenceMap'
import cutoutsMap from '../Cutout/presenceMap'
import fixturesMap from '../Fixture/presenceMap'
import flatsMap from '../Flat/presenceMap'
import furnituresMap from '../Furniture/presenceMap'
import panelsMap from '../Panel/presenceMap'
import puppetsMap from '../Puppet/presenceMap'

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
    [BUBBLES]: bubblesMap,
    [CUTOUTS]: cutoutsMap,
    [FIXTURES]: fixturesMap,
    [FLATS]: flatsMap,
    [FURNITURES]: furnituresMap,
    [PANELS]: panelsMap,
    [PUPPETS]: puppetsMap
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

    } else if (typeof presenceValue === 'string') {
        return ARRANGEMENTS_THINGS[presenceType][presenceKey][presenceValue]
    }
}

export {
    getClassNameForPresenceType,
    getMapForPresenceType,
    getArrangementForPresenceType
}
