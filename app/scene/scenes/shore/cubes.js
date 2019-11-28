import { SHORE_KEY } from '../../../constants/scene/scenes'

import {
    SAND_COLOUR as N,
    OCEAN_COLOUR as O
} from '../../cubes/colours'

import { RIGHT } from '../../cubes/zIndices'

const CUBES = {
    [SHORE_KEY]: {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [N, N, N, N, N, O],
                [N, N, N, N, N, N, O],
                [N, N, N, N, N, N, N, N, O],
                [N, N, N, N, N, N, N, N, N, N, O],
                [N, N, N, N, N, N, N, N, N, N, N, O],
                [N]
            ],
            zIndices: [
                [0]
            ]
        }
    }
}

export default CUBES
