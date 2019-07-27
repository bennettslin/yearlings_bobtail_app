import keys from 'lodash/keys'

import { getMapForPresenceType } from 'components/Presences/LayersThing/helper'

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

export const getSvgMapForPresenceType = (presenceType) => {
    const presenceMap = getMapForPresenceType(presenceType)

    if (!presenceMap) {
        return null
    }

    const duplicateKeys = {}

    keys(presenceMap).forEach(rawPresenceKey => {
        const presenceKey = rawPresenceKey.split('__')[0]
        duplicateKeys[presenceKey] = presenceMap[rawPresenceKey]
    })

    return duplicateKeys
}

const _getSvgCount = (presenceType) => {
    const svgBooleanMap = getSvgMapForPresenceType(presenceType)
    return keys(svgBooleanMap).reduce((count, thing) => {
        const
            workedIncrement = svgBooleanMap[thing] ? 1 : 0,
            neededIncrement = 1
        return {
            workedCount: count.workedCount + workedIncrement,
            neededCount: count.neededCount + neededIncrement
        }
    }, { workedCount: 0, neededCount: 0 })
}

export const logSvgCount = () => {
    const
        backdropsCount = _getSvgCount(BACKDROP),
        bubblesCount = _getSvgCount(BUBBLE),
        cardboardsCount = _getSvgCount(CARDBOARD),
        cutoutsCount = _getSvgCount(CUTOUT),
        fixturesCount = _getSvgCount(FIXTURE),
        flatsCount = _getSvgCount(FLAT),
        furnituresCount = _getSvgCount(FURNITURE),
        panelsCount = _getSvgCount(PANEL),
        puppetsCount = _getSvgCount(PUPPET),
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
