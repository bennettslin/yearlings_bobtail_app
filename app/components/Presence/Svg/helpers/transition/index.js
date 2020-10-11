import { CUBE_Y_AXIS_LENGTH } from '../../../../../constants/cubeIndex'
import { ACTOR } from '../../../../../constants/scene'
import { BACKDROP, FIXTURE } from '../../../../../constants/scene/things'
import { capitaliseForClassName } from '../../../../../helpers/format'

const getTransitionDelayIndex = ({
    yIndex,
    presenceType,
    actorKey
}) => {
    if (
        presenceType === FIXTURE ||
        actorKey
    ) {
        return CUBE_Y_AXIS_LENGTH
    }

    return yIndex > -1 ? yIndex : 0
}

// TODO: Eventually this will just be all of them.
const getTransitionDelayPrefix = presenceType => {
    if (
        presenceType === ACTOR ||
        presenceType === BACKDROP
    ) {
        return capitaliseForClassName(presenceType)
    }

    return 'Presence'
}

export const getTransitionDelayClass = ({
    yIndex,
    presenceType,
    actorKey

}) => (
    `${
        getTransitionDelayPrefix(presenceType)
    }__transitionDelay__${
        getTransitionDelayIndex({
            yIndex,
            presenceType,
            actorKey
        })
    }`
)
