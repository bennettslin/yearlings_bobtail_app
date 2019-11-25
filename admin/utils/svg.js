import keys from 'lodash/keys'

import { getMapForActor } from 'svg/actors'
import { getMapForPresenceType } from 'svg/things'

import { WHOLE_ACTOR_INSTANCES_MAP } from '../constants/actors'

export const getSvgMapForActor = (wholeActor) => {
    const actorInstances = WHOLE_ACTOR_INSTANCES_MAP[wholeActor],
        svgMap = {}

    actorInstances.forEach(({ actor, instance }) => {
        const actorMap = getMapForActor(actor)
        svgMap[instance] = actorMap[instance]
    })

    return svgMap
}

export const getSvgMapForThingType = (presenceType) => {
    const presenceMap = getMapForPresenceType(presenceType)

    if (!presenceMap) {
        return null
    }

    const
        duplicateKeys = {},
        svgMap = {}

    keys(presenceMap).forEach(rawPresenceKey => {
        const presenceKey = rawPresenceKey.split('__')[0]

        // Only add one presence per duplicate.
        if (!duplicateKeys[presenceKey]) {
            svgMap[rawPresenceKey] = presenceMap[rawPresenceKey]
            duplicateKeys[presenceKey] = true
        }
    })

    return svgMap
}
