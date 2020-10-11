import {
    CUBE_Y_AXIS_LENGTH,
    CUBE_Y_INDICES
} from '../../../constants/cubeIndex'

export const PRESENCE_TRANSITION_CONFIGS = [
    {
        transitionKey: 'vivus',
        indices: [CUBE_Y_AXIS_LENGTH],
        transitionStyle: 'opacity'
    },
    {
        transitionKey: 'top',
        indices: CUBE_Y_INDICES,
        transitionStyle: 'top'
    },
    {
        transitionKey: 'leftRight',
        indices: CUBE_Y_INDICES,
        transitionStyle: 'left'
    }
]
