import { BACKSTAGE_KEY } from '../../../constants/scene/scenes'

import {
    GROUND_COLOUR as G,
    CEILING_COLOUR as C,
    FLOOR_COLOUR as F,
    WALL_COLOUR as W
} from '../../cubes/colours'

import { g } from '../../cubes/zIndices'

const CUBES = {
    [BACKSTAGE_KEY]: {
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
    }
}

export default CUBES
