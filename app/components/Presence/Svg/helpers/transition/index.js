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
    yIndex,
    presenceType
}) => {
    if (getIsPathTransition(presenceType)) {
        return CUBE_Y_AXIS_LENGTH
    }

    return yIndex > -1 ? yIndex : 0
}

const getTransitionDelayPrefix = ({
    presenceType,
    xPosition,
    hasWires

}) => {
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
    presenceType,
    xPosition,
    hasWires

}) => (
    `${getTransitionDelayPrefix(({
        presenceType,
        xPosition,
        hasWires
    }))}__transition`
)

export const getTransitionDelayIndexClass = ({
    yIndex,
    presenceType,
    xPosition,
    hasWires

}) => (
    `${
        getTransitionDelayPrefix({
            presenceType,
            xPosition,
            hasWires
        })
    }__transitionIndex__${
        getTransitionDelayIndex({
            yIndex,
            presenceType
        })
    }`
)
