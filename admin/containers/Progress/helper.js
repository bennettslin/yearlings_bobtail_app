import keys from 'lodash/keys'
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

import { getMapForPresenceType } from 'components/Presences/LayersThing/helper'

export const logSvgCount = () => {
    const _getSvgCount = (things) => {
        const duplicateKeys = {}
        return keys(things).reduce((count, thing) => {
            let workedIncrement = 1
            let neededIncrement = 1
            if (thing.includes('__')) {
                const thingArray = thing.split('__')

                // Only increment if this is the first instance of a duplicate.
                if (!duplicateKeys[thingArray[0]]) {
                    duplicateKeys[thingArray[0]] = true

                // Don't increment if this is the next instance of a duplicate.
                } else {
                    workedIncrement = 0
                    neededIncrement = 0
                }
            }
            if (!things[thing]) {
                workedIncrement = 0
            }
            return {
                workedCount: count.workedCount + workedIncrement,
                neededCount: count.neededCount + neededIncrement
            }
        }, { workedCount: 0, neededCount: 0 })
    }

    const
        backdropsCount = _getSvgCount(getMapForPresenceType(BACKDROP)),
        bubblesCount = _getSvgCount(getMapForPresenceType(BUBBLE)),
        cardboardsCount = _getSvgCount(getMapForPresenceType(CARDBOARD)),
        cutoutsCount = _getSvgCount(getMapForPresenceType(CUTOUT)),
        fixturesCount = _getSvgCount(getMapForPresenceType(FIXTURE)),
        flatsCount = _getSvgCount(getMapForPresenceType(FLAT)),
        furnituresCount = _getSvgCount(getMapForPresenceType(FURNITURE)),
        panelsCount = _getSvgCount(getMapForPresenceType(PANEL)),
        puppetsCount = _getSvgCount(getMapForPresenceType(PUPPET)),
        totalWorkedCount =
            backdropsCount.workedCount +
            bubblesCount.workedCount +
            cardboardsCount.workedCount +
            cutoutsCount.workedCount +
            fixturesCount.workedCount +
            flatsCount.workedCount +
            furnituresCount.workedCount +
            panelsCount.workedCount +
            puppetsCount.workedCount,
        totalNeededCount =
            backdropsCount.neededCount +
            bubblesCount.neededCount +
            cardboardsCount.neededCount +
            cutoutsCount.neededCount +
            fixturesCount.neededCount +
            flatsCount.neededCount +
            furnituresCount.neededCount +
            panelsCount.neededCount +
            puppetsCount.neededCount

    logAdmin(`${backdropsCount.workedCount}/${backdropsCount.neededCount} backdrops, ${bubblesCount.workedCount}/${bubblesCount.neededCount} bubbles, ${cardboardsCount.workedCount}/${cardboardsCount.neededCount} cardboards, ${cutoutsCount.workedCount}/${cutoutsCount.neededCount} cutouts, ${fixturesCount.workedCount}/${fixturesCount.neededCount} fixtures, ${flatsCount.workedCount}/${flatsCount.neededCount} flats, ${furnituresCount.workedCount}/${furnituresCount.neededCount} furnitures, ${panelsCount.workedCount}/${panelsCount.neededCount} panels, ${puppetsCount.workedCount}/${puppetsCount.neededCount} puppets, ${totalWorkedCount}/${totalNeededCount} total.`)
}
