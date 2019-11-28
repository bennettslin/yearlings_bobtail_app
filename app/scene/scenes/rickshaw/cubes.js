import {
    RICKSHAW_KEY
} from '../../../constants/scene/scenes'

import {
    SAND_COLOUR,
    STREET_COLOUR
} from '../../cubes/keys/hsla'

import {
    LEFT
} from '../../cubes/keys/zIndex'

const
    N = SAND_COLOUR,
    T = STREET_COLOUR,

    RICKSHAW_CUBES = {
        slantDirection: LEFT,
        floor: {
            hslaColours: [
                [N, N, N, N, N, N, N, N, N, T],
                [N, N, N, N, N, N, N, T],
                [N, N, N, N, N, N, T],
                [N, N, N, N, T],
                [N, N, T],
                [N, T]
            ],
            zIndices: [
                [0]
            ]
        }
    },

    CUBES = {
        [RICKSHAW_KEY]: RICKSHAW_CUBES
    }

export default CUBES
