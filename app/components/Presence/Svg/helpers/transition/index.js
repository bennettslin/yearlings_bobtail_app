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
    if (
        presenceType === ACTOR ||
        presenceType === BACKDROP
    ) {
        return presenceType
    }

    return 'presence'
}

export const getTransitionDelayClass = ({
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
