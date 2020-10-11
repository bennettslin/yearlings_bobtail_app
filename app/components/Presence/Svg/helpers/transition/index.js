import { CUBE_Y_AXIS_LENGTH } from '../../../../../constants/cubeIndex'
import { ACTOR } from '../../../../../constants/scene'

const getTransitionDelayIndex = ({
    yIndex,
    presenceType
}) => {
    if (
        presenceType === ACTOR
    ) {
        return CUBE_Y_AXIS_LENGTH
    }

    return yIndex > -1 ? yIndex : 0
}

const getTransitionDelayPrefix = ({
    presenceType,
    xPosition

}) => {
    switch (presenceType) {
        case ACTOR:
            return 'path'
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
    xPosition

}) => (
    `${getTransitionDelayPrefix(({
        presenceType,
        xPosition
    }))}__transition`
)

export const getTransitionDelayIndexClass = ({
    yIndex,
    presenceType,
    xPosition

}) => (
    `${
        getTransitionDelayPrefix({
            presenceType,
            xPosition
        })
    }__transitionIndex__${
        getTransitionDelayIndex({
            yIndex,
            presenceType
        })
    }`
)
