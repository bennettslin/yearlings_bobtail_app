import backdrops from './backdrops'
import bubbles, { BUBBLE_WIRE } from './bubbles'
import cardboards from './cardboards'
import cutouts from './cutouts'
import doors from './doors'
import fixtures from './fixtures'
import flats from './flats'
import furnitures from './furnitures'
import panels from './panels'
import puppets, { PUPPET_WIRE } from './puppets'

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
}) => (
    SHARED_STYLES_MAP[presenceType][convertPresenceKeyToClassName(presenceKey)]
)

const WIRES_MAP = {
    [BUBBLE]: BUBBLE_WIRE,
    [PUPPET]: PUPPET_WIRE
}

export const getWireForThing = ({
    presenceType,
    presenceKey
}) => (
    WIRES_MAP[presenceType] || {}
)[convertPresenceKeyToClassName(presenceKey)]
