import { RICKSHAW_KEY } from '../../../constants/scene/scenes'

import {
    SAND_COLOUR as N,
    STREET_COLOUR as T
} from '../../cubes/colours'

import { LEFT } from '../../cubes/zIndices'

const CUBES = {
    [RICKSHAW_KEY]: {
        slantDirection: LEFT,
        floor: {
            hslaColours: [
                [N, N, N, N, N, N, N, N, N, T],
                [N, N, N, N, N, N, N, T],
                [N, N, N, N, N, N, T],
                [N, N, N, N, T],
                [N, N, T],
                [N, T]
            ],
            zIndices: [
                [0]
            ]
        }
    }
}

export default CUBES
