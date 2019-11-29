import { RICKSHAW_KEY } from '../../../constants/scene/scenes'

import {
    SAND_COLOUR as X,
    STREET_COLOUR as T
} from '../../cubes/colours'

import { LEFT } from '../../cubes/zIndices'

const CUBES = {
    [RICKSHAW_KEY]: {
        slantDirection: LEFT,
        floor: {
            hslaColours: [
                [X, X, X, X, X, X, X, X, X, T],
                [X, X, X, X, X, X, X, T],
                [X, X, X, X, X, X, T],
                [X, X, X, X, T],
                [X, X, T],
                [X, T]
            ],
            zIndices: [
                [0]
            ]
        }
    }
}

export default CUBES
