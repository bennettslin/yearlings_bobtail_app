import { getScene } from '../builds'
import { convertPresenceKeyToClassName } from '../../helpers/format'

const {
    wires: {
        actors: ACTOR_WIRES,
        things: THING_WIRES,
    },
} = getScene()

const getWireForActor = ({
    actorKey,
    presenceKey,
}) => (
    ACTOR_WIRES[actorKey] || {}
)[presenceKey]

const getWireForThing = ({
    presenceType,
    presenceKey,
}) => (
    THING_WIRES[presenceType] || {}
)[convertPresenceKeyToClassName(presenceKey)]

const getWireConfig = ({
    actorKey,
    presenceType,
    presenceKey,

}) => (
    actorKey ?
        getWireForActor({ actorKey, presenceKey }) :
        getWireForThing({ presenceType, presenceKey })
)

export const getWires = ({
    actorKey,
    presenceType,
    presenceKey,

}) => {
    const wire = getWireConfig({
        actorKey,
        presenceType,
        presenceKey,
    })

    if (wire) {
        const { wires } = wire

        return (
            wires ?
                // This is an array of wires.
                wires :
                // This is a single wire, so wrap it in an array.
                [wire]
        )
    } else {

        return null
    }
}

export const getWirePlacedFront = ({
    actorKey,
    presenceType,
    presenceKey,

}) => {
    const wire = getWireConfig({
        actorKey,
        presenceType,
        presenceKey,
    })

    // If there is no wire, return null.
    if (!wire) {
        return null
    }

    // If there is a wire, return a boolean.
    return wire.placedFront || false
}
