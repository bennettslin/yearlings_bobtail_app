import { TAIWAN_ROOM_KEY } from '../../../constants/scene/scenes'

import {
    DARK_FLOOR_COLOUR as Y,
    DARK_WALL_COLOUR as Z,
    FURNITURE_COLOUR as R
} from '../../cubes/colours'

// eslint-disable-next-line object-curly-newline
import { e, g } from '../../cubes/zIndices'

const CUBES = {
    [TAIWAN_ROOM_KEY]: {
        ceiling: {
            hslaColours: [
                [Z]
            ],
            zIndices: [
                [0],
                [0, g, g, g, g, g, g, g, g, g, g, 5],
                [0, g, g, g, g, g, g, g, g, g, g, 5],
                [e, g, g, 5, 5, 5, 5, 5, e, e, 5, 5],
                [e, g, g, g, g, g, g, g, g, g, g, 5],
                [0, g, g, g, g, g, g, g, g, g, g, 5]
            ]
        },
        floor: {
            hslaColours: [
                [Y],
                [Y],
                [Y],
                [Z, Y],
                [Z, Y, Y, Y, Y, R, R, Y],
                [Y]
            ],
            zIndices: [
                [g],
                [g, 5],
                [g, 4, 4, 5],
                [5, 3, 3, 5],
                [5, 2, 2, 5, 5, 8, 8, 5],
                [g, 1, 1, 5]
            ]
        }
    }
}

export default CUBES
