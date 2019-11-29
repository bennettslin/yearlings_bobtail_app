import { VAN_NUYS_HALLWAY_KEY } from '../../../constants/scene/scenes'

import {
    CEILING_COLOUR as C,
    FLOOR_COLOUR as F,
    VAN_NUYS_WALL_COLOUR as W,
    DOOR_COLOUR as E,
    SEAT_COLOUR as S
} from '../../cubes/colours'

import { d, g } from '../../cubes/zIndices'

const CUBES = {
    [VAN_NUYS_HALLWAY_KEY]: {
        ceiling: {
            hslaColours: [
                [C],
                [C],
                [C],
                [C, C, W, W, W, C],
                [C]
            ],
            zIndices: [
                [g],
                [g],
                [g],
                [g, g, d, d, d, g],
                [g]
            ]
        },
        floor: {
            hslaColours: [
                [W],
                [W, F, F, F, F, F, F, F, F, F, F, W],
                [W, F, F, F, F, F, F, F, F, F, F, W],
                [W, W, E, E, E, W, W, W, W, W, W, W],
                [W, F, F, F, F, F, S, S, S, S, F, W],
                [W, F, F, F, F, F, F, F, F, F, F, W]
            ],
            zIndices: [
                [g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g],
                [g, g, 7, 7, 7, g, g, g, g, g, g, g],
                [g, 1, 1, 1, 1, 1, 4, 4, 4, 4, 1, g],
                [g, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, g]
            ]
        }
    }
}

export default CUBES
