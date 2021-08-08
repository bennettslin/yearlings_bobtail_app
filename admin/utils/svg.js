import {
    getSvgMapForActor,
    getSvgMapForThing,
} from '../../src/api/svg'

import { WHOLE_ACTOR_INSTANCES } from '../constants/actors'
import { CUSTOM_THING_INSTANCES } from '../constants/things'

const getSvgMapForMultipleTypes = ({ isActor, presenceType }) => {
    // Actors and custom lists may include difference presence types.
    const
        instanceList =
            isActor ? WHOLE_ACTOR_INSTANCES : CUSTOM_THING_INSTANCES,
        mapGetter = isActor ? getSvgMapForActor : getSvgMapForThing,
        instances = instanceList[presenceType],
        svgMap = {}

    if (!instances) {
        return null
    }

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
        presenceType,
    })
}

export const getPreviewerSvgMapForThing = (presenceType) => {
    if (CUSTOM_THING_INSTANCES[presenceType]) {
        // Get all svgs for custom thing.
        return getSvgMapForMultipleTypes({ presenceType })
    }

    return getSvgMapForThing(presenceType) || null
}
