import { TAIWAN_STAIRS_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR,
    PAVEMENT_COLOUR,
    GATE_COLOUR,
    CEILING_COLOUR,
    FLOOR_COLOUR,
    WALL_COLOUR,
    DOOR_COLOUR,
    PLATFORM_COLOUR
} from '../../cubes/keys/hsla'

import {
    e,
    g,
    k
} from '../../cubes/keys/zIndex'

const
    D = DEFAULT_COLOUR,
    V = PAVEMENT_COLOUR,
    A = GATE_COLOUR,
    C = CEILING_COLOUR,
    F = FLOOR_COLOUR,
    W = WALL_COLOUR,
    E = DOOR_COLOUR,
    P = PLATFORM_COLOUR,

    TAIWAN_STAIRS_CUBES = {
        ceiling: {
            hslaColours: [
                [D],
                [D],
                [D],
                [W],
                [W, W, C, C, C, C, C, C, C, C, W]
            ],
            zIndices: [
                [k],
                [k],
                [k],
                [g, g, g, e, e, e, e, g],
                [g]
            ]
        },
        floor: {
            hslaColours: [
                [A],
                [A, A, A, E, E, E, A],
                [V],
                [W],
                [W, W, P, P, P, P, P, P, F, F, W]
            ],
            zIndices: [
                [0],
                [6, 6, 6, 6, 6, 6, 6],
                [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6],
                [g, g, g, 5, 5, 5, 5, g],
                [g, g, 0, 0, 1, 2, 3, 4, 5, 5, g],
                [g, g, 0, 0, 1, 2, 3, 4, 5, 5, g]
            ]
        }
    },

    CUBES = {
        [TAIWAN_STAIRS_KEY]: TAIWAN_STAIRS_CUBES
    }

export default CUBES
