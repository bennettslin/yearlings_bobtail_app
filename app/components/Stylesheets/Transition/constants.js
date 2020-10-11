import {
    CUBE_Y_AXIS_LENGTH,
    CUBE_Y_INDICES
} from '../../../constants/cubeIndex'
import { ACTOR } from '../../../constants/scene'
import { BACKDROP } from '../../../constants/scene/things'

export const PRESENCE_TRANSITION_CONFIGS = [
    {
        presenceType: ACTOR,
        indices: [CUBE_Y_AXIS_LENGTH],
        transitionStyle: 'opacity'
    },
    {
        presenceType: BACKDROP,
        indices: CUBE_Y_INDICES,
        transitionStyle: 'top'
    },
    {
        presenceType: 'presence',
        indices: CUBE_Y_INDICES,
        transitionStyle: 'opacity'
    }
]
