import { CUBE_Y_AXIS_LENGTH } from '../../constants/cubeIndex'
import { FIXTURE } from '../../constants/scene/things'

export const getTimeoutEnterForPresence = ({
    yIndex,
    presenceType,
    actorKey
}) => {
    /**
     * FIXME: Eventually don't hard code these values.
     *
     * 500 for cubes.
     * Furthest layers enter first, closer layers enter in increments of 100.
     * Actors and fixtures enter last.
     */
    if (
        presenceType === FIXTURE ||
        actorKey
    ) {
        return 500 + 100 * 6
    } else {
        return 500 + 100 * yIndex
    }
}

export const getTimeoutExitForPresence = ({
    yIndex,
    presenceType,
    actorKey
}) => {
    /**
     * FIXME: Eventually don't hard code these values.
     *
     * Actors and fixtures exit first.
     * Closer layers exit first, further layers exit in increments of 100
     */
    if (
        presenceType === FIXTURE ||
        actorKey
    ) {
        return 0
    } else {
        return 100 * (CUBE_Y_AXIS_LENGTH - yIndex - 1)
    }
}
