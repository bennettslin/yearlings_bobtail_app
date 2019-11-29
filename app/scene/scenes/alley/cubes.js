import { ALLEY_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR as D,
    PAVEMENT_COLOUR as V,
    EXTERIOR_COLOUR as X,
    PLATFORM_COLOUR as P
} from '../../cubes/colours'

// eslint-disable-next-line object-curly-newline
import { e, g, k } from '../../cubes/zIndices'

const CUBES = {
    [ALLEY_KEY]: {
        ceiling: {
            hslaColours: [
                [X],
                [X],
                [D]
            ],
            zIndices: [
                [g],
                [g, e, e, e, e, e, g],
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [X],
                [X, P, P, P, P, P, X],
                [P, P, P, P, P, P, P, V],
                [V]
            ],
            zIndices: [
                [g],
                [g, 4, 4, 4, 4, 4, g],
                [4, 4, 4, 4, 4, 4, 4, 1],
                [1]
            ]
        }
    }
}

export default CUBES
