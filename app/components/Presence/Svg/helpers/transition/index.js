import { CUBE_Y_AXIS_LENGTH } from '../../../../../constants/cubeIndex'
import { ACTOR } from '../../../../../constants/scene'
import { BACKDROP } from '../../../../../constants/scene/things'

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

const getTransitionDelayPrefix = presenceType => {
    switch (presenceType) {
        case ACTOR:
            return 'vivus'
        case BACKDROP:
            return 'top'
        default:
            return 'leftRight'
    }
}

export const getTransitionDelayClass = presenceType => (
    `${getTransitionDelayPrefix(presenceType)}__transition`
)

export const getTransitionDelayIndexClass = ({
    yIndex,
    presenceType

}) => (
    `${
        getTransitionDelayPrefix(presenceType)
    }__transitionIndex__${
        getTransitionDelayIndex({
            yIndex,
            presenceType
        })
    }`
)
