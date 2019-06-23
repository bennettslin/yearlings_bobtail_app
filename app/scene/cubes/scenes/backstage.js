import { BACKSTAGE_KEY } from 'constants/scene/scenes'

import {
    GROUND_HSLA,
    CEILING_HSLA,
    FLOOR_HSLA,
    WALL_HSLA
} from '../keys/hsla'

import {
    g
} from '../keys/zIndex'

const
    G  = GROUND_HSLA,
    C = CEILING_HSLA,
    F = FLOOR_HSLA,
    W = WALL_HSLA,

    BACKSTAGE_CUBES = {
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
                [G, F, F, F, F, F, F, F, F, F, F, G]
            ],
            zIndices: [
                [g],
                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ]
        }
    },

    CUBES = {
        [BACKSTAGE_KEY]: BACKSTAGE_CUBES
    }

export default CUBES
