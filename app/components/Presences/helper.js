import actorsMap from './Actor/presenceMap'
import backdropsMap from './Backdrop/presenceMap'
import bubblesMap from './Bubble/presenceMap'
import cardboardsMap from './Cardboard/presenceMap'
import cutoutsMap from './Cutout/presenceMap'
import fixturesMap from './Fixture/presenceMap'
import flatsMap from './Flat/presenceMap'
import furnituresMap from './Furniture/presenceMap'
import panelsMap from './Panel/presenceMap'
import puppetsMap from './Puppet/presenceMap'

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
