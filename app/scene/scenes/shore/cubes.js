import { SHORE_KEY } from '../../../constants/scene/scenes'

import {
    SAND_COLOUR as X,
    OCEAN_COLOUR as V
} from '../../cubes/colours'

import { RIGHT } from '../../cubes/zIndices'

const CUBES = {
    [SHORE_KEY]: {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [X, X, X, X, X, V],
                [X, X, X, X, X, X, V],
                [X, X, X, X, X, X, X, X, V],
                [X, X, X, X, X, X, X, X, X, X, V],
                [X, X, X, X, X, X, X, X, X, X, X, V],
                [X]
            ],
            zIndices: [
                [0]
            ]
        }
    }
}

export default CUBES
