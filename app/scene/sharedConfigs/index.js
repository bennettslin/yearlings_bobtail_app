import { getWireForActor } from './actors'
import { getWireForThing } from './things'

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
