import { CUBE_Y_AXIS_LENGTH } from '../../../../../constants/cubeIndex'
import { ACTOR } from '../../../../../constants/scene'
import { BACKDROP, FIXTURE, FURNITURE } from '../../../../../constants/scene/things'
import {
    OPACITY,
    LEFT,
    RIGHT,
    REALISTIC,
    TOP,
} from '../../../../../constants/transition'

const getIsRealisticTransition = presenceType => {
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
    isWire,
}) => {
    if (
        getIsRealisticTransition(presenceType) ||
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
    isWire,

}) => {
    if (transitionKey) {
        return transitionKey
    }

    if (isWire) {
        return OPACITY
    }

    // If it's an actor, fixture, or furniture, it should fade in.
    if (getIsRealisticTransition(presenceType)) {
        return REALISTIC
    }

    // If it's a backdrop or has wires, slide in from top.
    if (presenceType === BACKDROP || hasWires) {
        return TOP
    }

    // Slide in from left or right, whichever is closer.
    if (xPosition < 5.5) {
        return LEFT
    } else {
        return RIGHT
    }
}

export const getTransitionDelayClass = ({
    transitionKey,
    presenceType,
    xPosition,
    hasWires,
    isWire,

}) => (
    `${getTransitionDelayPrefix(({
        transitionKey,
        presenceType,
        xPosition,
        hasWires,
        isWire,
    }))}__transition`
)

export const getTransitionDelayIndexClass = ({
    transitionKey,
    transitionIndex,
    yIndex,
    presenceType,
    xPosition,
    hasWires,
    isWire,

}) => (
    `${
        getTransitionDelayPrefix({
            transitionKey,
            presenceType,
            xPosition,
            hasWires,
            isWire,
        })
    }__transitionIndex__${
        getTransitionDelayIndex({
            transitionIndex,
            yIndex,
            presenceType,
            isWire,
        })
    }`
)
