import keys from 'lodash/keys'

import { getSvgMapForActor } from 'svg/actors'
import { getSvgMapForThing } from 'svg/things'

import { WHOLE_ACTOR_INSTANCES } from '../constants/actors'

export const getSvgMapForWholeActor = (wholeActor) => {
    // Get all svgs for this actor, including compound instances.

    const actorInstances = WHOLE_ACTOR_INSTANCES[wholeActor],
        svgMap = {}

    actorInstances.forEach(({ actor, instance }) => {
        const actorMap = getSvgMapForActor(actor)
        svgMap[instance] = actorMap[instance]
    })

    return svgMap
}

export const getSvgMapForUnduplicatedThing = (presenceType) => {
    // Ensure that there are no duplicates.

    const presenceMap = getSvgMapForThing(presenceType)

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
