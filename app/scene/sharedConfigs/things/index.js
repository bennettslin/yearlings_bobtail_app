import backdrops from './backdrops'
import bubbles from './bubbles'
import cardboards from './cardboards'
import cutouts from './cutouts'
import doors from './doors'
import fixtures from './fixtures'
import flats from './flats'
import furnitures from './furnitures'
import panels from './panels'
import puppets from './puppets'

import { convertPresenceKeyToClassName } from 'helpers/format'

import {
    BACKDROP,
    BUBBLE,
    CARDBOARD,
    CUTOUT,
    DOOR,
    FIXTURE,
    FLAT,
    FURNITURE,
    PANEL,
    PUPPET
} from 'constants/scene/things'

const SHARED_STYLES_MAP = {
    [BACKDROP]: backdrops,
    [BUBBLE]: bubbles,
    [CARDBOARD]: cardboards,
    [CUTOUT]: cutouts,
    [DOOR]: doors,
    [FIXTURE]: fixtures,
    [FLAT]: flats,
    [FURNITURE]: furnitures,
    [PANEL]: panels,
    [PUPPET]: puppets
}

export const getSharedStyleForThing = ({
    presenceType,
    presenceKey
}) => {

    return SHARED_STYLES_MAP[presenceType][convertPresenceKeyToClassName(presenceKey)]
}
