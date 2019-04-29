import {
    BENNETT_COUCH_KEY,
    BENNETT_COUCH_THOUGHT_KEY
} from '../../cubesKeys'

import {
    GROUND_HSLA,
    CEILING_HSLA,
    FLOOR_HSLA,
    WALL_HSLA,
    FURNITURE_HSLA,
    UPHOLSTERY_HSLA
} from '../../hslaKeys'

import {
    g
} from '../../zIndexKeys'

const
    G = GROUND_HSLA,
    C = CEILING_HSLA,
    F = FLOOR_HSLA,
    W = WALL_HSLA,
    R = FURNITURE_HSLA,
    U = UPHOLSTERY_HSLA,

    BENNETT_COUCH_CUBES = {
        ceiling: {
            hslaColours: [
                [C]
            ],
            zIndices: [
                [g]
            ]
        },
        floor: {
            hslaColours: [
                [W],
                [W, F, F, U, U, U, U, U, R, R, F, W],
                [W, F, R, U, U, U, U, U, F, F, F, W],
                [W, F, F, U, U, U, U, U, F, F, F, W],
                [W, F, F, F, F, F, F, F, F, F, F, W]
            ],
            zIndices: [
                [g],
                [g, 1, 1, 7, 7, 7, 7, 7, 4, 4, 1, g],
                [g, 1, 4, 3, 3, 3, 3, 3, 1, 1, 1, g],
                [g, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },
    BENNETT_COUCH_THOUGHT_CUBES = {
        floor: {
            hslaColours: [
                [G],
                [G, F, F, U, U, U, U, U, R, R, F, G],
                [G, F, R, U, U, U, U, U, F, F, F, G],
                [G, F, F, U, U, U, U, U, F, F, F, G],
                [G, F, F, F, F, F, F, F, F, F, F, G],
                [G]
            ],
            zIndices: [
                [0],
                [0, 1, 1, 7, 7, 7, 7, 7, 4, 4, 1, 0],
                [0, 1, 4, 3, 3, 3, 3, 3, 1, 1, 1, 0],
                [0, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, 0],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0]
            ]
        }
    },

    CUBES = {
        [BENNETT_COUCH_KEY]: BENNETT_COUCH_CUBES,
        [BENNETT_COUCH_THOUGHT_KEY]: BENNETT_COUCH_THOUGHT_CUBES
    }

export default CUBES
