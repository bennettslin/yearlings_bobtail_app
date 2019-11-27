import keys from 'lodash/keys'

import { getSvgMapForActor } from 'svg/actors'
import { getSvgMapForThing } from 'svg/things'

import { WHOLE_ACTOR_INSTANCES } from '../constants/actors'
import { CUSTOM_THING_INSTANCES } from '../constants/things'

const getSvgMapForMultipleTypes = ({ isActor, presenceType }) => {
    const
        instanceList =
            isActor ? WHOLE_ACTOR_INSTANCES : CUSTOM_THING_INSTANCES,
        mapGetter = isActor ? getSvgMapForActor : getSvgMapForThing,
        instances = instanceList[presenceType],
        svgMap = {}

    instances.forEach(({ type, instance }) => {
        const instanceMap = mapGetter(type)
        svgMap[instance] = instanceMap[instance]
    })

    return svgMap
}

export const getPreviewerSvgMapForActor = (presenceType) => {
    // Get all svgs for this actor, including compound instances.

    return getSvgMapForMultipleTypes({
        isActor: true,
        presenceType
    })
}

export const getPreviewerSvgMapForThing = (presenceType) => {
    if (CUSTOM_THING_INSTANCES[presenceType]) {
        // Get all svgs for custom thing.

        return getSvgMapForMultipleTypes({ presenceType })
    }

    const presenceMap = getSvgMapForThing(presenceType)
    if (!presenceMap) {
        return null
    }

    const
        duplicateKeys = {},
        svgMap = {}

    // Ensure that there are no duplicates.
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
