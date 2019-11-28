import { MUSEUM_KEY } from '../../../constants/scene/scenes'

import {
    CEILING_COLOUR,
    FLOOR_COLOUR,
    WALL_COLOUR,
    FURNITURE_COLOUR
} from '../../cubes/colours'

import {
    d,
    g
} from '../../cubes/zIndices'

const
    C = CEILING_COLOUR,
    F = FLOOR_COLOUR,
    W = WALL_COLOUR,
    R = FURNITURE_COLOUR,

    MUSEUM_CUBES = {
        ceiling: {
            hslaColours: [
                [C],
                [C],
                [W, C],
                [W, C],
                [W, C],
                [C]
            ],
            zIndices: [
                [g],
                [g],
                [d, g],
                [d, g],
                [d, g],
                [g]
            ]
        },
        floor: {
            hslaColours: [
                [W],
                [W, F, F, F, F, F, F, F, F, F, F, W],
                [F, F, F, F, F, F, F, F, F, F, F, W],
                [F, F, F, F, F, F, F, F, R, R, F, W],
                [F, F, F, F, F, F, F, F, R, R, F, W],
                [W, F, F, F, F, F, F, F, F, F, F, W]
            ],
            zIndices: [
                [g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g],
                [1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, g],
                [1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    },

    CUBES = {
        [MUSEUM_KEY]: MUSEUM_CUBES
    }

export default CUBES
