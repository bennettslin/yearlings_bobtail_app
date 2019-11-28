import {
    BASEMENT_BED_KEY,
    BASEMENT_MAGIC_KEY
} from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR,
    GROUND_COLOUR,
    CEILING_COLOUR,
    FLOOR_COLOUR,
    WALL_COLOUR,
    DOOR_COLOUR,
    PLATFORM_COLOUR,
    UPHOLSTERY_COLOUR
} from '../../cubes/keys/hsla'

import {
    a,
    c,
    k
} from '../../cubes/keys/zIndex'

const
    D = DEFAULT_COLOUR,
    G = GROUND_COLOUR,
    C = CEILING_COLOUR,
    F = FLOOR_COLOUR,
    W = WALL_COLOUR,
    E = DOOR_COLOUR,
    P = PLATFORM_COLOUR,
    U = UPHOLSTERY_COLOUR,

    ceiling = {
        hslaColours: [
            [D],
            [C, C, W, W, C],
            [C]
        ],
        zIndices: [
            [k],
            [c, c, a, a, c],
            [c]
        ]
    },

    BASEMENT_BED_CUBES = {
        ceiling,
        floor: {
            hslaColours: [
                [G],
                [W, W, E, E, W],
                [W, F, P, P, F, F, F, F, F, F, F, W],
                [W, F, P, P, F, U, U, U, U, U, U, W],
                [W, F, F, F, F, U, U, U, U, U, U, W],
                [W, F, F, F, F, F, F, F, F, F, F, W]
            ],
            zIndices: [
                [2],
                [c, c, a, a, c],
                [c, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, c],
                [c, 0, 1, 1, 0, 3, 3, 3, 3, 3, 3, c],
                [c, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, c],
                [c, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, c]
            ]
        }
    },
    BASEMENT_MAGIC_CUBES = {
        floor: {
            hslaColours: [
                [G],
                [G],
                [G, F, P, P, F, F, F, F, F, F, F, G],
                [G, F, P, P, F, U, U, U, U, U, U, G],
                [G, F, F, F, F, U, U, U, U, U, U, G],
                [G, F, F, F, F, F, F, F, F, F, F, G]
            ],
            zIndices: [
                [2],
                [2],
                [2, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2],
                [2, 0, 1, 1, 0, 3, 3, 3, 3, 3, 3, 2],
                [2, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 2],
                [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2]
            ]
        }
    },

    CUBES = {
        [BASEMENT_BED_KEY]: BASEMENT_BED_CUBES,
        [BASEMENT_MAGIC_KEY]: BASEMENT_MAGIC_CUBES
    }

export default CUBES
