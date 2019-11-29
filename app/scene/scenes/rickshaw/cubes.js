import { RICKSHAW_KEY } from '../../../constants/scene/scenes'

import {
    SAND_COLOUR as K,
    STREET_COLOUR as T
} from '../../cubes/colours'

import { LEFT } from '../../cubes/zIndices'

const CUBES = {
    [RICKSHAW_KEY]: {
        slantDirection: LEFT,
        floor: {
            hslaColours: [
                [K, K, K, K, K, K, K, K, K, T],
                [K, K, K, K, K, K, K, T],
                [K, K, K, K, K, K, T],
                [K, K, K, K, T],
                [K, K, T],
                [K, T]
            ],
            zIndices: [
                [0]
            ]
        }
    }
}

export default CUBES
