import { ALLEY_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR,
    PAVEMENT_COLOUR,
    WALL_COLOUR,
    DOOR_COLOUR,
    PLATFORM_COLOUR
} from '../../cubes/colours'

import {
    e,
    g,
    k
} from '../../cubes/zIndices'

const
    D = DEFAULT_COLOUR,
    V = PAVEMENT_COLOUR,
    W = WALL_COLOUR,
    E = DOOR_COLOUR,
    P = PLATFORM_COLOUR,

    ALLEY_CUBES = {
        ceiling: {
            hslaColours: [
                [W],
                [W],
                [D]
            ],
            zIndices: [
                [g],
                [g, e, e, e, e, e, g],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [W],
                [W, E, E, E, E, E, W],
                [P, P, P, P, P, P, P, V],
                [V]
            ],
            zIndices: [
                [g],
                [g, e, e, e, e, e, g],
                [4, 4, 4, 4, 4, 4, 4, 1],
                [1]
            ]
        }
    },

    CUBES = {
        [ALLEY_KEY]: ALLEY_CUBES
    }

export default CUBES
