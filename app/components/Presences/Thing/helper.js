import keys from 'lodash.keys'

import backdropsMap from './Backdrop'
import bubblesMap from './Bubble'
import cardboardsMap from './Cardboard'
import cutoutsMap from './Cutout'
import fixturesMap from './Fixture'
import flatsMap from './Flat'
import furnituresMap from './Furniture'
import panelsMap from './Panel'
import puppetsMap from './Puppet'

import {
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

export const getPresenceKeysForPresenceType = (presenceType) => {
    return keys(getMapForPresenceType(presenceType))
}
