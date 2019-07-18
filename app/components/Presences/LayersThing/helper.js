import keys from 'lodash/keys'

import backdrops from './Backdrop'
import bubbles from './Bubble'
import cardboards from './Cardboard'
import cutouts from './Cutout'
import fixtures from './Fixture'
import flats from './Flat'
import furnitures from './Furniture'
import panels from './Panel'
import puppets from './Puppet'

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
    [BACKDROP]: backdrops,
    [BUBBLE]: bubbles,
    [CARDBOARD]: cardboards,
    [CUTOUT]: cutouts,
    [FIXTURE]: fixtures,
    [FLAT]: flats,
    [FURNITURE]: furnitures,
    [PANEL]: panels,
    [PUPPET]: puppets
}

export const getMapForPresenceType = (presenceType) => {
    return PRESENCE_TYPE_MAP[presenceType]
}

export const getPresenceKeysForPresenceType = (presenceType) => {
    return keys(getMapForPresenceType(presenceType))
}
