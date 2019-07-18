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

// Comment this out for production.
const _adminLogSvgCount = () => {
    const _getSvgCount = (things) => {
        const duplicateKeys = {}
        return keys(things).reduce((count, thing) => {
            let increment = 1
            if (thing.includes('__')) {
                const thingArray = thing.split('__')

                // Only increment if this is the first instance of a duplicate.
                if (!duplicateKeys[thingArray[0]]) {
                    duplicateKeys[thingArray[0]] = true

                // Don't increment if this is the next instance of a duplicate.
                } else {
                    increment = 0
                }
            }
            if (things[thing]) {
                console.log(thing)
            }
            return count + increment
        }, 0)
    }

    const
        backdropsCount = _getSvgCount(backdrops),
        bubblesCount = _getSvgCount(bubbles),
        cardboardsCount = _getSvgCount(cardboards),
        cutoutsCount = _getSvgCount(cutouts),
        fixturesCount = _getSvgCount(fixtures),
        flatsCount = _getSvgCount(flats),
        furnituresCount = _getSvgCount(furnitures),
        panelsCount = _getSvgCount(panels),
        puppetsCount = _getSvgCount(puppets),
        totalCount =
            backdropsCount +
            bubblesCount +
            cardboardsCount +
            cutoutsCount +
            fixturesCount +
            flatsCount +
            furnituresCount +
            panelsCount +
            puppetsCount

    logAdmin(`${backdropsCount} backdrops, ${bubblesCount} bubbles, ${cardboardsCount} cardboards, ${cutoutsCount} cutouts, ${fixturesCount} fixtures, ${flatsCount} flats, ${furnituresCount} furnitures, ${panelsCount} panels, ${puppetsCount} puppets, ${totalCount} total things.`)
}

_adminLogSvgCount()
