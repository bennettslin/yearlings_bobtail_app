import {
    BUBBLE,
    PUPPET
} from 'constants/scene/things'

export const getWires = ({ presenceType, wire }) => {

    // Send generic single wire if specified, or if not and it's a puppet.
    if (wire === 1 || (!wire && presenceType === PUPPET)) {
        return [{}]
    }

    // Send generic double wire if specified, or if not and it's a bubble.
    if (wire === 2 || (!wire && presenceType === BUBBLE)) {
        return [{ x: 0.3 }, { x: 0.7 }]
    }

    if (wire && !Array.isArray(wire)) {
        return [wire]
    }

    // Return specified config, or undefined.
    return wire
}
