import { STEAM_TUNNEL_KEY } from '../../../constants/scene/scenes'

import {
    DIRT_FLOOR_COLOUR as F,
    UNDERGROUND_WALL_COLOUR as W
} from '../../cubes/colours'

import { d } from '../../cubes/zIndices'

const CUBES = {
    [STEAM_TUNNEL_KEY]: {
        ceiling: {
            hslaColours: [
                [W]
            ],
            zIndices: [
                [0],
                [0, d, d, d, d, d, d, d, d, d, d, 0],
                [d],
                [d],
                [d],
                [0, d, d, d, d, d, d, d, d, d, d, 0]
            ]
        },
        floor: {
            hslaColours: [
                [F]
            ],
            zIndices: [
                [0]
            ]
        }
    }
}

export default CUBES
