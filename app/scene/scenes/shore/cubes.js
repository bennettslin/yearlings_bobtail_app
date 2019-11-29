import { SHORE_KEY } from '../../../constants/scene/scenes'

import {
    SAND_COLOUR as K,
    OCEAN_COLOUR as V
} from '../../cubes/colours'

import { RIGHT } from '../../cubes/zIndices'

const CUBES = {
    [SHORE_KEY]: {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [K, K, K, K, K, V],
                [K, K, K, K, K, K, V],
                [K, K, K, K, K, K, K, K, V],
                [K, K, K, K, K, K, K, K, K, K, V],
                [K, K, K, K, K, K, K, K, K, K, K, V],
                [K]
            ],
            zIndices: [
                [0]
            ]
        }
    }
}

export default CUBES
