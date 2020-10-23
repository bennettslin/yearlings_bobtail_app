import { CUBE_Y_AXIS_LENGTH } from '../../../../../constants/cubeIndex'
import { ACTOR } from '../../../../../constants/scene'
import { FIXTURE, FURNITURE } from '../../../../../constants/scene/things'

const getIsPathTransition = presenceType => {
    switch (presenceType) {
        case ACTOR:
        case FIXTURE:
        case FURNITURE:
            return true
        default:
            return false
    }
}

const getTransitionDelayIndex = ({
    transitionIndex,
    yIndex,
    presenceType,
    isWire
}) => {
    if (
        getIsPathTransition(presenceType) ||
        isWire
    ) {
        return CUBE_Y_AXIS_LENGTH
    }

    const index = Number.isFinite(transitionIndex) ? transitionIndex : yIndex

    return index > -1 ? index : 0
}

const getTransitionDelayPrefix = ({
    transitionKey,
    presenceType,
    xPosition,
    hasWires,
    isWire

}) => {
    if (transitionKey) {
        return transitionKey
    }

    if (isWire) {
        return 'opacity'
    }

    if (getIsPathTransition(presenceType)) {
        return 'path'
    }

    // If it has wires, it should come from the top.
    if (hasWires) {
        return 'top'
    }

    // By default, slide from left or right, or from top if perfectly centred.
    if (xPosition < 5.5) {
        return 'left'
    } else if (xPosition > 5.5) {
        return 'right'
    } else {
        return 'top'
    }
}

export const getTransitionDelayClass = ({
    transitionKey,
    presenceType,
    xPosition,
    hasWires,
    isWire

}) => (
    `${getTransitionDelayPrefix(({
        transitionKey,
        presenceType,
        xPosition,
        hasWires,
        isWire
    }))}__transition`
)

export const getTransitionDelayIndexClass = ({
    transitionKey,
    transitionIndex,
    yIndex,
    presenceType,
    xPosition,
    hasWires,
    isWire

}) => (
    `${
        getTransitionDelayPrefix({
            transitionKey,
            presenceType,
            xPosition,
            hasWires,
            isWire
        })
    }__transitionIndex__${
        getTransitionDelayIndex({
            transitionIndex,
            yIndex,
            presenceType,
            isWire
        })
    }`
)
