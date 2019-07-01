import actorsMap from './Actor/presenceMap'
import backdropsMap from './Thing/Backdrop'
import bubblesMap from './Thing/Bubble'
import cardboardsMap from './Thing/Cardboard'
import cutoutsMap from './Thing/Cutout'
import fixturesMap from './Thing/Fixture'
import flatsMap from './Thing/Flat'
import furnituresMap from './Thing/Furniture'
import panelsMap from './Thing/Panel'
import puppetsMap from './Thing/Puppet'

import ALL_ARRANGEMENTS_ACTORS from 'album/scenes/arrangements'
import ALL_ARRANGEMENTS_THINGS from 'album/scenes/arrangements/things'

import {
    ACTOR,
    BACKDROP,
    BUBBLE,
    CARDBOARD,
    CUTOUT,
    FIXTURE,
    FLAT,
    FURNITURE,
    PANEL,
    PUPPET
} from 'constants/scene'

const PRESENCE_TYPE_MAP = {
    [ACTOR]: actorsMap,
    [BACKDROP]: backdropsMap,
    [BUBBLE]: bubblesMap,
    [CARDBOARD]: cardboardsMap,
    [CUTOUT]: cutoutsMap,
    [FIXTURE]: fixturesMap,
    [FLAT]: flatsMap,
    [FURNITURE]: furnituresMap,
    [PANEL]: panelsMap,
    [PUPPET]: puppetsMap
}

export const getMapForPresenceType = (presenceType) => {
    return PRESENCE_TYPE_MAP[presenceType]
}

export const getArrangementForPresenceType = ({
    presenceType,
    presenceKey,
    actorKey

}) => {
    return presenceType === ACTOR ?
        ALL_ARRANGEMENTS_ACTORS[actorKey][presenceKey] :
        ALL_ARRANGEMENTS_THINGS[presenceType][presenceKey]
}
