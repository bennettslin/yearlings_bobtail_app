import { NOHO_SCHOOL_KEY } from 'scene/cubesKeys'

import {
    GROUND_HSLA,
    FLOOR_HSLA,
    SEAT_HSLA
} from '../../hslaKeys'

const
    // Ground.
    G = GROUND_HSLA,

    // Floor.
    F = FLOOR_HSLA,

    // Seat.
    S = SEAT_HSLA,

    NOHO_SCHOOL = {
        floor: {
            hslaColours: [
                [G],
                [G],
                [G, G, G, G, G, G, G, F, F, F, G],
                [G, G, G, G, G, G, G, F, F, S, G],
                [G, G, G, G, G, G, G, F, F, S, G],
                [G, G, G, G, G, G, G, F, F, F, G]
            ],
            zIndices: [
                [0],
                [1],
                [1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1],
                [1]
            ]
        }
    },

    CUBES = {
        [NOHO_SCHOOL_KEY]: NOHO_SCHOOL
    }

export default CUBES
