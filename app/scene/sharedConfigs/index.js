import { getWireForActor } from './wires/actors'
import { getWireForThing } from './wires/things'

import { REAR } from '../../constants/scene/wires'

export const getWire = ({
    actorKey,
    presenceType,
    presenceKey

}) => (
    actorKey ? getWireForActor({
        actorKey,
        presenceKey
    }) : getWireForThing({
        presenceType,
        presenceKey
    })
)

export const getWires = ({
    actorKey,
    presenceType,
    presenceKey

}) => {
    const wire = getWire({
        actorKey,
        presenceType,
        presenceKey
    })

    // If there is a wire, wrap it in an array.
    if (wire && !Array.isArray(wire)) {
        return [wire]
    }

    // This is either an array or undefined.
    return wire
}

export const getWirePlacement = ({
    actorKey,
    presenceType,
    presenceKey

}) => {
    const wire = getWire({
        actorKey,
        presenceType,
        presenceKey
    })

    // There is no placement if there is no wire.
    if (!wire) {
        return null
    }

    // If there is a wire but no placement, set default as rear.
    return wire.placement || REAR
}
