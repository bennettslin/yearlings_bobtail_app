import { ATTIC_KEY } from '../../../constants/scene/scenes'

import { NIGHT_COLOUR as Y } from '../../cubes/colours'

// eslint-disable-next-line object-curly-newline
import { a, c, g } from '../../cubes/zIndices'

const CUBES = {
    [ATTIC_KEY]: {
        ceiling: {
            hslaColours: [
                [Y]
            ],
            zIndices: [
                [0],
                [0, g, g, g, g, g, g, g, g, g, g, 0]
            ]
        },
        floor: {
            hslaColours: [
                [Y]
            ],
            zIndices: [
                [0],
                [0, 6, c, c, c, c, 6, 6, 1, 1, 1, 0],
                [0, 6, a, a, a, a, 6, 6, 1, 1, 1, 0],
                [0, 6, 6, 6, 6, 6, 6, 6, 1, 1, 1, 0],
                [0, 6, 6, 6, 6, 6, 5, 5, 3, 2, 1, 0],
                [0, 6, 6, 6, 6, 6, 4, 4, 3, 2, 1, 0]
            ]
        }
    }
}

export default CUBES
